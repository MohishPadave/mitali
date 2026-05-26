import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Users, Eye } from 'lucide-react';
import projBiodiversity from '../assets/project_biodiversity.png';
import projDataViz from '../assets/project_data_viz.png';

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
      id: 'giz-biodiversity',
      title: 'Biodiversity Monitoring Platform',
      category: 'Interface Design',
      client: 'Indo-German Biodiversity Programme (GIZ)',
      period: '2024 - Present',
      image: projBiodiversity,
      summary: 'An interactive GIS mapping and data monitoring dashboard designed to help environmental scientists track flora/fauna species variations across India.',
      tags: ['UX/UI', 'Data Viz', 'GIS Mapping', 'Dashboard'],
      challenge: 'GIZ scientists collected vast amounts of ecological field data across diverse nature sanctuaries in India, but lacked a central visual tool. Tabular data made it extremely difficult to identify cross-region biodiversity patterns or track endangered species migration.',
      solution: 'I designed a web-based GIS monitoring platform incorporating custom map layers, rapid species filtering, and timeline comparison sliders. Complex data points were translated into clear spatial indicators, enabling researchers to visualize indices in one click.',
      process: 'Conducted stakeholder workshops with 10+ field scientists to map workflows. Sketched layout iterations on Figma, focusing on high-contrast markers for daylight outdoor use. Created interactive data widgets (bar charts, radar charts, distribution heatmaps) and built clickable interactive prototypes.',
      outcome: 'Reduced research mapping time by 45%. The platform was officially adopted by the GIZ Indo-German steering committee and deployed to 4 regional forestry offices.'
    },
    {
      id: 'platform-analytics',
      title: 'Platform Analytics & Engagement',
      category: 'Data Visualization',
      client: 'Internal Product Team',
      period: '2023 - 2024',
      image: projDataViz,
      summary: 'A futuristic executive dashboard containing complex funnel charts, user retention matrices, and interactive key metric visualizers.',
      tags: ['Dashboard', 'React', 'Figma', 'UX/UI'],
      challenge: 'An enterprise product manager needed a visual dashboard showing real-time growth indicators, churn models, and feature adoption funnels to present to C-level executives. Existing solutions were cluttered, dry, and slow to load.',
      solution: 'Developed a high-fidelity visual design specification featuring a dark-themed user interface, glowing data paths, and simplified high-level cards. Used semantic groupings to place critical engagement rates in the primary focus zone.',
      process: 'Conducted user journey mapping for executive roles. Designed typography scales to ensure high legibility of metric counts. Refined dark-mode colors to minimize eye strain. Built responsive layout mockups for desktop and tablet screens.',
      outcome: 'Improved executive meeting preparation efficiency. Feedback praised the high visual clarity, noting that the funnel graphs made user drop-off points immediately clear.'
    },
    {
      id: 'fauna-illustrations',
      title: 'Flora & Fauna Vector Series',
      category: 'Illustration',
      client: 'Self-initiated / Publication',
      period: '2023',
      image: projBiodiversity, // reused beautifully or styled differently
      summary: 'A series of playful vector illustrations depicting Indian wildlife, combining geometric shapes with vibrant palettes to make education fun.',
      tags: ['Illustration', 'Vector Art', 'Branding'],
      challenge: 'Children educational books on biology often use dry, academic photography or overly childish cartoons. There is a lack of geometric, modern illustrations that engage both young learners and art-loving adults.',
      solution: 'Created a library of 15 geometric vector animals and plants using grids, curved lines, and a warm harmonized color scheme (terracotta, forest greens, peach).',
      process: 'Researched native Indian species (Bengal tiger, Nilgiri tahr, Great Indian hornbill). Sketched geometric symmetries by hand before tracing clean Bezier curves in Adobe Illustrator. Refined textures using grain brushes.',
      outcome: 'Featured in a design showcase and sold as limited-edition prints. Used as visual motifs in school educational handouts.'
    },
    {
      id: 'eco-tourism-guide',
      title: 'Eco-Tourism Interactive Guide',
      category: 'Interface Design',
      client: 'State Tourism Board',
      period: '2022',
      image: projDataViz,
      summary: 'An interactive web portal promoting eco-tourism spots with localized maps, booking workflows, and sustainable travel guides.',
      tags: ['UX/UI', 'Mobile Design', 'Travel'],
      challenge: 'Travelers visiting conservation areas lacked a reliable source for sustainable travel guidelines, local homestay verification, and eco-tours, causing unregulated tourism spikes.',
      solution: 'Designed a mobile-first portal centered around eco-certifications, highlighting local community-run experiences with playful icons and clean navigation.',
      process: 'Interviewed eco-travelers and homestay owners. Designed user flows mapping the booking and rating processes. Created micro-interactions for map markers and filters.',
      outcome: 'Achieved a 92% user satisfaction score during usability testing. Resulted in a 30% increase in inquiries for certified local guides.'
    }
  ];

  // Filtering logic
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const categories = ['All', 'Interface Design', 'Data Visualization', 'Illustration'];

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
