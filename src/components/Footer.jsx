import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import mitaliPortrait from '../assets/mitali.jpg';

// Custom LinkedIn Icon Component
function LinkedinIcon({ size = 18 }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      style={{ display: 'block' }}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}


export default function Footer({ onConnectClick }) {
  return (
    <footer 
      style={{
        paddingTop: '6rem',
        paddingBottom: '3rem',
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Available For Work Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: '#111111',
            color: '#ffffff',
            padding: '0.5rem 1.2rem',
            borderRadius: '100px',
            fontSize: '0.8rem',
            fontWeight: 500,
            marginBottom: '2.5rem',
            letterSpacing: '0.03em',
          }}
        >
          {/* Glowing Green Dot */}
          <span 
            className="pulse-glow"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--accent-green)',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
          <span>Available For Work</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--text-primary)',
            marginBottom: '3rem',
            maxWidth: '700px',
            position: 'relative'
          }}
        >
          I'd be happy to <span className="text-orange">connect with you!</span>
        </motion.h2>

        {/* Profile Card / Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {/* B&W Portrait Circular crop */}
          <div 
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--border-color)',
              boxShadow: 'var(--card-shadow)',
              backgroundColor: '#f3f0ec'
            }}
          >
            <img 
              src={mitaliPortrait} 
              alt="Mitali" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Mitali Waingankar
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Aspiring Data Analyst & Creative Problem Solver
            </p>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem' }}>
              CONTACT ME
            </span>
            <a 
              href="mailto:mitali.waingankar09@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-orange)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              <Mail size={16} />
              <span>mitali.waingankar09@gmail.com</span>
            </a>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', marginTop: '0.5rem', fontStyle: 'italic' }}>
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '5rem' }}>
          {[
            { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://www.linkedin.com/in/mitali-waingankar-14391b215/' }
          ].map((social, idx) => {
            const IconComp = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, borderColor: 'var(--accent-orange)', color: 'var(--accent-orange)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-secondary)',
                  backgroundColor: 'var(--card-bg)',
                  boxShadow: 'var(--card-shadow)'
                }}
              >
                <IconComp size={18} />
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Line Sub-footer */}
        <div 
          style={{
            width: '100%',
            borderTop: '1px solid var(--border-color)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.8rem',
            color: 'var(--text-tertiary)'
          }}
        >
          <span>All rights reserved, ©2026</span>
        </div>

      </div>
    </footer>
  );
}
