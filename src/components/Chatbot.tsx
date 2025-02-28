'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Bot, X, Send, ChevronUp, ExternalLink, ThumbsUp, ThumbsDown, Clipboard, User, Sparkles, Loader2 } from 'lucide-react';
import { faqs } from '@/data/faq';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  links?: {
    text: string;
    url: string;
  }[];
  relatedQuestions?: string[];
  timestamp: Date;
  helpful?: boolean;
}

interface ConversationHistory {
  messages: Message[];
  lastInteraction: Date;
}

// Categories for suggested topics
const topicCategories = [
  {
    name: 'Career Support',
    topics: ['Apprenticeships', 'Career Advice', 'Job Search Tips']
  },
  {
    name: 'Funding',
    topics: ['Skills Bank Funding', 'Adult Education Budget', 'Training Subsidies']
  },
  {
    name: 'Business',
    topics: ['Growth Support', 'Skills Development', 'Recruiting Talent']
  },
  {
    name: 'Education',
    topics: ['Training Courses', 'Qualifications', 'Skills Assessment']
  }
];

// Additional knowledge extensions - this would ideally come from a dedicated API or CMS
const extendedKnowledge = [
  {
    query: ['bootcamp', 'coding bootcamp', 'digital bootcamp', 'tech bootcamp'],
    answer: "Our digital bootcamps provide intensive, practical training in tech skills like coding, data analysis, and digital marketing. They typically run for 12-16 weeks and are designed to prepare you for a career in the digital sector.",
    links: [
      { text: 'Digital Bootcamps', url: '/bootcamps' },
      { text: 'Upcoming Cohorts', url: '/bootcamps#schedule' }
    ],
    relatedQuestions: [
      "Are bootcamps funded?",
      "What bootcamp courses are available?",
      "What are the entry requirements for bootcamps?"
    ]
  },
  {
    query: ['made smarter', 'manufacturing', 'digital manufacturing', 'industry 4.0'],
    answer: "Made Smarter helps manufacturing businesses adopt digital technologies. The programme offers funding, specialist advice, and leadership training to boost productivity, growth, and create high-value jobs.",
    links: [
      { text: 'Made Smarter Programme', url: '/made-smarter' },
      { text: 'Digital Manufacturing', url: '/made-smarter#technologies' }
    ],
    relatedQuestions: [
      "What funding is available through Made Smarter?",
      "How can Made Smarter help my manufacturing business?",
      "What technologies does Made Smarter support?"
    ]
  },
  {
    query: ['traineeships', 'traineeship', 'work experience'],
    answer: "Traineeships are skills development programmes that include a work placement. They're designed for 16-24 year olds (or 25 with an Education, Health and Care Plan) to prepare for apprenticeships or employment.",
    links: [
      { text: 'Find a Traineeship', url: '/traineeships' },
      { text: 'Information for Employers', url: '/traineeships/employers' }
    ],
    relatedQuestions: [
      "How long do traineeships last?",
      "What's the difference between traineeships and apprenticeships?",
      "Do trainees get paid?"
    ]
  },
  {
    query: ['green skills', 'sustainability', 'environmental', 'climate'],
    answer: "We're developing green skills programmes to support South Yorkshire's transition to a low-carbon economy. These include courses in renewable energy, sustainable construction, and environmental management.",
    links: [
      { text: 'Green Skills Academy', url: '/green-skills' },
      { text: 'Sustainability Courses', url: '/courses/sustainability' }
    ],
    relatedQuestions: [
      "What green jobs are in demand?",
      "How can I transition to a green career?",
      "What funding is available for green skills training?"
    ]
  },
  {
    query: ['digital skills', 'it skills', 'computer', 'coding', 'programming'],
    answer: "We offer various digital skills programmes from basic digital literacy to advanced coding and data science. These courses can be accessed through Adult Skills Funding, Digital Bootcamps, or apprenticeship routes.",
    links: [
      { text: 'Digital Skills Courses', url: '/digital-skills' },
      { text: 'Digital Careers', url: '/careers/digital' }
    ],
    relatedQuestions: [
      "What digital skills are in demand?",
      "How can I learn coding?",
      "Are there free digital skills courses?"
    ]
  }
];

