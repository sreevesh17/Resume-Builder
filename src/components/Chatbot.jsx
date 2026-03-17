import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import API from '../api';
import ResumePreview from './ResumePreview';
import './Chatbot.css';
import { Eye } from 'lucide-react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! I am your AI Resume Assistant. Type "help me build my resume" to get started!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeResume, setActiveResume] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const handleInputResize = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // This renders \n as actual line breaks in the chat bubble
  const renderText = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = { sender: 'user', text: inputValue };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height on send
    }
    setIsTyping(true);

    try {
      // Build full conversation history
      const historyForAI = updatedMessages
        .filter((msg, idx) => !(idx === 0 && msg.sender === 'bot'))
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        }));

      const response = await API.post('/resumes/chat', {
        messages: historyForAI
      });

      let aiText = response.data;
      
      // Check if AI generated a complete resume in JSON format
      const resumeMatch = aiText.match(/<resume>([\s\S]*?)<\/resume>/);
      
      if (resumeMatch && resumeMatch[1]) {
        try {
          const resumeJson = JSON.parse(resumeMatch[1]);
          // Save the generated resume to the backend database
          await API.post('/resumes', resumeJson);
          
          setActiveResume(resumeJson);
          aiText = "🎉 I have successfully generated your professional resume! I've also saved it to your dashboard. Click the button below to preview it!";
        } catch (parseError) {
          console.error("Failed to parse resume JSON:", parseError);
          aiText = "I built the resume, but ran into a technical error saving it to the database. Let's try again.";
        }
      } else {
        // Just standard chat response, remove any accidental <resume> fragments if they exist
        aiText = aiText.replace(/<resume>[\s\S]*?$/, '');
      }

      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { 
          sender: 'bot', 
          text: aiText, 
          hasResume: !!(resumeMatch && resumeMatch[1]) 
        }
      ]);
    } catch (error) {
      console.error(error);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: "Error: I couldn't reach the Spring Boot backend. Is it running?" }
      ]);
    }
  };

  const handleClearChat = () => {
    setMessages([
      { sender: 'bot', text: 'Hi there! I am your AI Resume Assistant. Type "help me build my resume" to get started!' }
    ]);
  };

  return (
    <div className="chatbot-wrapper">

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <Bot size={24} />
            <h3>AI Assistant</h3>
            <button
              onClick={handleClearChat}
              style={{
                marginLeft: 'auto',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '0.75rem'
              }}
            >
              Clear
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                {/* Render line breaks properly */}
                {renderText(msg.text)}
                
                {msg.hasResume && (
                  <button 
                    className="preview-btn" 
                    onClick={() => setShowPreview(true)}
                  >
                    <Eye size={16} />
                    Preview Full Resume
                  </button>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <textarea
              ref={textareaRef}
              placeholder="Ask for resume feedback..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                handleInputResize();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              rows={1}
            />
            <button className="send-btn" onClick={handleSend} disabled={!inputValue.trim()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Resume Preview Modal */}
      {showPreview && (
        <div className="resume-modal-overlay">
          <div className="resume-modal-content">
            <button className="modal-close-btn" onClick={() => setShowPreview(false)}>
              <X size={24} />
            </button>
            <div className="modal-header-actions">
               <div className="template-selector">
                 {['modern', 'clean', 'bold'].map(t => (
                   <button 
                     key={t} 
                     className={`template-btn ${selectedTemplate === t ? 'active' : ''}`}
                     onClick={() => setSelectedTemplate(t)}
                   >
                     {t.charAt(0).toUpperCase() + t.slice(1)}
                   </button>
                 ))}
               </div>
               <button className="print-btn" onClick={() => window.print()}>Print / Save as PDF</button>
            </div>
            <ResumePreview data={activeResume} theme={selectedTemplate} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
