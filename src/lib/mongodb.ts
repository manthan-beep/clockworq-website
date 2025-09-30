import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

console.log('🔍 MongoDB Debug Info:');
console.log('- Environment:', process.env.NODE_ENV || 'development');
console.log('- MONGODB_URI exists:', !!MONGODB_URI);
console.log('- MONGODB_URI length:', MONGODB_URI?.length || 0);

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined!');
  console.error('Please add MONGODB_URI to your .env.local file');
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  console.log('🔄 Attempting to connect to MongoDB...');
  
  if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
  }

  if (cached.conn) {
    console.log('✅ Using existing MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    console.log('🔄 Creating new MongoDB connection...');
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      console.log('✅ MongoDB connected successfully!');
      console.log('- Database:', mongoose.connection.db?.databaseName);
      console.log('- Host:', mongoose.connection.host);
      console.log('- Port:', mongoose.connection.port);
      console.log('- Ready State:', mongoose.connection.readyState);
      return mongoose;
    }).catch((error) => {
      console.error('❌ MongoDB connection failed!');
      console.error('- Error:', error.message);
      console.error('- Code:', error.code);
      console.error('- Name:', error.name);
      console.error('- Full URI (masked):', MONGODB_URI?.replace(/\/\/[^:]+:[^@]+@/, '//***:***@'));
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log('✅ MongoDB connection established');
  } catch (e) {
    console.error('❌ Failed to establish MongoDB connection');
    console.error('- Error details:', e);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;