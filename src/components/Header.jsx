import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Folder, User, Mail, Menu } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import headerLogo from '../assets/header_logo.png';

export default function Header({ activePage, setActivePage }) {
  const { isScrolled } = useScrollPosition(50);
  const [isHovered, setIsHovered] = useState(false);

  // The header expands if scrolled down OR if hovered at the top
  const isExpanded = isScrolled || isHovered;

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'contact', label: 'Contact Us', icon: Mail },
  ];

  return (
    <div 
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        pointerEvents: 'none', // Allow clicks behind the floating zone
      }}
    >
      <motion.nav
        layout
        initial={{ borderRadius: 9999, y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          layout: { type: 'spring', stiffness: 220, damping: 26 }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          pointerEvents: 'auto', // Enable pointer events for the nav itself
          display: 'flex',
          alignItems: 'center',
          gap: isExpanded ? '1rem' : '0rem',
          padding: isExpanded ? '0.5rem 1.25rem 0.5rem 0.6rem' : '0.5rem',
          backgroundColor: 'var(--header-bg)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--header-shadow)',
          height: '52px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* Brand Logo - always visible */}
        <motion.div 
          layout
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0,0,0,0.05)',
            flexShrink: 0,
          }}
        >
          <img 
            src={headerLogo} 
            alt="Logo" 
            style={{ 
              width: '160%', // Scaled up slightly to hide margins
              height: '160%',
              objectFit: 'cover',
              transform: 'translateY(-1px)' // visual adjustments
            }} 
          />
        </motion.div>

        {/* Animated Navigation Items */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activePage === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActivePage(item.id)}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '9999px',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {/* Background active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(28, 27, 26, 0.04)',
                          borderRadius: '9999px',
                          border: '1px solid rgba(28, 27, 26, 0.06)',
                          zIndex: -1,
                        }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />
                    <span style={{ display: 'inline-block' }}>{item.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Simple prompt/hint when contracted */}
        <AnimatePresence>
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                paddingLeft: '0.25rem',
                paddingRight: '0.5rem',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <span>•</span>
              <span>Menu</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
