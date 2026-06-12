import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import mitaliPortrait from '../assets/mitali.jpg';
import dashboard1 from '../assets/dashboard1.jpg';
import dashboard2 from '../assets/dashboard2.jpg';

// GIZ India Spinner component mapping the screenshot visual
function GizSpinner() {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }}>
      <svg className="spin-slow" width="22" height="22" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 2px rgba(46, 189, 89, 0.2))' }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="12"
            y1="3"
            x2="12"
            y2="7"
            stroke="var(--accent-green)"
            strokeWidth="2.5"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 12 12)`}
            style={{ opacity: 0.3 + (i % 4) * 0.25 }} // creates a stepping-gradient look
          />
        ))}
      </svg>
    </div>
  );
}

export default function Home({ setActivePage }) {
  // Mock data for featured projects
  const featuredProjects = [
    {
      id: 'banking-fraud-detection',
      title: 'Banking Fraud Detection & Risk Monitoring Dashboard',
      category: 'Data Visualization',
      client: 'Retail Banking Division',
      image: dashboard1,
      tags: ['Power BI', 'Fraud Detection', 'Risk Analytics', 'Dashboard']
    },
    {
      id: 'credit-card-portfolio',
      title: 'Credit Card Portfolio & Spending Analytics Dashboard',
      category: 'Dashboard Design',
      client: 'Credit Card Portfolio Management',
      image: dashboard2,
      tags: ['Power BI', 'Portfolio Analytics', 'Customer Demographics']
    }
  ];

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Update width on resize for layout computations
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section 
        style={{
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 2rem 4rem 2rem',
          textAlign: 'center',
          backgroundColor: 'var(--bg-primary)',
          position: 'relative'
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Main Hero Header Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              fontWeight: 500,
              maxWidth: '920px',
              marginBottom: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            {/* Row 1: Hey, I'm Mitali Waingankar [Avatar] */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
              <span>Hey, I'm</span>
              <span className="text-orange">Mitali Waingankar</span>
              
              {/* Avatar nestled in text */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  border: '2px solid var(--border-color)',
                  backgroundColor: '#f3f0ec',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src={mitaliPortrait} 
                  alt="Mitali" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </motion.div>
            </div>

            {/* Row 2: Aspiring Data Analyst & Creative Problem Solver */}
            <span className="text-orange">Aspiring Data Analyst & Creative Problem Solver</span>

            {/* Row 3: I create data-led interface & visual products */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span>I create data-led</span>
              <span className="text-orange">interface & visual products</span>
            </div>
          </motion.div>

          {/* GIZ Indicator Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--border-color)',
              padding: '0.75rem 1.5rem',
              borderRadius: '100px',
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              boxShadow: 'var(--card-shadow)',
              marginBottom: '3rem',
              maxWidth: '560px'
            }}
          >
            <span>Currently designing visual solutions for</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              <GizSpinner />
              <span style={{ fontSize: '0.9rem' }}>Indo-German Biodiversity Programme, @GIZ India.</span>
            </div>
          </motion.div>

          {/* Connect CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{ marginBottom: '2.5rem' }}
          >
            <button 
              className="btn-primary" 
              onClick={() => setActivePage('contact')}
              style={{ padding: '1rem 2.5rem', fontSize: '1rem', gap: '0.5rem' }}
            >
              <span>Let's connect</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Subtext note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              maxWidth: '400px',
              lineHeight: 1.5,
            }}
          >
            I am an illustrator who loves making everyday things a little playful :)
          </motion.p>
        </div>
      </section>

      {/* Selected Projects Showcase */}
      <section 
        style={{
          padding: '6rem 0 8rem 0',
          backgroundColor: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
        }}
      >
        <div className="container">
          
          {/* Section Header */}
          <div style={{ marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
                SELECTED WORK
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}>
                Data stories & <span className="text-orange">visual interfaces</span>
              </h2>
            </div>
            <button 
              onClick={() => setActivePage('projects')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--accent-orange)',
                borderBottom: '1px solid transparent',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottom = '1px solid var(--accent-orange)'}
              onMouseLeave={(e) => e.currentTarget.style.borderBottom = '1px solid transparent'}
            >
              <span>View all projects</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Project Column Stack */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
            }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setActivePage('projects')}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--card-shadow)',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: windowWidth < 768 ? 'column' : 'row',
                  width: '100%',
                }}
              >
                {/* Project Image Container */}
                <div 
                  style={{
                    width: windowWidth < 768 ? '100%' : '42%',
                    height: windowWidth < 768 ? '220px' : '280px',
                    overflow: 'hidden',
                    position: 'relative',
                    borderBottom: windowWidth < 768 ? '1px solid var(--border-color)' : 'none',
                    borderRight: windowWidth < 768 ? 'none' : '1px solid var(--border-color)',
                    flexShrink: 0
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                {/* Project Details */}
                <div 
                  style={{ 
                    padding: windowWidth < 768 ? '1.5rem' : '2.25rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    flexGrow: 1 
                  }}
                >
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: windowWidth < 768 ? '1.25rem' : '1.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    Client: {project.client}
                  </p>
                  
                  {/* Project Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        style={{
                          fontSize: '0.75rem',
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '100px',
                          border: '1px solid rgba(0,0,0,0.02)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
