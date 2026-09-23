import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, BookOpen, Share2, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        <Link 
          to="/blog" 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--saffron)', fontSize: '13px', fontWeight: 600, marginBottom: '20px' }}
        >
          <ArrowLeft size={15} /> Back to All Articles
        </Link>

        <article 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xs)'
          }}
        >
          <img 
            src={post.image} 
            alt={post.title} 
            style={{ width: '100%', height: '380px', objectFit: 'cover' }}
          />

          <div style={{ padding: '40px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <span 
                style={{
                  background: 'var(--saffron-light)',
                  color: 'var(--saffron)',
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                {post.category}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} /> {post.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <User size={14} /> By {post.author}
              </span>
              <span>• {post.readTime}</span>
            </div>

            <h1 style={{ fontSize: '32px', color: 'var(--primary)', marginBottom: '20px', lineHeight: 1.3 }}>
              {post.title}
            </h1>

            {/* Article Content */}
            <div 
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: 'var(--text-body)',
                whiteSpace: 'pre-line'
              }}
            >
              {post.content}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
              {post.tags.map(t => (
                <span 
                  key={t}
                  style={{
                    background: 'var(--bg-alt)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '12px',
                    color: 'var(--text-muted)'
                  }}
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
