import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { hashPassword, validateEmail, validatePassword, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  console.log('🚀 Signup API called');
  try {
    console.log('🔄 Connecting to database...');
    await connectDB();
    console.log('✅ Database connected for signup');

    const { email, password, firstName, lastName } = await request.json();
    console.log('📝 Signup data received:', { email, firstName, lastName, passwordLength: password?.length });

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

    // Validate password strength
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { error: 'Password validation failed', details: passwordValidation.errors },
        { status: 400 }
      );
    }

    // Check if user already exists
    console.log('🔍 Checking if user already exists...');
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      console.log('❌ User already exists:', email);
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }
    console.log('✅ User does not exist, proceeding with signup');

    // Hash password
    console.log('🔐 Hashing password...');
    const hashedPassword = await hashPassword(password);
    console.log('✅ Password hashed successfully');

    // Create new user
    console.log('👤 Creating new user...');
    const user = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
      firstName: firstName || '',
      lastName: lastName || '',
      preferences: {
        theme: 'dark',
        notifications: true,
        language: 'en',
      },
    });

    await user.save();
    console.log('✅ User saved to database:', { id: user._id, email: user.email });

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
      createdAt: user.createdAt,
    };

    console.log('✅ Signup completed successfully');
    return NextResponse.json(
      {
        message: 'User created successfully',
        user: userResponse,
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Signup error:', error);
    console.error('- Error name:', error.name);
    console.error('- Error message:', error.message);
    console.error('- Error stack:', error.stack);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}