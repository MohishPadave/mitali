import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, PenTool, Layout, Eye, Code } from 'lucide-react';
import komalPortrait from '../assets/komal_headshot.png';

export default function About() {
  const experiences = [
    {
      type: 'work',
      title: 'Lead Visual Designer',
      organization: 'Indo-German Biodiversity Programme, GIZ India',
      period: '2024 - Present',
      description: 'Designing data-led interfaces, visual guidelines, and mapping tools to monitor biodiversity conservation across Indo-German bilateral projects. Translating scientific data into accessible UX/UI dashboards.'
    },
    {
      type: 'education',
      title: 'Master of Design (MDes) in Information & Interface Design',
      organization: 'National Institute of Design (NID), India',
      period: '2022 - 2024',
      description: 'Specialized in data visualization, typography, interaction design, and storytelling. Researched the intersection of playful illustration and user experience in complex information interfaces.'
    },
    {
      type: 'work',
      title: 'Freelance Illustrator & UX Designer',
      organization: 'Self-employed',
      period: '2020 - 2022',
      description: 'Partnered with start-ups and NGOs to develop brand identities, customized vector illustrations, and initial mobile app wireframes. Focused on bringing a playful design aesthetic to digital interfaces.'
    }
  ];

  const tools = [
    { name: 'UI/UX Design', icon: Layout, details: 'Figma, wireframing, interactive prototyping, user research, heuristic analysis.' },
    { name: 'Data Visualization', icon: Eye, details: 'D3.js, interactive charting, map layouts, information hierarchies, infographics.' },
    { name: 'Visual Illustration', icon: PenTool, details: 'Adobe Illustrator, Photoshop, vector storytelling, playful character designs.' },
    { name: 'Web Prototyping', icon: Code, details: 'React, HTML5, CSS3, Javascript, Framer Motion, responsive design layout.' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={{ padding: '8rem 0 6rem 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Intro Section */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '6rem'
          }}
        >
          {/* Left Column: Portrait & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div 
              style={{
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '1',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow)',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--card-bg)',
                transform: 'rotate(-2deg)',
                transition: 'transform 0.4s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
            >
              <img 
                src={komalPortrait} 
                alt="Komal Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)'
                }}
              />
            </div>
            
            <p 
              style={{
                marginTop: '2rem',
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
                textAlign: 'center',
                maxWidth: '280px',
                lineHeight: 1.5
              }}
            >
              "Good design is not just how it looks; it is about making complex systems playful, visual, and human."
            </p>
          </motion.div>

          {/* Right Column: Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
              ABOUT ME
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.25 }}>
              Design is my way of making complex ideas <span className="text-orange">playful & readable.</span>
            </h1>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                Hi there! I am Komal. I specialize in the intersection of <strong>Information Design</strong> and <strong>Interface/UX Design</strong>. My practice revolves around crafting data-led visual solutions that help people understand and navigate complex systems.
              </p>
              <p>
                With a Master's degree in design (MDes) from the <strong>National Institute of Design (NID)</strong>, I have spent years training my eye for typography, spatial design, and visual hierarchy. My academic and professional journey has taught me to look beyond decorators and prioritize structure, accessibility, and clarity.
              </p>
              <p>
                Currently, I am working with the <strong>Indo-German Biodiversity Programme (@GIZ India)</strong>. Here, I create dashboards, GIS maps, and data graphics that communicate biodiversity indexes and conservation impact. When I am not pushing pixels, you can find me drawing vector doodles and trying to make everyday objects a little bit more playful!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Toolkit Section */}
        <section style={{ marginBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
              TOOLKIT
            </span>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>
              Skills & <span className="text-orange">Expertise</span>
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  whileHover={{ y: -6, borderColor: 'var(--accent-orange)' }}
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '2rem 1.5rem',
                    boxShadow: 'var(--card-shadow)',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(229, 151, 64, 0.08)',
                      color: 'var(--accent-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
                    {tool.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {tool.details}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Experience Timeline */}
        <section>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.5rem' }}>
              JOURNEY
            </span>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>
              Work & <span className="text-orange">Education</span>
            </h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical timeline line */}
            <div 
              style={{
                position: 'absolute',
                left: '7px',
                top: '12px',
                bottom: '12px',
                width: '2px',
                backgroundColor: 'var(--border-color)'
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  position: 'relative',
                  marginBottom: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                {/* Timeline node */}
                <div 
                  style={{
                    position: 'absolute',
                    left: '-29px',
                    top: '4px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: exp.type === 'work' ? 'var(--accent-orange)' : 'var(--text-primary)',
                    border: '3px solid var(--bg-primary)',
                    zIndex: 2,
                    boxShadow: '0 0 0 3px var(--border-color)'
                  }}
                />

                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    {exp.title}
                  </h3>
                  <span 
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--accent-orange)',
                      backgroundColor: 'rgba(229, 151, 64, 0.06)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '100px',
                      border: '1px solid rgba(229, 151, 64, 0.1)'
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
                  {exp.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                  <span>{exp.organization}</span>
                </div>

                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.4rem' }}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
