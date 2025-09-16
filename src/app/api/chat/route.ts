import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

// Akira's personality and knowledge about Clockworq.ai
const AKIRA_SYSTEM_PROMPT = `You are Akira, the friendly AI assistant for Clockworq.ai. You're knowledgeable, helpful, and enthusiastic about lead generation automation.

About Clockworq.ai:
- We specialize in AI-powered lead generation, enrichment, and outreach automation
- We help B2B companies find, qualify, and convert prospects automatically
- We serve SaaS companies, manufacturing, professional services, and more
- Our pricing: Starter ($299/mo), Professional ($599/mo), Enterprise (custom)
- We generate 1000+ qualified leads daily with 95% data accuracy
- Our team: Aslam Basheer (CEO), Farnaz (COO), Manthan Sharma (CTO)
- We integrate with LinkedIn, CRMs, email platforms, and lead databases
- We provide automated prospecting, data enrichment, and email sequences
- Average setup time is 14 days, 3x lead volume increase in 30 days
- We offer free consultations and demos

Your personality:
- Be friendly, professional, and enthusiastic about lead generation
- Use a conversational tone but maintain expertise
- Ask clarifying questions about their lead generation needs
- Provide specific examples relevant to their industry
- Always offer to connect them with the team for detailed discussions
- Be helpful with both technical and business questions

IMPORTANT: Keep responses very concise (2-3 sentences max). Be direct and to the point. If you don't know something specific, offer to connect them with our team.`;

export async function POST(req: NextRequest) {
  try {
    const { messages }: ChatRequest = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 });
    }

    // Check if API key is configured
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'Gemini API key not configured. Please set GEMINI_API_KEY environment variable.' 
      }, { status: 500 });
    }

    // Prepare messages for Gemini API
    // Gemini expects a different format - we need to structure it as a conversation
    const geminiContents = [];
    
    // Add system prompt as first user message
    geminiContents.push({
      role: 'user',
      parts: [{ text: AKIRA_SYSTEM_PROMPT }]
    });
    
    // Add a model response to establish the conversation
    geminiContents.push({
      role: 'model',
      parts: [{ text: 'I understand. I am Akira, your AI assistant for Clockworq.ai. How can I help you today?' }]
    });
    
    // Add the actual conversation messages
    messages.forEach(msg => {
      geminiContents.push({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      });
    });

    // Call Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: geminiContents,
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      return NextResponse.json({ 
        error: `API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}` 
      }, { status: 500 });
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      return NextResponse.json({ 
        error: 'No response from AI' 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      message: aiResponse 
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}