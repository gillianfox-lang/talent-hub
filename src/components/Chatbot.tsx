import { useState, useRef, useEffect, useCallback } from 'react';
import { searchChatbot, FALLBACK_MESSAGE, SUGGESTION_CHIPS } from '../utils/chatbotIndex';
import type { SearchResult } from '../utils/chatbotIndex';
import './Chatbot.css';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Message {
  id: number;
  role: 'user' | 'bot';
  text: string;
  results?: SearchResult[];
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function AnswerCard({ result }: { result: SearchResult }) {
  const { entry } = result;
  return (
    <div className="chatbot-answer-card">
      <div className="chatbot-answer-header">
        <span className="chatbot-answer-icon">{entry.sourceIcon}</span>
        <span className="chatbot-answer-topic">{entry.topic}</span>
        <span className="chatbot-answer-source">{entry.source}</span>
      </div>
      <p className="chatbot-answer-text">{entry.answer}</p>
      {entry.bullets && entry.bullets.length > 0 && (
        <ul className="chatbot-answer-bullets">
          {entry.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {entry.url && (
        <a className="chatbot-answer-link" href={entry.url} target="_blank" rel="noopener noreferrer">
          View resource &rarr;
        </a>
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="chatbot-typing">
      <span className="chatbot-typing-dot" />
      <span className="chatbot-typing-dot" />
      <span className="chatbot-typing-dot" />
    </div>
  );
}

function FallbackText() {
  // Render the fallback markdown-like text as simple HTML
  const lines = FALLBACK_MESSAGE.split('\n');
  return (
    <div className="chatbot-fallback">
      {lines.map((line, i) => {
        if (line.startsWith('- **')) {
          const match = line.match(/^- \*\*(.+?)\*\*(.*)$/);
          if (match) {
            return (
              <div key={i} style={{ paddingLeft: 8, marginBottom: 2 }}>
                &bull; <strong>{match[1]}</strong>{match[2]}
              </div>
            );
          }
        }
        if (line.trim() === '') return <br key={i} />;
        // Handle inline bold (**...**) and Cmd+K
        const html = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        return <div key={i} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // Auto-focus input on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const submitQuery = useCallback((query: string) => {
    if (!query.trim()) return;

    const userMsg: Message = { id: nextId.current++, role: 'user', text: query.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    // Simulate brief delay for natural feel
    const delay = 400 + Math.random() * 300;
    setTimeout(() => {
      const results = searchChatbot(query);
      const botMsg: Message = {
        id: nextId.current++,
        role: 'bot',
        text: results.length > 0 ? '' : 'fallback',
        results: results.length > 0 ? results : undefined,
      };
      setMessages(prev => [...prev, botMsg]);
      setTyping(false);
    }, delay);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitQuery(input);
  };

  const handleChipClick = (chip: string) => {
    submitQuery(chip);
  };

  const showWelcome = messages.length === 0;

  return (
    <>
      {/* FAB */}
      <button
        className="chatbot-fab"
        onClick={() => setOpen(prev => !prev)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        type="button"
      >
        {open ? '\u2715' : '\u{1F4AC}'}
      </button>

      {/* Panel */}
      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <span className="chatbot-header-title">Talent Hub Assistant</span>
            <button className="chatbot-close-btn" onClick={() => setOpen(false)} aria-label="Close chat" type="button">
              &times;
            </button>
          </div>

          <div className="chatbot-messages">
            {showWelcome && (
              <div className="chatbot-welcome">
                <p className="chatbot-welcome-text">
                  Hi! I can help you find information across Talent Hub. Try asking a question or pick a suggestion below.
                </p>
                <div className="chatbot-chips">
                  {SUGGESTION_CHIPS.map(chip => (
                    <button key={chip} className="chatbot-chip" onClick={() => handleChipClick(chip)} type="button">
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map(msg => {
              if (msg.role === 'user') {
                return (
                  <div key={msg.id} className="chatbot-user-row">
                    <div className="chatbot-user-bubble">{msg.text}</div>
                  </div>
                );
              }
              // Bot message
              return (
                <div key={msg.id} className="chatbot-bot-row">
                  {msg.results ? (
                    msg.results.map((r, i) => <AnswerCard key={i} result={r} />)
                  ) : (
                    <FallbackText />
                  )}
                </div>
              );
            })}

            {typing && (
              <div className="chatbot-bot-row">
                <TypingIndicator />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-area" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="chatbot-input"
              type="text"
              placeholder="Ask about benefits, contracts, roles..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button className="chatbot-send-btn" type="submit" disabled={!input.trim() || typing}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
