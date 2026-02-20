'use client';

import { useEffect, useState } from 'react';
import LoadingSkeleton from './LoadingSkeleton';

export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/8xu/envswitch')
      .then(res => res.json())
      .then(data => setStars(data.stargazers_count || 0))
      .catch(() => setStars(0));
  }, []);

  if (stars === null) {
    return <LoadingSkeleton width="70px" height="28px" />;
  }

  return (
    <a
      href="https://github.com/8xu/envswitch"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium transition-all hover:opacity-80"
      style={{
        background: 'var(--bg-tertiary)',
        border: '1px solid var(--border)'
      }}
    >
      <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
      </svg>
      <span>{stars.toLocaleString()}</span>
    </a>
  );
}
