'use client';

import { useState, useEffect } from 'react';

export default function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && document.activeElement?.closest('.install-command')) {
        e.preventDefault();
        copy();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [command]);

  return (
    <div className="relative group install-command">
      <code 
        className="block p-4 pr-12 rounded-lg text-sm" 
        style={{ 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border)',
          fontFamily: 'JetBrains Mono, monospace'
        }}
      >
        <span style={{ color: 'var(--accent)' }}>$</span> {command}
      </code>
      <button
        onClick={copy}
        className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded text-xs font-medium transition-all cursor-pointer"
        style={{ 
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border)',
          color: copied ? 'var(--accent)' : 'var(--text-secondary)'
        }}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
