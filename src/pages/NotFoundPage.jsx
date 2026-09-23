import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{ padding: '100px 0', background: 'var(--bg-page)', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '72px', color: 'var(--primary)', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
          404
        </h1>
        <h2 style={{ fontSize: '24px', color: 'var(--primary)', marginBottom: '12px' }}>
          Property or Page Not Found
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '440px', margin: '0 auto 24px auto' }}>
          The link you followed may have expired or the listing may have been sold out.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          <Home size={18} />
          <span>Return to INDSTATE Home</span>
        </Link>
      </div>
    </div>
  );
}
