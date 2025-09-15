# Railway Deployment Guide for Clockworq.ai

## Environment Variables Required

Set these environment variables in your Railway project dashboard:

### Required Variables
```
NEXT_PUBLIC_SITE_URL=https://your-app-name.railway.app
NEXT_PUBLIC_SITE_NAME=Clockworq.ai
NODE_ENV=production
PORT=3000
```

### Optional Variables (for future features)
```
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id

# Contact Form (if you add backend)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@clockworq.ai
SMTP_PASS=your-email-password
```

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

- **Build fails**: Check that all environment variables are set
- **App won't start**: Verify PORT variable is set to 3000
- **Static assets not loading**: Ensure NEXT_PUBLIC_SITE_URL is correct
- **Metadata issues**: Check that site URL and name are properly configured

## Files Created for Railway

- `railway.json` - Railway deployment configuration
- `env.example` - Environment variables template
- Updated `next.config.ts` - Added environment variable support
- Updated `package.json` - Added Railway-specific scripts
- Updated `src/app/layout.tsx` - Uses environment variables for metadata