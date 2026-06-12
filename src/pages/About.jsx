import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, PenTool, Layout, Eye, Code, Download } from 'lucide-react';
import mitaliPortrait from '../assets/mitali.jpg';

export default function About() {
  const experiences = [
    {
      type: 'work',
      title: 'Business Development Intern',
      organization: 'PhillipCapital (India) Pvt. Ltd.',
      period: 'Oct 2025 – Dec 2025',
      description: [
        'Analyzed 850+ investor records using Excel',
        'Maintained segmented databases',
        'Tracked outreach performance metrics',
        'Supported data-driven campaign decisions'
      ]
    },
    {
      type: 'work',
      title: 'Marketing Head',
      organization: 'Beyond Meds Foundation (NGO)',
      period: 'Dec 2021 - Mar 2022',
      description: [
        'Led and managed a team of marketing interns, overseeing campaign execution and content strategy',
        'Analyzed Meta Ads performance metrics (reach, engagement, CTR) to optimize targeting and campaign effectiveness',
        'Improved digital engagement and visibility through data-driven marketing strategies'
      ]
    },
    {
      type: 'education',
      title: 'PGDM',
      organization: 'Athena School of Management',
      period: 'Pursuing',
      description: ''
    },
    {
      type: 'education',
      title: 'BMS',
      organization: 'University of Mumbai, Thane Sub Campus',
      period: 'Graduated',
      description: ''
    },
    {
      type: 'education',
      title: 'Class XII',
      organization: 'Lodha World School',
      period: 'Completed',
      description: ''
    },
    {
      type: 'education',
      title: 'Class X',
      organization: 'Pawar Public School',
      period: 'Completed',
      description: ''
    }
  ];

  const tools = [
    { name: 'Data Visualization', icon: Eye, details: 'Power BI, Tableau, building interactive dashboards, design systems, storytelling.' },
    { name: 'Python Analytics', icon: Code, details: 'Pandas, NumPy, Matplotlib, Seaborn, exploratory data analysis, automation scripts.' },
    { name: 'Data Modeling & SQL', icon: Layout, details: 'SQL queries, data cleaning, structuring relational tables, database schema design.' },
    { name: 'Business Intelligence', icon: Briefcase, details: 'Advanced Excel, Pivot tables, financial modeling, analyzing consumer trends.' }
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
                maxWidth: '300px',
                aspectRatio: '1',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow)',
                border: '3px solid var(--border-color)',
                backgroundColor: 'var(--card-bg)'
              }}
            >
              <img 
                src={mitaliPortrait} 
                alt="Mitali Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
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
              Transforming raw data into <span className="text-orange">meaningful insights & decisions.</span>
            </h1>
            <div style={{ color: 'var(--text-secondary)', fontSize: '1.025rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p>
                I’m an aspiring Business & Data Analyst passionate about transforming raw data into meaningful insights and business decisions. With experience in Power BI, Tableau, Excel, and Python, I enjoy exploring patterns, building dashboards, and solving analytical problems through storytelling and visualization.
              </p>
              <p>
                My interest in analytics comes from a curiosity about understanding consumer behaviour, business trends, and the impact data can create when presented effectively. From analysing retail sales performance to studying emotional storytelling and audience engagement, I enjoy combining creativity with structured analysis to uncover insights that drive smarter decisions.
              </p>
              <p>
                Beyond dashboards and reports, I’m continuously learning and building projects that strengthen my skills in business intelligence, visualization, and problem-solving. I aim to create data experiences that are not only insightful, but also clear, engaging, and impactful.
              </p>
            </div>

            {/* Download Resume Button */}
            <div style={{ marginTop: '2.5rem' }}>
              <a 
                href="/Mitali_Resume.pdf" 
                download="Mitali_Resume.pdf"
                className="btn-primary"
                style={{ display: 'inline-flex', gap: '0.6rem', alignItems: 'center' }}
              >
                <span>Download Resume</span>
                <Download size={16} />
              </a>
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

                {exp.description && (
                  Array.isArray(exp.description) ? (
                    <ul style={{ paddingLeft: '1.25rem', margin: '0.5rem 0 0 0', listStyleType: 'disc', color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} style={{ marginBottom: '0.4rem' }}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '0.4rem' }}>
                      {exp.description}
                    </p>
                  )
                )}
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
