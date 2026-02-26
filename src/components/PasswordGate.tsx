import { useState } from 'react';
import './PasswordGate.css';

const PASS_HASH = 'Hiringgoals';
const STORAGE_KEY = 'talent-hub-auth';

function isAuthed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(isAuthed);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASS_HASH) {
      localStorage.setItem(STORAGE_KEY, 'true');
      setAuthed(true);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (authed) return <>{children}</>;

  return (
    <div className="pw-gate">
      <div className="pw-card">
        <div className="pw-icon">T</div>
        <h1 className="pw-title">Talent Hub</h1>
        <p className="pw-subtitle">Geotab Talent Acquisition</p>
        <form onSubmit={handleSubmit} className="pw-form">
          <input
            type="password"
            className={`pw-input${error ? ' pw-error' : ''}`}
            placeholder="Enter password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false); }}
            autoFocus
          />
          <button type="submit" className="pw-submit">Enter</button>
        </form>
        {error && <p className="pw-error-msg">Incorrect password</p>}
      </div>
    </div>
  );
}
