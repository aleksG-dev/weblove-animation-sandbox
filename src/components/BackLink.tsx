import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BackLink() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 font-mono text-sm text-white/50 transition-colors hover:text-accent"
    >
      <ArrowLeft size={16} />
      back to levels
    </Link>
  );
}
