import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import komalPortrait from '../assets/komal_headshot.png';

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

// Custom Behance Icon Component
function BehanceIcon({ size = 18 }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill="currentColor"
      style={{ display: 'block' }}
    >
      <path d="M8.2 5h-4.3v14h4.5c2.6 0 4.7-1.4 4.7-4 0-1.7-1.1-2.9-2.7-3.4 1.3-.5 2.1-1.6 2.1-3.1 0-2.3-1.9-3.5-4.3-3.5zm-2.1 2.3h1.8c1.1 0 1.9.5 1.9 1.4 0 .9-.8 1.4-1.9 1.4h-1.8v-2.8zm1.9 8.4h-1.9v-3h1.9c1.2 0 2 .5 2 1.5s-.8 1.5-2 1.5zm14-5.2h-5.6c0-1.3 1-2.2 2.5-2.2 1.4 0 2.2.8 2.2 1.8h2.1c-.2-2.1-2-3.6-4.3-3.6-2.9 0-4.8 2.1-4.8 5 0 2.8 2 5 4.9 5 2.4 0 4.2-1.5 4.5-3.8h-2.1c-.2 1.1-1 1.7-2.3 1.7-1.5 0-2.5-.9-2.6-2.2h7.8v-.7zm-5.4-1.5c.2-1 1-1.6 2.2-1.6 1.1 0 1.9.6 2 1.6h-4.2zm2.1-5h4v-1.1h-4v1.1z"/>
    </svg>
  );
}

// Custom Instagram Icon Component
function InstagramIcon({ size = 18 }) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
          
          {/* Circular Decorative Dot Icon aligned to the right (absolute desktop, relative mobile) */}
          <div 
            style={{
              display: 'inline-block',
              marginLeft: '1rem',
              verticalAlign: 'middle',
              width: '32px',
              height: '32px',
              border: '1px solid var(--text-primary)',
              borderRadius: '50%',
              position: 'relative',
            }}
          >
            <span 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '6px',
                height: '6px',
                backgroundColor: 'var(--text-primary)',
                borderRadius: '50%',
              }}
            />
          </div>
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
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid var(--border-color)',
              boxShadow: 'var(--card-shadow)',
              backgroundColor: '#f3f0ec'
            }}
          >
            <img 
              src={komalPortrait} 
              alt="Komal" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%) contrast(1.1)' // ensure B&W styling
              }}
            />
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Komal
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Information & Experience Designer | MDes @NID
            </p>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.15em', display: 'block', marginBottom: '0.4rem' }}>
              CONTACT ME
            </span>
            <a 
              href="mailto:hkmor.21@gmail.com"
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
              <span>hkmor.21@gmail.com</span>
            </a>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px', marginTop: '0.5rem', fontStyle: 'italic' }}>
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '5rem' }}>
          {[
            { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com' },
            { name: 'Behance', icon: BehanceIcon, url: 'https://behance.net' },
            { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' }
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
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-tertiary)'
          }}
        >
          <span>komalmor.framer.website</span>
          <span>Built with a glass of VitD & React + Framer Motion</span>
          <span>All rights reserved, ©2026</span>
        </div>

      </div>
    </footer>
  );
}