// FAQ search enhancements
const enhanceFaqSearch = (searchText: string) => {
  const allFaqs = [...faqs];
  
  // Add extended knowledge to the search pool
  extendedKnowledge.forEach(knowledge => {
    knowledge.query.forEach(q => {
      if (searchText.toLowerCase().includes(q)) {
        allFaqs.push({
          question: q,
          answer: knowledge.answer,
          category: 'extended',
          links: knowledge.links,
          relatedQuestions: knowledge.relatedQuestions
        });
      }
    });
  });
  
  // Process the search terms
  const searchTerms = searchText.toLowerCase().split(' ').filter(term => term.length > 2);
  
  // Score each FAQ based on match quality
  const scoredResults = allFaqs.map(faq => {
    const faqText = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
    
    // Calculate match score
    let score = 0;
    
    // Exact phrase match (highest priority)
    if (faq.question.toLowerCase().includes(searchText.toLowerCase())) {
      score += 100;
    }
    
    // Category match
    if (faq.category.toLowerCase() === searchText.toLowerCase()) {
      score += 50;
    }
    
    // Term matches
    searchTerms.forEach(term => {
      if (faqText.includes(term)) {
        score += 10;
        
        // Bonus for term in question (more relevant)
        if (faq.question.toLowerCase().includes(term)) {
          score += 5;
        }
      }
    });
    
    return { faq, score };
  });
  
  // Filter results with any match and sort by score
  const matches = scoredResults
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);
  
  return matches.length > 0 ? matches[0].faq : null;
};

// Intent analysis for contextual responses
const analyzeIntent = (message: string) => {
  message = message.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return 'greeting';
  }
  
  if (message.includes('thank')) {
    return 'thanks';
  }
  
  if (message.includes('help') && (message.includes('can you') || message.includes('could you') || message.length < 10)) {
    return 'help';
  }
  
  return 'query';
};

