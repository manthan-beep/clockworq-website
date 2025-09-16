"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AkiraChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showIntroPopup, setShowIntroPopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Akira, your AI assistant at Clockworq.ai. I'm here to help you learn about our automation solutions. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Show intro popup on first visit
  useEffect(() => {
    const hasSeenIntroBefore = localStorage.getItem('akira-intro-seen');
    if (!hasSeenIntroBefore) {
      const timer = setTimeout(() => {
        setShowIntroPopup(true);
      }, 3000); // Show after 3 seconds
      return () => clearTimeout(timer);
        }
  }, []);

  const handleIntroClose = () => {
    setShowIntroPopup(false);
    localStorage.setItem('akira-intro-seen', 'true');
  };

  const handleIntroChat = () => {
    setShowIntroPopup(false);
    setIsOpen(true);
    localStorage.setItem('akira-intro-seen', 'true');
  };


  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
          errorData = { error: 'Failed to parse error response' };
        }
        
        console.error('API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData
        });
        throw new Error(`API Error ${response.status}: ${errorData.error || 'Unknown error'}`);
      }

      const data = await response.json();
      
      if (!data.message) {
        throw new Error('No message received from API');
      }
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      let errorContent = "I'm sorry, I'm having trouble connecting right now. Please try again or contact our team directly.";
      
      if (error instanceof Error) {
        if (error.message.includes('API Error 500')) {
          errorContent = "I'm having trouble connecting to my AI service. Please check if the API key is configured correctly.";
        } else if (error.message.includes('API Error 400')) {
          errorContent = "There seems to be an issue with the request format. Please try rephrasing your question.";
        } else if (error.message.includes('API Error 403')) {
          errorContent = "I don't have permission to access the AI service. Please contact the administrator.";
        } else if (error.message.includes('API Error 429')) {
          errorContent = "I'm receiving too many requests right now. Please wait a moment and try again.";
        } else if (error.message.includes('No message received')) {
          errorContent = "I received a response but couldn't process it properly. Please try again.";
        }
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: errorContent,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const quickQuestions = [
    "What does Clockworq.ai do?",
    "How much does it cost?",
    "What integrations do you support?",
    "How long does setup take?"
  ];

  return (
    <>
      {/* Intro Popup */}
      <AnimatePresence>
        {showIntroPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleIntroClose}
            />
            
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6 text-white">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <span className="font-bold text-lg">A</span>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">Hi there! I&apos;m Akira</h3>
                    <p className="text-teal-100 text-sm">Your AI assistant at Clockworq.ai</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    I&apos;m here to help you discover how Clockworq.ai can automate your business workflows and save you time!
                  </p>
                  
                  <div className="bg-slate-50 rounded-2xl p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">I can help you with:</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                        Understanding our AI automation solutions
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                        Explaining pricing and plans
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                        Discussing integrations and setup
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                        Answering any questions about our services
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm text-slate-600">
                    Click &quot;Start Chatting&quot; to begin, or find me anytime using the chat button in the bottom-right corner.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={handleIntroClose}
                    className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Maybe Later
                  </button>
                  <button
                    onClick={handleIntroChat}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 font-semibold"
                  >
                    Start Chatting
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="akira-chatbot fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          boxShadow: [
            "0 10px 25px rgba(0, 209, 193, 0.3)",
            "0 10px 25px rgba(0, 209, 193, 0.5)",
            "0 10px 25px rgba(0, 209, 193, 0.3)"
          ]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.div
              key="avatar"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="relative"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/30 rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="akira-chatbot fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">A</span>
                </div>
                <div>
                  <h3 className="font-semibold">Akira</h3>
                  <p className="text-sm text-teal-100">AI Assistant</p>
                </div>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[400px] scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                        : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-slate-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-slate-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-slate-400 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-slate-200">
                <p className="text-xs text-slate-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => sendMessage(question)}
                      className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}


            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about Clockworq.ai..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-slate-800 placeholder-slate-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:from-teal-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}