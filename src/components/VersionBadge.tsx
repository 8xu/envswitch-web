'use client';

import { useEffect, useState } from 'react';
import LoadingSkeleton from './LoadingSkeleton';

export default function VersionBadge() {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/8xu/envswitch/releases/latest')
      .then(res => res.json())
      .then(data => setVersion(data.tag_name || 'v1.0.0'))
      .catch(() => setVersion('v1.0.0'));
  }, []);

  if (version === null) {
    return <LoadingSkeleton width="60px" height="20px" />;
  }

  return (
    <span 
      className="text-sm"
      style={{ color: 'var(--accent)' }}
    >
      ● CLI {version}
    </span>
  );
}
