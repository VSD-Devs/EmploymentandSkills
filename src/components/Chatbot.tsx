'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, ChevronUp, ExternalLink } from 'lucide-react';
import { faqs } from '@/data/faq';
import Link from 'next/link';

interface Message {
  type: 'user' | 'bot';
  content: string;
  links?: {
    text: string;
    url: string;
  }[];
  relatedQuestions?: string[];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(() => {
    // Check if this is the first visit
    if (typeof window !== 'undefined') {
      const hasVisited = localStorage.getItem('hasVisitedBefore');
      if (!hasVisited) {
        localStorage.setItem('hasVisitedBefore', 'true');
        return true; // Open chat on first visit
      }
    }
    return false;
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hello! I\'m here to help you navigate the platform. What would you like to know about?',
      links: [
        { text: 'Apprenticeships', url: '/apprenticeships' },
        { text: 'Adult Skills Funding', url: '/adult-skills-funding' },
        { text: 'Business Support', url: '/business' },
        { text: 'Training Providers', url: '/educators/training-providers' },
        { text: 'Young People', url: '/young-people' },
        { text: 'Educators', url: '/educators' }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
    handleSend(question);
  };

  const findMatchingFAQ = (searchText: string) => {
    const searchTerms = searchText.toLowerCase().split(' ');
    
    // First try to find an exact match
    let matchingFaq = faqs.find(faq => 
      faq.question.toLowerCase().includes(searchText) || 
      faq.category.toLowerCase() === searchText
    );

    // If no exact match, try matching individual terms
    if (!matchingFaq) {
      matchingFaq = faqs.find(faq => {
        const faqText = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
        return searchTerms.every(term => faqText.includes(term));
      });
    }

    // If still no match, try matching any term
    if (!matchingFaq) {
      matchingFaq = faqs.find(faq => {
        const faqText = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
        return searchTerms.some(term => faqText.includes(term));
      });
    }

    return matchingFaq;
  };

  const handleSend = (overrideInput?: string) => {
    const messageText = overrideInput || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      type: 'user',
      content: messageText
    };

    setMessages(prev => [...prev, userMessage]);

    // Find matching FAQ
    const matchingFaq = findMatchingFAQ(messageText);

    // Prepare bot response
    const botMessage: Message = {
      type: 'bot',
      content: matchingFaq 
        ? matchingFaq.answer
        : "I'm not sure about that. Could you try rephrasing your question? You can ask about apprenticeships, funding, business partnerships, youth support, or education collaborations.",
      links: matchingFaq?.links || [],
      relatedQuestions: matchingFaq?.relatedQuestions || []
    };

    // Add bot message with a slight delay for natural feel
    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed md:bottom-6 md:right-6 top-20 right-4 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        aria-label={isOpen ? 'Close chat' : 'Open chat with AI assistant'}
      >
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Bot className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed sm:absolute inset-0 sm:inset-auto sm:bottom-20 sm:right-0 w-full sm:w-[450px] h-[100dvh] sm:h-[600px] bg-white sm:rounded-xl shadow-xl flex flex-col border-t sm:border border-slate-200 z-[60]">
          {/* Header */}
          <div className="sticky top-0 p-3 sm:p-5 border-b border-slate-200 bg-emerald-50 sm:rounded-t-xl flex items-center gap-3">
            <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
            <div className="flex-1">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">Pathways Assistant</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="sm:hidden p-2 hover:bg-emerald-100 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-emerald-600" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4 sm:space-y-5">
            {messages.map((message, index) => (
              <div key={index} className="space-y-2 sm:space-y-3">
                <div
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[90%] sm:max-w-[85%] p-3 sm:p-4 rounded-xl ${
                      message.type === 'user'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-900'
                    }`}
                  >
                    <p className="text-sm sm:text-base">{message.content}</p>
                  </div>
                </div>

                {/* Navigation Links */}
                {message.type === 'bot' && message.links && message.links.length > 0 && (
                  <div className="ml-2 flex flex-wrap gap-2">
                    {message.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm sm:text-base hover:bg-emerald-100 transition-colors"
                      >
                        {link.text}
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    ))}
                  </div>
                )}

                {/* Related Questions */}
                {message.type === 'bot' && message.relatedQuestions && message.relatedQuestions.length > 0 && (
                  <div className="ml-2 mt-2 sm:mt-3">
                    <p className="text-sm sm:text-base text-slate-600 mb-2">Related questions:</p>
                    <div className="flex flex-col gap-1.5 sm:gap-2">
                      {message.relatedQuestions.map((question, qIndex) => (
                        <button
                          key={qIndex}
                          onClick={() => handleQuestionClick(question)}
                          className="text-left text-sm sm:text-base text-emerald-600 hover:text-emerald-700 hover:underline"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="sticky bottom-0 p-3 sm:p-5 border-t border-slate-200 bg-white">
            <div className="flex gap-2 sm:gap-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 p-2 sm:p-3 text-sm sm:text-base border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Chat input"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="bg-emerald-600 text-white p-2 sm:p-3 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 