export default function Chatbot() {
  // Temporarily hide the chatbot by returning null
  return null;

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
  
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Load conversation or init with welcome message
  useEffect(() => {
    const loadConversation = () => {
      try {
        const savedConversation = localStorage.getItem('chatHistory');
        
        if (savedConversation) {
          const parsed: ConversationHistory = JSON.parse(savedConversation);
          
          // Check if conversation is from the same day
          const lastInteraction = new Date(parsed.lastInteraction);
          const now = new Date();
          const isSameDay = lastInteraction.toDateString() === now.toDateString();
          
          if (isSameDay && parsed.messages && parsed.messages.length > 0) {
            // Convert string timestamps back to Date objects
            const restoredMessages = parsed.messages.map(msg => ({
              ...msg,
              timestamp: new Date(msg.timestamp)
            }));
            
            setMessages(restoredMessages);
            return;
          }
        }
      } catch (e) {
        console.error("Error loading chat history:", e);
      }
      
      // If no history or different day, start a new conversation
      setMessages([
        {
          id: generateId(),
          type: 'bot',
          content: 'Hello! I\'m here to help you navigate the South Yorkshire Opportunities platform. What would you like to know about?',
          links: [
            { text: 'Apprenticeships', url: '/apprenticeships' },
            { text: 'Adult Skills Funding', url: '/adult-skills-funding' },
            { text: 'Business Support', url: '/business' },
          ],
          timestamp: new Date()
        }
      ]);
    };
    
    loadConversation();
  }, []);

  // Save conversation
  useEffect(() => {
    if (messages.length > 0) {
      try {
        const conversationHistory: ConversationHistory = {
          messages,
          lastInteraction: new Date()
        };
        
        localStorage.setItem('chatHistory', JSON.stringify(conversationHistory));
      } catch (e) {
        console.error("Error saving chat history:", e);
      }
    }
  }, [messages]);

  // Auto-suggest based on current page
  useEffect(() => {
    if (pathname && messages.length === 1 && messages[0].type === 'bot') {
      // Get contextual suggestions based on current page
      let pageSuggestions: string[] = [];
      
      if (pathname.includes('apprenticeship')) {
        pageSuggestions = ['How do apprenticeships work?', 'What levels of apprenticeships are available?', 'How to find an apprenticeship?'];
      } else if (pathname.includes('business')) {
        pageSuggestions = ['What business support is available?', 'How to access Skills Bank funding?', 'Help with recruiting apprentices'];
      } else if (pathname.includes('young-people')) {
        pageSuggestions = ['Career options for school leavers', 'Work experience opportunities', 'How to find traineeships'];
      } else if (pathname.includes('adult')) {
        pageSuggestions = ['Funding for adult learners', 'Available courses for adults', 'Digital skills training'];
      }
      
      if (pageSuggestions.length > 0) {
        setMessages(prev => [
          ...prev,
          {
            id: generateId(),
            type: 'bot',
            content: `I see you're looking at ${pathname.split('/').pop()?.replace('-', ' ')}. Would you like to know:`,
            relatedQuestions: pageSuggestions,
            timestamp: new Date()
          }
        ]);
      }
    }
  }, [pathname, messages]);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Auto focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isMinimized]);

  // Handle copy functionality
  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        setCopiedMessage(content);
        setTimeout(() => setCopiedMessage(null), 2000);
      })
      .catch(err => console.error('Failed to copy:', err));
  };

  // Generate unique ID for messages
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
    handleSend(question);
  };

  const getContextualResponse = (intent: string, query: string) => {
    switch (intent) {
      case 'greeting':
        return {
          content: 'Hello! How can I assist you today with South Yorkshire Opportunities? I can help with information about apprenticeships, funding, or career advice.',
          links: [
            { text: 'Explore Careers', url: '/careers' },
            { text: 'Skills Support', url: '/skills' }
          ],
          relatedQuestions: [
            'What funding is available for training?',
            'How do I find an apprenticeship?',
            'What support is available for businesses?'
          ]
        };
        
      case 'thanks':
        return {
          content: "You're welcome! Is there anything else I can help you with today?",
          links: [],
          relatedQuestions: [
            'What skills are in demand in South Yorkshire?',
            'How can I contact an advisor?'
          ]
        };
        
      case 'help':
        return {
          content: "I can help with information about skills, training, funding, and employment opportunities in South Yorkshire. What specifically are you interested in learning more about?",
          links: [],
          relatedQuestions: [
            'Tell me about apprenticeships',
            'What funding is available?',
            'How can I improve my skills?',
            'Support for young people'
          ]
        };
        
      default:
        return null;
    }
  };

  const handleSend = (overrideInput?: string) => {
    const messageText = overrideInput || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: generateId(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Process message with a slight delay for more natural interaction
    setTimeout(() => {
      // Analyze intent (greeting, thanks, query, etc.)
      const intent = analyzeIntent(messageText);
      
      // Get contextual response based on intent
      const contextualResponse = getContextualResponse(intent, messageText);
      
      // If we have a contextual response, use that
      if (contextualResponse) {
        const botResponse: Message = {
          id: generateId(),
          type: 'bot',
          content: contextualResponse.content,
          links: contextualResponse.links,
          relatedQuestions: contextualResponse.relatedQuestions,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
        return;
      }
      
      // Otherwise, search for matching FAQ
      const matchingFaq = enhanceFaqSearch(messageText);

      // Prepare bot response
      const botMessage: Message = {
        id: generateId(),
        type: 'bot',
        content: matchingFaq 
          ? matchingFaq.answer
          : "I'm sorry, I don't have specific information about that. Could you try rephrasing or ask another question? You can ask about apprenticeships, funding, business support, training opportunities, or career paths in South Yorkshire.",
        links: matchingFaq?.links || [],
        relatedQuestions: matchingFaq 
          ? matchingFaq.relatedQuestions || []
          : [
              "What funding is available for training?",
              "Tell me about apprenticeships",
              "Business growth support",
              "Digital skills training"
            ],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleFeedback = (messageId: string, isHelpful: boolean) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, helpful: isHelpful } : msg
      )
    );
    
    // Here you could send feedback to your analytics or backend
    // For example: recordFeedback(messageId, isHelpful, msg.content)
  };

  const renderSuggestedTopics = () => {
    return (
      <div className="px-3 sm:px-5 mb-3">
        <h3 className="text-sm font-medium text-slate-500 mb-2">Suggested topics:</h3>
        <div className="flex flex-wrap gap-2">
          {topicCategories.map((category, index) => (
            <div key={index} className="w-full">
              <p className="text-xs font-semibold text-slate-400 mb-1">{category.name}</p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {category.topics.map((topic, topicIndex) => (
                  <button
                    key={topicIndex}
                    onClick={() => handleQuestionClick(`Tell me about ${topic}`)}
                    className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs hover:bg-slate-200 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed md:bottom-6 md:right-6 bottom-[100px] right-4 z-50 flex flex-col items-end" data-component="chatbot">
      {/* Notification bubble for first-time users */}
      {!isOpen && (
        <div className="animate-fade-in-up mb-3 px-4 py-2 bg-emerald-600 text-white text-sm rounded-full shadow-lg">
          Need help? Ask our assistant!
        </div>
      )}
      
      {/* Chat Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className="bg-emerald-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
      >
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Bot className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatWindowRef}
          className={`fixed sm:absolute transition-all inset-0 sm:inset-auto sm:bottom-20 sm:right-0 w-full sm:w-[450px] ${
            isMinimized ? 'h-[60px]' : 'h-[calc(100dvh-120px)] sm:h-[600px]'
          } bg-white sm:rounded-xl shadow-xl flex flex-col border-t sm:border border-slate-200 z-[60]`}
          role="dialog"
          aria-labelledby="chat-heading"
        >
          {/* Header */}
          <div className="sticky top-0 p-3 sm:p-4 border-b border-slate-200 bg-emerald-50 sm:rounded-t-xl flex items-center gap-3">
            <Bot className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />
            <div className="flex-1">
              <h2 id="chat-heading" className="text-lg font-semibold text-slate-900">Pathways Assistant</h2>
              {!isMinimized && (
                <p className="text-xs text-slate-500">Ask me about training, funding or careers</p>
              )}
            </div>
            
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-emerald-100 rounded-lg transition-colors hidden sm:flex"
              aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
            >
              <ChevronUp className={`w-5 h-5 text-emerald-600 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
            </button>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-emerald-100 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-emerald-600" />
            </button>
          </div>

          {!isMinimized && (
            <>
              {/* Main content area - flex container for messages and topics */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
                  {messages.map((message, index) => (
                    <div key={message.id} className="space-y-2">
                      <div
                        className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {/* Message bubble with user/bot icon */}
                        <div className="flex gap-2 max-w-[90%] sm:max-w-[85%] group">
                          {message.type === 'bot' && (
                            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                              <Sparkles className="w-4 h-4 text-emerald-600" />
                            </div>
                          )}
                          
                          <div>
                            <div className={`p-3 sm:p-4 rounded-xl ${
                              message.type === 'user'
                                ? 'bg-emerald-600 text-white'
                                : 'bg-slate-100 text-slate-900'
                            }`}>
                              <p className="text-sm sm:text-base whitespace-pre-wrap">{message.content}</p>
                            </div>
                            
                            <div className="mt-1 flex justify-between items-center">
                              <span className="text-xs text-slate-400">
                                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              </span>
                              
                              {/* Message actions */}
                              {message.type === 'bot' && (
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  {/* Copy button */}
                                  <button
                                    onClick={() => handleCopy(message.content)}
                                    className="p-1 hover:bg-slate-100 rounded-md"
                                    aria-label="Copy message"
                                    title="Copy to clipboard"
                                  >
                                    <Clipboard className="w-3.5 h-3.5 text-slate-400" />
                                  </button>
                                  
                                  {/* Feedback buttons */}
                                  {message.helpful === undefined && (
                                    <>
                                      <button
                                        onClick={() => handleFeedback(message.id, true)}
                                        className="p-1 hover:bg-slate-100 rounded-md"
                                        aria-label="Mark as helpful"
                                        title="Helpful"
                                      >
                                        <ThumbsUp className="w-3.5 h-3.5 text-slate-400" />
                                      </button>
                                      
                                      <button
                                        onClick={() => handleFeedback(message.id, false)}
                                        className="p-1 hover:bg-slate-100 rounded-md"
                                        aria-label="Mark as not helpful"
                                        title="Not helpful"
                                      >
                                        <ThumbsDown className="w-3.5 h-3.5 text-slate-400" />
                                      </button>
                                    </>
                                  )}
                                  
                                  {/* Feedback confirmation */}
                                  {message.helpful !== undefined && (
                                    <span className="text-xs text-slate-400">
                                      {message.helpful ? '✓ Marked as helpful' : '✓ Feedback sent'}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {message.type === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
                              <User className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Copy confirmation tooltip */}
                      {copiedMessage === message.content && (
                        <div className="absolute bg-slate-800 text-white text-xs p-2 rounded shadow-lg">
                          Copied to clipboard
                        </div>
                      )}

                      {/* Navigation Links */}
                      {message.type === 'bot' && message.links && message.links.length > 0 && (
                        <div className="ml-10 flex flex-wrap gap-2">
                          {message.links.map((link, linkIndex) => (
                            <Link
                              key={linkIndex}
                              href={link.url}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm hover:bg-emerald-100 transition-colors"
                            >
                              {link.text}
                              <ExternalLink className="w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Related Questions */}
                      {message.type === 'bot' && message.relatedQuestions && message.relatedQuestions.length > 0 && (
                        <div className="ml-10 mt-2">
                          <p className="text-sm text-slate-600 mb-1.5">Related questions:</p>
                          <div className="flex flex-col gap-1.5">
                            {message.relatedQuestions.map((question, qIndex) => (
                              <button
                                key={qIndex}
                                onClick={() => handleQuestionClick(question)}
                                className="text-left text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
                              >
                                {question}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* Loading indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                          <Sparkles className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="p-4 rounded-xl bg-slate-100 text-slate-400 flex items-center gap-1.5">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm">Thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested topics (now in separate scrollable container when needed) */}
                {messages.length < 3 && (
                  <div className="bg-white border-t border-slate-100 pt-3">
                    {renderSuggestedTopics()}
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="sticky bottom-0 p-3 sm:p-5 border-t border-slate-200 bg-white sm:rounded-b-xl">
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
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-emerald-600 text-white p-2 sm:p-3 rounded-xl hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-2 text-center">
                  This is an AI assistant to help navigate the site. For personal advice, please <Link href="/contact" className="text-emerald-600 hover:underline">contact an advisor</Link>.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
} 