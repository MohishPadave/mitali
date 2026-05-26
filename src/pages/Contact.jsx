import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or null
  const [localTime, setLocalTime] = useState('');

  // Live local clock in Mitali's timezone (India GMT +5:30)
  useEffect(() => {
    const updateClock = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocusedField(null);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <div style={{ padding: '8rem 0 6rem 0', backgroundColor: 'var(--bg-primary)', minHeight: '85vh' }}>
      <div className="container">
        
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct info & local clock */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              {/* Pulsing Active Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(46, 189, 89, 0.08)',
                  color: 'var(--accent-green)',
                  border: '1px solid rgba(46, 189, 89, 0.15)',
                  padding: '0.4rem 1rem',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                }}
              >
                <span className="pulse-glow" style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-green)', borderRadius: '50%' }} />
                <span>Available for New Projects</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Let's make something <span className="text-orange">beautiful together.</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.6, maxWidth: '420px' }}>
                Have a project idea, a design system in mind, or complex data that needs storytelling? Reach out and let's start a conversation!
              </p>
            </div>

            {/* Direct Info List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Mail */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--accent-orange)' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, display: 'block' }}>EMAIL ME</span>
                  <a href="mailto:hkmor.21@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-primary)' }} className="text-hover-orange">
                    hkmor.21@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, display: 'block' }}>LOCATION</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>New Delhi, India</span>
                </div>
              </div>

              {/* Live Timezone Clock */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>
                  <Clock size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', fontWeight: 600, display: 'block' }}>MY LOCAL TIME (IST)</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 600, fontFamily: 'monospace', color: 'var(--accent-orange)' }}>
                    {localTime || 'Loading time...'}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              padding: '2.5rem',
              boxShadow: 'var(--card-shadow)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                /* Success Feedback Screen */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem 0' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    style={{ color: 'var(--accent-green)', marginBottom: '1.5rem' }}
                  >
                    <CheckCircle2 size={64} strokeWidth={1.5} />
                  </motion.div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 600 }}>
                    Message Sent Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, maxWidth: '320px', marginBottom: '2rem' }}>
                    Thank you for reaching out! Mitali has received your details and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitStatus(null)}
                    className="btn-primary"
                    style={{ fontSize: '0.85rem', gap: '0.4rem' }}
                  >
                    <span>Send another message</span>
                    <ArrowRight size={14} />
                  </button>
                </motion.div>
              ) : (
                /* Input Form */
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
                >
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Send a message
                  </h3>

                  {/* Name field */}
                  <div style={{ position: 'relative', width: '100%' }}>
                    <label 
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: (focusedField === 'name' || formData.name) ? '-9px' : '15px',
                        fontSize: (focusedField === 'name' || formData.name) ? '0.75rem' : '0.9rem',
                        fontWeight: 500,
                        backgroundColor: 'var(--card-bg)',
                        padding: '0 4px',
                        color: focusedField === 'name' ? 'var(--accent-orange)' : 'var(--text-secondary)',
                        transition: 'var(--transition-fast)',
                        pointerEvents: 'none',
                        zIndex: 2
                      }}
                    >
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid',
                        borderColor: focusedField === 'name' ? 'var(--accent-orange)' : 'var(--border-color)',
                        backgroundColor: 'transparent',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        transition: 'border-color 0.2s',
                        boxShadow: focusedField === 'name' ? '0 0 0 3px var(--focus-glow)' : 'none'
                      }}
                    />
                  </div>

                  {/* Email field */}
                  <div style={{ position: 'relative', width: '100%' }}>
                    <label 
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: (focusedField === 'email' || formData.email) ? '-9px' : '15px',
                        fontSize: (focusedField === 'email' || formData.email) ? '0.75rem' : '0.9rem',
                        fontWeight: 500,
                        backgroundColor: 'var(--card-bg)',
                        padding: '0 4px',
                        color: focusedField === 'email' ? 'var(--accent-orange)' : 'var(--text-secondary)',
                        transition: 'var(--transition-fast)',
                        pointerEvents: 'none',
                        zIndex: 2
                      }}
                    >
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid',
                        borderColor: focusedField === 'email' ? 'var(--accent-orange)' : 'var(--border-color)',
                        backgroundColor: 'transparent',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        transition: 'border-color 0.2s',
                        boxShadow: focusedField === 'email' ? '0 0 0 3px var(--focus-glow)' : 'none'
                      }}
                    />
                  </div>

                  {/* Subject field */}
                  <div style={{ position: 'relative', width: '100%' }}>
                    <label 
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: (focusedField === 'subject' || formData.subject) ? '-9px' : '15px',
                        fontSize: (focusedField === 'subject' || formData.subject) ? '0.75rem' : '0.9rem',
                        fontWeight: 500,
                        backgroundColor: 'var(--card-bg)',
                        padding: '0 4px',
                        color: focusedField === 'subject' ? 'var(--accent-orange)' : 'var(--text-secondary)',
                        transition: 'var(--transition-fast)',
                        pointerEvents: 'none',
                        zIndex: 2
                      }}
                    >
                      Subject
                    </label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onFocus={() => handleFocus('subject')}
                      onBlur={() => handleBlur('subject')}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid',
                        borderColor: focusedField === 'subject' ? 'var(--accent-orange)' : 'var(--border-color)',
                        backgroundColor: 'transparent',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        transition: 'border-color 0.2s',
                        boxShadow: focusedField === 'subject' ? '0 0 0 3px var(--focus-glow)' : 'none'
                      }}
                    />
                  </div>

                  {/* Message field */}
                  <div style={{ position: 'relative', width: '100%' }}>
                    <label 
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: (focusedField === 'message' || formData.message) ? '-9px' : '15px',
                        fontSize: (focusedField === 'message' || formData.message) ? '0.75rem' : '0.9rem',
                        fontWeight: 500,
                        backgroundColor: 'var(--card-bg)',
                        padding: '0 4px',
                        color: focusedField === 'message' ? 'var(--accent-orange)' : 'var(--text-secondary)',
                        transition: 'var(--transition-fast)',
                        pointerEvents: 'none',
                        zIndex: 2
                      }}
                    >
                      Your Message *
                    </label>
                    <textarea 
                      name="message"
                      required
                      value={formData.message}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      onChange={handleChange}
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid',
                        borderColor: focusedField === 'message' ? 'var(--accent-orange)' : 'var(--border-color)',
                        backgroundColor: 'transparent',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        resize: 'none',
                        transition: 'border-color 0.2s',
                        boxShadow: focusedField === 'message' ? '0 0 0 3px var(--focus-glow)' : 'none'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '12px',
                      backgroundColor: 'var(--text-primary)',
                      color: 'var(--bg-primary)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                      transition: 'background-color 0.2s, transform 0.2s',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--accent-orange)'; }}
                    onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--text-primary)'; }}
                  >
                    {isSubmitting ? (
                      /* Spinner */
                      <div 
                        style={{
                          width: '18px',
                          height: '18px',
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTop: '2px solid #ffffff',
                          borderRadius: '50%',
                          animation: 'spin-slow 0.8s linear infinite'
                        }}
                      />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
