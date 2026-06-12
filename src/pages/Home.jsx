import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Palette, TrendingUp, Sprout } from 'lucide-react';
import mitaliPortrait from '../assets/mitali2.jpg';
import dashboard1 from '../assets/dashboard1.jpg';
import dashboard2 from '../assets/dashboard2.jpg';


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
          padding: '8rem 0 4rem 0',
          textAlign: 'center',
          backgroundColor: 'var(--bg-primary)',
          position: 'relative'
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Greeting Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              fontWeight: 500,
              maxWidth: '920px',
              textAlign: 'center',
              marginBottom: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            <span>Hey, I'm</span>
            <span className="text-orange" style={{ fontWeight: 600 }}>Mitali Waingankar</span>
          </motion.div>

          {/* Centered Circular Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            style={{
              width: 'clamp(110px, 15vw, 140px)',
              height: 'clamp(110px, 15vw, 140px)',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--border-color)',
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--card-shadow)',
              marginBottom: '2rem',
              cursor: 'default',
              flexShrink: 0
            }}
          >
            <img 
              src={mitaliPortrait} 
              alt="Mitali Waingankar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>

          {/* Main Hero Subtitle Statements */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.35,
              fontWeight: 500,
              maxWidth: '920px',
              textAlign: 'center',
              marginBottom: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.8rem'
            }}
          >
            <span className="text-orange" style={{ fontWeight: 600 }}>
              Aspiring Data Analyst & Creative Problem Solver
            </span>
            <span>
              I create data-led <span className="text-orange" style={{ fontWeight: 600 }}>interface & visual products</span>
            </span>
          </motion.div>

          {/* 4 Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="hero-cards-grid"
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="hero-feature-card feature-card-1"
            >
              <Lightbulb size={28} style={{ color: 'var(--accent-orange)', flexShrink: 0 }} />
              <div>
                Exploring ideas through data & design
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="hero-feature-card feature-card-2"
            >
              <Palette size={28} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
              <div>
                Designing interfaces & visual stories
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="hero-feature-card feature-card-3"
            >
              <TrendingUp size={28} style={{ color: '#8b5cf6', flexShrink: 0 }} />
              <div>
                Turning complex data into clear insights
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              className="hero-feature-card feature-card-4"
            >
              <Sprout size={28} style={{ color: '#0284c7', flexShrink: 0 }} />
              <div>
                Curious learner, growth-focused creator
              </div>
            </motion.div>
          </motion.div>

          {/* Connect CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{ marginBottom: '2.5rem' }}
          >
            <button 
              className="btn-orange" 
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
