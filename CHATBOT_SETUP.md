# Akira Chatbot Setup Guide

## Environment Variables

To enable the Akira chatbot, you need to set up the Gemini API key in your environment variables.

### For Local Development

1. Create a `.env.local` file in the root directory:
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

2. Get your Gemini API key:
   - Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Sign in with your Google account
   - Create a new API key
   - Copy the key and paste it in your `.env.local` file

### For Production (Railway)

1. Go to your Railway project dashboard
2. Navigate to the "Variables" tab
3. Add a new environment variable:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your Gemini API key

## Features

### Akira's Capabilities
- **Knowledge**: Comprehensive understanding of Clockworq.ai's services, pricing, team, and technology
- **Personality**: Friendly, professional, and enthusiastic about automation
- **Conversation**: Natural dialogue about AI agents, workflow automation, and business solutions
- **Quick Questions**: Pre-built questions for common inquiries

### Chatbot Interface
- **Intro Popup**: Welcome popup appears 3 seconds after first visit
- **Floating Button**: Teal/cyan gradient button in bottom-right corner
- **Responsive Design**: Works on desktop and mobile
- **Real-time Chat**: Instant responses with typing indicators
- **Message History**: Maintains conversation context
- **Quick Actions**: Suggested questions for new users
- **Local Storage**: Remembers if user has seen intro popup

### Technical Details
- **API**: Uses Google Gemini 1.5 Flash model
- **Rate Limiting**: Built-in error handling and fallbacks
- **Security**: API key stored securely in environment variables
- **Performance**: Optimized for fast responses and smooth UX
- **Scrolling**: Custom scrollbar with smooth message navigation

## Usage

### First Visit Experience
1. **Intro Popup**: Appears automatically 3 seconds after page load
2. **Welcome Message**: Introduces Akira and explains capabilities
3. **Action Buttons**: 
   - "Start Chatting" - Opens chat interface immediately
   - "Maybe Later" - Closes popup, can chat later via floating button
4. **Memory**: Popup won't show again (stored in localStorage)

### Regular Chat Usage
1. Click the floating Akira button (bottom-right corner)
2. Start chatting about Clockworq.ai's services
3. Use quick questions for common topics
4. Akira will provide detailed, contextual responses about:
   - Services and solutions
   - Pricing and plans
   - Integration capabilities
   - Team information
   - Technical details
   - Setup process

## Troubleshooting

### Chatbot Not Responding
- Check that `GEMINI_API_KEY` is set correctly
- Verify the API key has sufficient credits
- Check browser console for error messages
- Test API connection: Visit `/api/test-gemini` to verify setup

### API Errors
- Ensure the Gemini API key is valid and active
- Check your Google AI Studio account for usage limits
- Verify network connectivity
- Check server logs for detailed error messages

### Environment Variable Issues
1. **Local Development**: Ensure `.env.local` file exists in project root
2. **File Format**: Use `GEMINI_API_KEY=your_key_here` (no quotes needed)
3. **Restart Server**: Restart your development server after adding the key
4. **Test Endpoint**: Visit `http://localhost:3000/api/test-gemini` to verify

### Scrolling Issues
- Messages should automatically scroll to bottom
- Custom scrollbar appears when content overflows
- Long messages wrap properly with `break-words`

### Common Error Messages
- **"API key not configured"**: Environment variable not set
- **"API Error: 400"**: Invalid API key or request format
- **"API Error: 403"**: API key doesn't have proper permissions
- **"API Error: 429"**: Rate limit exceeded

## Customization

The chatbot's personality and knowledge can be customized by modifying the `AKIRA_SYSTEM_PROMPT` in `src/app/api/chat/route.ts`.