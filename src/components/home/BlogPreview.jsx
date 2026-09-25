import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blogPosts';
import ScrollReveal from '../common/ScrollReveal';

export default function BlogPreview() {
  const [hoveredId, setHoveredId] = useState(null);
  const posts = BLOG_POSTS.slice(0, 3);
  const crevixEase = [0.16, 1, 0.3, 1];

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-page)' }}>
      <div className="container">
        <ScrollReveal y={24} duration={0.65}>
          <div className="section-header">
            <span className="section-tag">
              <BookOpen size={13} />
              Market Intelligence
            </span>
            <h2 className="section-title">Updates From Our Real Estate Blog</h2>
            <p className="section-subtitle">
              Stay ahead with authoritative analysis on RERA legal rights, RBI monetary policy, and high-growth Indian property corridors.
            </p>
          </div>
        </ScrollReveal>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {posts.map((post, idx) => {
            const isHovered = hoveredId === post.id;
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: crevixEase, delay: idx * 0.08 }}
              >
                <article 
                  onMouseEnter={() => setHoveredId(post.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: isHovered ? '1px solid var(--saffron)' : '1px solid var(--border-color)',
                    boxShadow: isHovered ? '0 14px 32px rgba(15, 23, 42, 0.1)' : 'var(--shadow-xs)',
                    transition: 'box-shadow 180ms ease, border-color 180ms ease',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <Link to={`/blog/${post.slug}`} style={{ display: 'block', height: '220px', overflow: 'hidden' }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' 
                      }}
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
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={13} />
                        {post.date}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '10px', lineHeight: 1.4 }}>
                      <Link to={`/blog/${post.slug}`} style={{ color: isHovered ? 'var(--saffron)' : 'inherit', transition: 'color 0.2s ease' }}>
                        {post.title}
                      </Link>
                    </h3>

                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flexGrow: 1 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid var(--border-light)' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-main)' }}>
                        By {post.author}
                      </span>
                      <Link 
                        to={`/blog/${post.slug}`} 
                        style={{ 
                          fontSize: '13px', 
                          fontWeight: 700, 
                          color: 'var(--saffron)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '4px',
                          transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        Read Guide <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>

        <ScrollReveal y={18} duration={0.6} delay={0.2}>
          <div style={{ textAlign: 'center' }}>
            <Link to="/blog" className="btn btn-outline btn-lg" style={{ maxWidth: '100%', whiteSpace: 'normal', textAlign: 'center' }}>
              <span>Explore All Indian Real Estate Guides</span>
              <ArrowRight size={18} style={{ flexShrink: 0 }} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
