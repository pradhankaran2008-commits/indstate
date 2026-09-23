import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight, Search, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Legal & RERA', 'Market Trends', 'Home Loans & Finance'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ padding: '40px 0 80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <BookOpen size={13} />
            Knowledge & News
          </span>
          <h1 className="section-title">Indian Real Estate News & Market Guides</h1>
          <p className="section-subtitle">
            Authoritative perspectives on RERA compliance, city infrastructure corridors, and Indian home loan trends.
          </p>
        </div>

        {/* Category & Search Filter */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            padding: '16px 20px',
            marginBottom: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: 600,
                  border: activeCategory === cat ? '1.5px solid var(--saffron)' : '1px solid var(--border-color)',
                  background: activeCategory === cat ? 'var(--saffron)' : 'var(--bg-page)',
                  color: activeCategory === cat ? '#FFFFFF' : 'var(--text-main)',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '220px' }}>
            <Search size={16} color="var(--text-muted)" />
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ border: 'none', outline: 'none', fontSize: '13px', width: '100%' }}
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '30px'
          }}
        >
          {filteredPosts.map(post => (
            <article 
              key={post.id}
              style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-xs)',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
              }}
            >
              <Link to={`/blog/${post.slug}`} style={{ height: '220px', overflow: 'hidden', display: 'block' }}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Link>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span 
                    style={{
                      background: 'var(--saffron-light)',
                      color: 'var(--saffron)',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)'
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px', lineHeight: 1.4 }}>
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                  {post.excerpt}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600 }}>By {post.author}</span>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    style={{ fontSize: '13px', fontWeight: 700, color: 'var(--saffron)', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
