import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Users, Eye } from 'lucide-react';
import dashboard1 from '../assets/dashboard1.jpg';
import dashboard2 from '../assets/dashboard2.jpg';
import dashboard3 from '../assets/dashboard3.jpg';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectsData = [
    {
      id: 'banking-fraud-detection',
      title: 'Banking Fraud Detection & Risk Monitoring Dashboard',
      category: 'Data Visualization',
      client: 'Retail Banking Division',
      period: '2024',
      image: dashboard1,
      summary: 'A Power BI dashboard analyzing credit card transaction data to identify suspicious activities and monitor emerging risk patterns in real time.',
      tags: ['Power BI', 'Fraud Detection', 'Risk Analytics', 'Dashboard'],
      challenge: 'Financial institutions process thousands of transactions every day, making it difficult to manually identify fraudulent activities and emerging risk patterns. Delayed fraud detection can result in significant financial losses and reduced customer trust.',
      solution: 'Developed this Power BI dashboard to analyze credit card transaction data and identify suspicious activities through real-time fraud monitoring. It highlights fraud rates, fraud amounts, transaction distribution, and time-based fraud patterns, enabling faster risk assessment and decision-making.',
      process: 'Created dynamic query tables and integrated transaction databases. Analyzed fraud rates and amounts across different spending categories and transaction sizes. Designed temporal visualization matrices to detect peak fraud hours and custom category buckets for transaction sizes.',
      outcome: 'Discovered that while fraudulent transactions represent a small percentage of total volume, low-value transactions account for the highest frequency of fraud, whereas medium-value transactions contribute the largest financial losses. Enabled strategic time-based and value-based risk mitigation.'
    },
    {
      id: 'credit-card-portfolio',
      title: 'Credit Card Portfolio & Spending Analytics Dashboard',
      category: 'Dashboard Design',
      client: 'Credit Card Portfolio Management',
      period: '2024',
      image: dashboard2,
      summary: 'A comprehensive Power BI dashboard analyzing customer spending patterns, transaction volumes, and demographics to optimize portfolio performance and mitigate risk.',
      tags: ['Power BI', 'Portfolio Analytics', 'Customer Demographics', 'Spending Trends'],
      challenge: 'Banks and credit card providers often struggle to gain a consolidated view of customer spending behavior across demographics, locations, and merchant categories. Without these insights, it becomes difficult to optimize customer engagement, product offerings, and risk management strategies.',
      solution: 'This dashboard provides a comprehensive analysis of customer spending patterns, transaction volumes, merchant category performance, and demographic trends. It helps uncover valuable insights into consumer behavior while also highlighting areas with elevated fraud risk.',
      process: 'Analyzed a portfolio dataset consisting of over 1 million transactions. Modeled multi-dimensional consumer segments based on gender, age group, state, and monthly spending cycles. Integrated spending volume data with fraud occurrence metrics to map out high-risk merchant categories.',
      outcome: 'Discovered that female customers contribute a slightly higher share of overall spending, and that grocery and shopping categories generate the highest transaction value. Identified merchant categories showing elevated fraud risk, and mapped monthly spending fluctuations.'
    },
    {
      id: 'loan-default-risk',
      title: 'Loan Default Risk & Credit Portfolio Dashboard',
      category: 'Data Visualization',
      client: 'Risk & Lending Committee',
      period: '2023',
      image: dashboard3,
      summary: 'An advanced analytics dashboard evaluating borrower demographics and financial characteristics to identify credit default risks before loan approval.',
      tags: ['Power BI', 'Credit Portfolio', 'Risk Assessment', 'Default Prediction'],
      challenge: 'Lending institutions face challenges in identifying high-risk borrowers before loan approval. Relying solely on income levels may not provide an accurate assessment of default risk, potentially leading to increased loan losses and poor portfolio performance.',
      solution: 'This dashboard analyzes borrower demographics, financial characteristics, and risk indicators to evaluate credit risk across the loan portfolio. It supports data-driven lending decisions by highlighting borrower segments with higher default probability.',
      process: 'Calculated default risk correlations against borrower indicators like housing status, marital status, income, and geographical location. Designed credit scoring thresholds and interactive filter widgets to segment risk levels.',
      outcome: 'Revealed that approximately 12% of applicants were high-risk, and that housing status and state location were strong predictors of risk. Proven that income alone was not a sufficient predictor of default risk, highlighting the value of multi-factor credit assessment.'
    }
  ];

  // Filtering logic
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const categories = ['All', 'Data Visualization', 'Dashboard Design'];

  return (
    <div style={{ padding: '8rem 0 6rem 0', backgroundColor: 'var(--bg-primary)', minHeight: '90vh' }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
            PORTFOLIO
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Selected <span className="text-orange">Projects</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.5 }}>
            A curation of research-backed interfaces, data visualization stories, and playful vector products.
          </p>
        </div>

        {/* Filter Tabs */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.75rem', 
            flexWrap: 'wrap', 
            marginBottom: '3rem' 
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                fontSize: '0.85rem',
                fontWeight: 500,
                border: '1px solid',
                borderColor: filter === cat ? 'var(--accent-orange)' : 'var(--border-color)',
                backgroundColor: filter === cat ? 'var(--accent-orange)' : 'var(--card-bg)',
                color: filter === cat ? '#ffffff' : 'var(--text-secondary)',
                boxShadow: 'var(--card-shadow)',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Column Stack */}
        <motion.div 
          layout
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: 'var(--card-shadow)',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: windowWidth < 768 ? 'column' : 'row',
                  width: '100%'
                }}
              >
                {/* Thumbnail */}
                <div 
                  style={{ 
                    width: windowWidth < 768 ? '100%' : '42%',
                    height: windowWidth < 768 ? '220px' : '280px',
                    overflow: 'hidden', 
                    borderBottom: windowWidth < 768 ? '1px solid var(--border-color)' : 'none', 
                    borderRight: windowWidth < 768 ? 'none' : '1px solid var(--border-color)',
                    position: 'relative',
                    flexShrink: 0
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      backgroundColor: 'rgba(28, 27, 26, 0.4)',
                      opacity: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      gap: '0.4rem',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      transition: 'opacity 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <Eye size={18} />
                    <span>View Case Study</span>
                  </div>
                </div>

                {/* Details */}
                <div 
                  style={{ 
                    padding: windowWidth < 768 ? '1.5rem' : '2.25rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    flexGrow: 1 
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: windowWidth < 768 ? '1.25rem' : '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {project.summary}
                  </p>
                  
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.725rem',
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-secondary)',
                          padding: '0.2rem 0.5rem',
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
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(28, 27, 26, 0.65)',
                backdropFilter: 'blur(8px)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 1.25rem'
              }}
              onClick={() => setSelectedProject(null)}
            >
              {/* Modal Body */}
              <motion.div
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                onClick={(e) => e.stopPropagation()} // stop close on body click
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '24px',
                  width: '100%',
                  maxWidth: '840px',
                  maxHeight: '85vh',
                  overflowY: 'auto',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  border: '1px solid var(--border-color)',
                  position: 'relative',
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: 'var(--card-shadow)',
                    zIndex: 10,
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-orange)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                  <X size={18} />
                </button>

                {/* Hero Image inside Modal */}
                <div style={{ width: '100%', height: '340px', position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, rgba(28, 27, 26, 0.4), transparent)' }} />
                </div>

                {/* Content Details */}
                <div style={{ padding: '2.5rem' }}>
                  {/* Category & Title */}
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-orange)', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
                    {selectedProject.category}
                  </span>
                  <h2 style={{ fontSize: '2.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600, lineHeight: 1.2 }}>
                    {selectedProject.title}
                  </h2>

                  {/* Metadata Row */}
                  <div 
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid var(--border-color)',
                      marginBottom: '2rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Users size={16} style={{ color: 'var(--text-tertiary)' }} />
                      <span><strong>Client:</strong> {selectedProject.client}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={16} style={{ color: 'var(--text-tertiary)' }} />
                      <span><strong>Timeline:</strong> {selectedProject.period}</span>
                    </div>
                  </div>

                  {/* Case Study Sections */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.6 }}>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                        The Challenge
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                        The Solution
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                        My Process & Methodology
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        {selectedProject.process}
                      </p>
                    </div>

                    <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                      <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ color: 'var(--accent-orange)' }}>★</span> Key Outcome
                      </h4>
                      <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 500 }}>
                        {selectedProject.outcome}
                      </p>
                    </div>
                  </div>
                  
                  {/* Action row */}
                  <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem' }}>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="btn-primary" 
                      style={{ padding: '0.75rem 2rem', fontSize: '0.9rem' }}
                    >
                      Close Case Study
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
