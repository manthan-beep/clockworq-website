# Railway Deployment Guide for Clockworq.ai

## Environment Variables Required

Set these environment variables in your Railway project dashboard:

### Required Variables (Critical for Login/Signup)
```
# Database Connection (MongoDB Atlas)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# JWT Secret for Authentication (generate a strong random string)
JWT_SECRET=your-very-secure-random-secret-key-at-least-32-characters-long

# Node Environment
NODE_ENV=production

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-app-name.railway.app
NEXT_PUBLIC_SITE_NAME=Clockworq.ai
PORT=3000
```

### Optional Variables
```
# Chatbot (Gemini API)
GEMINI_API_KEY=your-gemini-api-key

# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id

# Contact Form (if you add backend)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@clockworq.ai
SMTP_PASS=your-email-password
```

### How to Get MongoDB URI:
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a free cluster (if you haven't already)
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password
6. Replace `<database>` with your database name (e.g., `clockworq`)

### How to Generate JWT_SECRET:
Run this command in terminal:
```bash
openssl rand -base64 32
```
Or use any random string generator (min 32 characters)

### MongoDB Atlas IP Whitelist:
⚠️ **CRITICAL**: Railway uses dynamic IPs, so you must:
1. Go to MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Select "Allow Access from Anywhere" (0.0.0.0/0)
4. This is safe - your database is still protected by username/password

## Deployment Steps

1. **Connect to Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `manthan-beep/clockworq-website` repository

2. **Configure Environment Variables:**
   - In your Railway project dashboard
   - Go to "Variables" tab
   - Add the required environment variables listed above

3. **Deploy:**
   - Railway will automatically detect it's a Next.js project
   - It will run `npm install` and `npm run build`
   - Then start the app with `npm start`

4. **Custom Domain (Optional):**
   - In Railway dashboard, go to "Settings" → "Domains"
   - Add your custom domain (e.g., clockworq.ai)
   - Update DNS records as instructed

## Local Development

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Update `.env.local` with your local values:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Clockworq.ai
   NODE_ENV=development
   ```

3. Run locally:
   ```bash
   npm run dev
   ```

## Troubleshooting

### Build Issues
- **Build fails with TypeScript errors**: Check that all required environment variables are set
- **App won't start**: Verify PORT variable is set to 3000

### Login/Signup Issues (500 Error)
- **"Internal Server Error" on signup/login**:
  1. Check Railway logs for specific error messages
  2. Verify `MONGODB_URI` is set correctly in Railway
  3. Verify `JWT_SECRET` is set in Railway
  4. Check MongoDB Atlas Network Access allows Railway IPs (0.0.0.0/0)
  5. Verify your MongoDB user has read/write permissions
  
### How to Check Railway Logs:
1. Go to Railway Dashboard → Your Project
2. Click on your service
3. Go to "Deployments" tab
4. Click on the latest deployment
5. View "Build Logs" and "Deploy Logs"
6. Look for errors starting with ❌

### Common Error Messages:
- `❌ MONGODB_URI is not defined!` → Add MONGODB_URI to Railway variables
- `❌ MongoDB connection failed!` → Check MongoDB Atlas IP whitelist
- `MongoServerError: Authentication failed` → Check MongoDB username/password
- `Connection timeout` → Check MongoDB Atlas Network Access settings

### Other Issues
- **Static assets not loading**: Ensure NEXT_PUBLIC_SITE_URL is correct
- **Metadata issues**: Check that site URL and name are properly configured

## Files Created for Railway

- `railway.json` - Railway deployment configuration
- `env.example` - Environment variables template
- Updated `next.config.ts` - Added environment variable support
- Updated `package.json` - Added Railway-specific scripts
- Updated `src/app/layout.tsx` - Uses environment variables for metadata