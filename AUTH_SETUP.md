# Authentication Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Atlas Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/clockworq?retryWrites=true&w=majority

# JWT Secret Key (generate a strong secret for production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Next.js Environment Variables
NEXT_PUBLIC_SITE_URL=https://clockworq.ai
NEXT_PUBLIC_SITE_NAME=Clockworq.ai
```

## MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string and replace the placeholder in `.env.local`

## Features Implemented

### Backend
- ✅ User model with MongoDB schema
- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ API routes for login, signup, and user profile
- ✅ Input validation and error handling
- ✅ MongoDB connection with connection pooling

### Frontend
- ✅ Authentication context for state management
- ✅ Login/signup page with form validation
- ✅ User menu in navbar when logged in
- ✅ Protected routes and redirects
- ✅ Loading states and error handling
- ✅ Responsive design for mobile and desktop

### Security Features
- ✅ Password strength validation
- ✅ Email format validation
- ✅ JWT token expiration (7 days)
- ✅ Secure password hashing (bcrypt with salt rounds)
- ✅ Input sanitization
- ✅ Error messages that don't leak sensitive information

## API Endpoints

- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Authenticate user
- `GET /api/auth/me` - Get current user profile (requires authentication)

## Usage

1. Install dependencies: `npm install`
2. Set up environment variables
3. Start the development server: `npm run dev`
4. Navigate to `/login` to test authentication

## User Model Schema

```typescript
{
  email: string (required, unique, validated)
  password: string (required, hashed)
  firstName?: string
  lastName?: string
  isEmailVerified: boolean (default: false)
  lastLogin?: Date
  profilePicture?: string
  preferences: {
    theme: 'light' | 'dark' (default: 'dark')
    notifications: boolean (default: true)
    language: string (default: 'en')
  }
  createdAt: Date
  updatedAt: Date
}
```