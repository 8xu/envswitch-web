'use client';

import { useEffect, useState } from 'react';

const terminalLines = [
  { text: 'envswitch --list', delay: 0 },
  { text: 'Available environments:', delay: 500, indent: true },
  { text: '▸ staging', delay: 800, indent: true },
  { text: '▸ production', delay: 1000, indent: true },
  { text: '▸ development', delay: 1200, indent: true },
  { text: 'envswitch production', delay: 1800 },
  { text: 'Switched to production environment', delay: 2400 },
];

export default function TerminalDemo() {
  const [lines, setLines] = useState<{ text: string; indent?: boolean; show: boolean }[]>([]);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, { text: line.text, indent: line.indent, show: true }]);
      }, line.delay);
    });
  }, []);

  return (
    <div className="terminal-window glow mb-16 opacity-0 animate-fade-in-up animate-delay-300 max-w-2xl">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red" />
        <span className="terminal-dot terminal-dot-yellow" />
        <span className="terminal-dot terminal-dot-green" />
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <div 
            key={i} 
            className={`mb-1 ${line.indent ? 'ml-4' : ''} ${i === lines.length - 1 && line.text.includes('Switched') ? '' : ''}`}
            style={{ 
              opacity: line.show ? 1 : 0,
              transition: 'opacity 0.1s ease-in-out'
            }}
          >
            {i < 3 || i === lines.length - 1 ? (
              <span style={{ color: line.text.startsWith('envswitch') ? 'var(--accent)' : 'var(--text-secondary)' }}>
                {line.text}
                {i === lines.length - 1 && line.text.includes('Switched') && (
                  <span className="animate-blink">_</span>
                )}
              </span>
            ) : (
              <span style={{ color: 'var(--text-secondary)' }}>{line.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
