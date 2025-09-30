import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { verifyPassword, generateToken, validateEmail } from '@/lib/auth';

export async function POST(request: NextRequest) {
  console.log('🚀 Login API called');
  try {
    console.log('🔄 Connecting to database...');
    await connectDB();
    console.log('✅ Database connected for login');

    const { email, password } = await request.json();
    console.log('📝 Login data received:', { email, passwordLength: password?.length });

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Find user by email
    console.log('🔍 Looking for user with email:', email);
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      console.log('❌ User not found:', email);
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    console.log('✅ User found:', { id: user._id, email: user.email });

    // Verify password
    console.log('🔐 Verifying password...');
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      console.log('❌ Invalid password for user:', email);
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    console.log('✅ Password verified successfully');

    // Update last login
    user.lastLogin = new Date();
    await user.save();
    console.log('✅ Last login updated');

    // Generate JWT token
    console.log('🔑 Generating JWT token...');
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
    });
    console.log('✅ JWT token generated');

    // Return user data (without password) and token
    const userResponse = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isEmailVerified: user.isEmailVerified,
      preferences: user.preferences,
      lastLogin: user.lastLogin,
    };

    console.log('✅ Login completed successfully');
    return NextResponse.json(
      {
        message: 'Login successful',
        user: userResponse,
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Login error:', error);
    console.error('- Error name:', error.name);
    console.error('- Error message:', error.message);
    console.error('- Error stack:', error.stack);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}