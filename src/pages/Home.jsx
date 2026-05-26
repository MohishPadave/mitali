import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import komalPortrait from '../assets/komal_headshot.png';
import projBiodiversity from '../assets/project_biodiversity.png';
import projDataViz from '../assets/project_data_viz.png';
import anushaPortrait from '../assets/anusha_portrait.png';
import rashmiPortrait from '../assets/rashmi_portrait.png';
import sidharthPortrait from '../assets/sidharth_portrait.png';

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
      id: 'biodiversity',
      title: 'Biodiversity Monitoring Platform',
      category: 'Interface & Data Design',
      client: 'Indo-German Biodiversity Programme (GIZ)',
      image: projBiodiversity,
      tags: ['UX/UI', 'Data Viz', 'GIS Mapping', 'Dashboard']
    },
    {
      id: 'dataviz',
      title: 'Platform Analytics & Engagement',
      category: 'Data Visualization',
      client: 'Internal Product',
      image: projDataViz,
      tags: ['Dashboard', 'React', 'Figma', 'Interaction Design']
    }
  ];

  const testimonials = [
    {
      id: 'anusha',
      name: 'Anusha Tripathi',
      role: 'Product Designer-I @ Meesho',
      text: 'Mitali is an incredible problem-solver with a strong human-centered approach. She dives deep into understanding real user problems and consistently brings valuable insights to the table. She is thoughtful and empathetic, and balances aesthetics with strong functionality and attention to detail.\n\nShe is also a reliable and generous collaborator, always adding depth and clarity to team projects. During our time at NID, I had the privilege of closely witnessing her growth as a designer, and I truly believe she would be a valuable addition to any design team, both as a sharp thinker and a reliable teammate.',
      subtext: 'Anusha and Mitali studied together @NID Bengaluru, 2023-2026',
      image: anushaPortrait,
    },
    {
      id: 'rashmi',
      name: 'Rashmi Bhardwaj',
      role: 'Designer @ SAP',
      text: 'I worked with Mitali as a peer designer, and I was consistently impressed by the depth of her critical thinking and the fidelity of her design work. She has a strong ability to translate research insights into clear, intuitive UX flows. Her visual prototyping skills stand out in particular, bringing clarity to complex interfaces.\n\nBeyond her technical strengths, she is an incredibly empathetic and reliable collaborator who elevates every project she touches. I highly recommend working with her!',
      subtext: 'Rashmi and Mitali studied together @NID Bengaluru, 2023-2026',
      image: rashmiPortrait,
    },
    {
      id: 'sidharth',
      name: 'Sidharth Mehta',
      role: 'UX Researcher @ Google',
      text: "Mitali's talent for information design is exceptional. She has a unique ability to make complex data sets not only readable but engaging. During our collaborations, her attention to detail and user-centric approach were vital to our success. She balances aesthetics with functional, data-led logic beautifully.\n\nShe is a dedicated, thoughtful designer and a brilliant teammate who will bring great value to any team.",
      subtext: 'Sidharth and Mitali collaborated on dashboard research, 2025',
      image: sidharthPortrait,
    },
    {
      id: 'divya',
      name: 'Divya Nair',
      role: 'Visual Lead @ Groww',
      text: 'Mitali has an exceptional ability to synthesize complex operational data into clean, delightful graphics. Her illustrations bring a warm, human touch to our financial user interfaces, making data interpretation natural and engaging. She is collaborative, receptive, and very detail-oriented.',
      subtext: 'Divya and Mitali collaborated on interactive branding, 2024',
      image: anushaPortrait,
    },
    {
      id: 'kabir',
      name: 'Kabir Verma',
      role: 'Interaction Designer @ Razorpay',
      text: 'Working with Mitali on dashboard visual designs was an absolute pleasure. She brings a rare combination of visual mastery and logical mapping. She is structured, fast, and constantly pushes the boundaries of clean interface design. Her NID training shows in her strong foundational skills.',
      subtext: 'Kabir and Mitali designed merchant analytical layouts, 2024-2025',
      image: sidharthPortrait,
    },
    {
      id: 'priya',
      name: 'Priya Iyer',
      role: 'UX Designer @ CRED',
      text: 'Mitali excels at bringing a playful yet highly polished design language to digital products. Her attention to micro-animations, layout consistency, and typography makes her work feel incredibly premium. She is an invaluable asset to any experience design team.',
      subtext: 'Priya and Mitali worked on gamified payment widgets, 2025',
      image: rashmiPortrait,
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0]
  ];

  // Auto-play interval shifting left every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Update width on resize for layout computations
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedTestimonials.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
      setActiveTestimonial(0);
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
      setActiveTestimonial(testimonials.length - 1);
    } else {
      setActiveTestimonial(currentIndex - 1);
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
    setActiveTestimonial(index);
  };

  const cardWidth = windowWidth < 768 ? windowWidth - 40 : 640;
  const gap = 32; // 2rem
  const translateOffset = (windowWidth / 2) - (cardWidth / 2) - (currentIndex * (cardWidth + gap));

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
              
              {/* B&W avatar nestled in text */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  border: '1.5px solid var(--border-color)',
                  backgroundColor: '#f3f0ec',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src={komalPortrait} 
                  alt="Mitali" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} 
                />
              </motion.div>
            </div>

            {/* Row 2: Information & Experience Designer */}
            <span className="text-orange">Information & Experience Designer</span>

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
          padding: '6rem 0',
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

      {/* Testimonials Slider Section */}
      <section 
        style={{
          padding: '6rem 0 8rem 0',
          backgroundColor: 'var(--bg-primary)',
          borderTop: '1px solid var(--border-color)',
          overflow: 'hidden',
          width: '100%',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
          {/* Rotated Purple square badge */}
          <div 
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#a3a3ec',
              transform: 'rotate(45deg)',
              borderRadius: '6px',
              marginBottom: '1.25rem',
              boxShadow: '0 4px 15px rgba(163, 163, 236, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
            FEEDBACK
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text-primary)', maxWidth: '600px', lineHeight: 1.25 }}>
            People who motivate me to <br />
            <span className="text-orange">keep up the momentum</span>
          </h2>
        </div>

        {/* Testimonial Cards Carousel Container */}
        <div style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: 'flex',
              gap: `${gap}px`,
              width: 'max-content',
              transform: `translateX(${translateOffset}px)`,
              transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
              padding: '1rem 0'
            }}
          >
            {extendedTestimonials.map((test, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={`${test.id}-${index}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                  }}
                  style={{
                    width: `${cardWidth}px`,
                    backgroundColor: 'var(--card-bg)',
                    borderRadius: '24px',
                    border: isActive ? '1px solid rgba(229, 151, 64, 0.25)' : '1px solid var(--border-color)',
                    padding: windowWidth < 768 ? '1.75rem' : '2.5rem',
                    boxShadow: isActive ? '0 12px 40px rgba(0, 0, 0, 0.05)' : 'var(--card-shadow)',
                    opacity: isActive ? 1 : 0.25,
                    transform: isActive ? 'scale(1)' : 'scale(0.96)',
                    filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
                    transition: 'opacity 0.6s, transform 0.6s, filter 0.6s, border-color 0.6s, box-shadow 0.6s',
                    cursor: 'pointer',
                    position: 'relative',
                    textAlign: 'left',
                    userSelect: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Reviewer Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div 
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '1.5px solid var(--border-color)',
                        backgroundColor: '#f3f0ec'
                      }}
                    >
                      <img 
                        src={test.image} 
                        alt={test.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.05)' }} 
                      />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {test.name}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {test.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimony Text */}
                  <p 
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      margin: '1.5rem 0 2rem 0',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {test.text}
                  </p>

                  {/* Subtext info */}
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', marginTop: 'auto' }}>
                    {test.subtext}
                  </span>

                  {/* Floating Circle Dot (Bottom Right Corner of active card) */}
                  {isActive && (
                    <div 
                      style={{
                        position: 'absolute',
                        bottom: '2rem',
                        right: '2rem',
                        width: '28px',
                        height: '28px',
                        border: '1px solid var(--text-primary)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span 
                        style={{
                          width: '5px',
                          height: '5px',
                          backgroundColor: 'var(--text-primary)',
                          borderRadius: '50%',
                        }}
                      />
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '3rem' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                width: activeTestimonial === index ? '18px' : '8px',
                height: '8px',
                borderRadius: '9999px',
                backgroundColor: activeTestimonial === index ? 'var(--text-primary)' : 'var(--border-color)',
                transition: 'var(--transition-fast)',
                padding: 0,
                border: 'none',
                cursor: 'pointer'
              }}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
