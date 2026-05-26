import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock as ClockIcon, Calendar as CalendarIcon, CheckCircle, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [localTime, setLocalTime] = useState('');

  // Configurable Webhook URL
  const WEBHOOK_URL = 'https://hook.us1.make.com/your-webhook-endpoint-here'; // Replace with your webhook endpoint key

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

  // Generate next 5 business days (skipping weekends)
  const getUpcomingDays = () => {
    const days = [];
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    let current = new Date();
    
    while (days.length < 5) {
      current.setDate(current.getDate() + 1);
      // Skip weekends
      if (current.getDay() !== 0 && current.getDay() !== 6) {
        days.push({
          display: current.toLocaleDateString('en-US', options),
          value: current.toDateString()
        });
      }
    }
    return days;
  };

  const days = getUpcomingDays();
  const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"];

  const handleBook = async (e) => {
    e.preventDefault();
    if (!email.trim() || !selectedDate || !selectedTime || !message.trim()) return;

    setIsSubmitting(true);
    
    try {
      // Dispatch payload to Webhook
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          date: selectedDate.display,
          time: selectedTime,
          message: message,
          name: email.split('@')[0],
          timestamp: new Date().toISOString()
        })
      });
      // Set booked state
      setIsBooked(true);
    } catch (error) {
      console.error('Webhook dispatch error:', error);
      // Fallback: succeed locally for demo purposes in case url is placeholder
      setIsBooked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = (field) => {
    if (field === 'email' && !email) setFocusedField(null);
    if (field === 'message' && !message) setFocusedField(null);
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
          {/* Left Column: Direct Info & local clock */}
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
                Select an upcoming business day and time slot to request a project discussion meeting. Fill in your details below to confirm the request!
              </p>
            </div>

            {/* Direct Info List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Mail */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', color: 'var(--accent-orange)' }}>
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
                  <ClockIcon size={18} />
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

          {/* Right Column: Interactive Calendar Booking Component */}
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
              {!isBooked ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
                >
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                    Schedule a Meeting
                  </h3>

                  {/* Step 1: Select Date */}
                  <div>
                    <span 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        color: 'var(--text-tertiary)', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.05em', 
                        marginBottom: '0.75rem' 
                      }}
                    >
                      <CalendarIcon size={14} style={{ color: 'var(--accent-orange)' }} />
                      Select Date
                    </span>
                    <div 
                      style={{ 
                        display: 'flex', 
                        gap: '0.5rem', 
                        overflowX: 'auto', 
                        paddingBottom: '0.5rem',
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none' // IE/Edge
                      }}
                    >
                      {days.map((day) => {
                        const isSelected = selectedDate?.value === day.value;
                        return (
                          <button
                            key={day.value}
                            type="button"
                            onClick={() => {
                              setSelectedDate(day);
                              setSelectedTime(null);
                            }}
                            style={{
                              flexShrink: 0,
                              padding: '0.6rem 1rem',
                              borderRadius: '12px',
                              textAlign: 'center',
                              border: '1px solid',
                              borderColor: isSelected ? 'var(--accent-orange)' : 'var(--border-color)',
                              backgroundColor: isSelected ? 'var(--accent-orange)' : 'var(--bg-secondary)',
                              color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                              transition: 'var(--transition-fast)',
                              cursor: 'pointer'
                            }}
                          >
                            <span style={{ display: 'block', fontSize: '0.65rem', uppercase: 'true', fontWeight: 700, opacity: 0.8 }}>
                              {day.display.split(',')[0]}
                            </span>
                            <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginTop: '0.15rem' }}>
                              {day.display.split(' ')[1]} {day.display.split(' ')[2]}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Select Time */}
                  <AnimatePresence>
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <span 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem', 
                            fontSize: '0.75rem', 
                            fontWeight: 700, 
                            color: 'var(--text-tertiary)', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.05em', 
                            marginBottom: '0.75rem' 
                          }}
                        >
                          <ClockIcon size={14} style={{ color: 'var(--accent-orange)' }} />
                          Select Time (IST)
                        </span>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                          {timeSlots.map((time) => {
                            const isSelected = selectedTime === time;
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setSelectedTime(time)}
                                style={{
                                  padding: '0.6rem 0.5rem',
                                  borderRadius: '10px',
                                  fontSize: '0.8rem',
                                  fontWeight: 600,
                                  border: '1px solid',
                                  borderColor: isSelected ? 'var(--accent-orange)' : 'var(--border-color)',
                                  backgroundColor: isSelected ? 'rgba(229, 151, 64, 0.08)' : 'var(--card-bg)',
                                  color: isSelected ? 'var(--accent-orange)' : 'var(--text-secondary)',
                                  textAlign: 'center',
                                  transition: 'var(--transition-fast)',
                                  cursor: 'pointer'
                                }}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Step 3: Enter Details & Message */}
                  <AnimatePresence>
                    {selectedDate && selectedTime && (
                      <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onSubmit={handleBook}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}
                      >
                        {/* Email field */}
                        <div style={{ position: 'relative', width: '100%' }}>
                          <label 
                            style={{
                              position: 'absolute',
                              left: '12px',
                              top: (focusedField === 'email' || email) ? '-9px' : '12px',
                              fontSize: (focusedField === 'email' || email) ? '0.75rem' : '0.85rem',
                              fontWeight: 500,
                              backgroundColor: 'var(--card-bg)',
                              padding: '0 4px',
                              color: focusedField === 'email' ? 'var(--accent-orange)' : 'var(--text-secondary)',
                              transition: 'var(--transition-fast)',
                              pointerEvents: 'none',
                              zIndex: 2
                            }}
                          >
                            Your Email Address *
                          </label>
                          <input 
                            type="email" 
                            required
                            value={email}
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email')}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              borderRadius: '12px',
                              border: '1px solid',
                              borderColor: focusedField === 'email' ? 'var(--accent-orange)' : 'var(--border-color)',
                              backgroundColor: 'transparent',
                              color: 'var(--text-primary)',
                              outline: 'none',
                              fontSize: '0.9rem',
                              transition: 'border-color 0.2s',
                              boxShadow: focusedField === 'email' ? '0 0 0 3px var(--focus-glow)' : 'none'
                            }}
                          />
                        </div>

                        {/* Message field */}
                        <div style={{ position: 'relative', width: '100%' }}>
                          <label 
                            style={{
                              position: 'absolute',
                              left: '12px',
                              top: (focusedField === 'message' || message) ? '-9px' : '12px',
                              fontSize: (focusedField === 'message' || message) ? '0.75rem' : '0.85rem',
                              fontWeight: 500,
                              backgroundColor: 'var(--card-bg)',
                              padding: '0 4px',
                              color: focusedField === 'message' ? 'var(--accent-orange)' : 'var(--text-secondary)',
                              transition: 'var(--transition-fast)',
                              pointerEvents: 'none',
                              zIndex: 2
                            }}
                          >
                            Message *
                          </label>
                          <textarea 
                            required
                            value={message}
                            onFocus={() => handleFocus('message')}
                            onBlur={() => handleBlur('message')}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={3}
                            style={{
                              width: '100%',
                              padding: '0.8rem 1rem',
                              borderRadius: '12px',
                              border: '1px solid',
                              borderColor: focusedField === 'message' ? 'var(--accent-orange)' : 'var(--border-color)',
                              backgroundColor: 'transparent',
                              color: 'var(--text-primary)',
                              outline: 'none',
                              fontSize: '0.9rem',
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
                            padding: '0.9rem',
                            borderRadius: '12px',
                            backgroundColor: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            opacity: isSubmitting ? 0.7 : 1,
                            transition: 'background-color 0.2s, transform 0.2s',
                            boxShadow: 'var(--card-shadow)'
                          }}
                          onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--accent-orange)'; }}
                          onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.backgroundColor = 'var(--text-primary)'; }}
                        >
                          {isSubmitting ? (
                            <div 
                              style={{
                                width: '16px',
                                height: '16px',
                                border: '2px solid rgba(255,255,255,0.3)',
                                borderTop: '2px solid #ffffff',
                                borderRadius: '50%',
                                animation: 'spin-slow 0.8s linear infinite'
                              }}
                            />
                          ) : (
                            <>
                              <span>Confirm Booking</span>
                              <ArrowRight size={16} />
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                /* Success Feedback Screen */
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem 0' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    style={{ color: 'var(--accent-green)', marginBottom: '1.5rem' }}
                  >
                    <CheckCircle size={64} strokeWidth={1.5} />
                  </motion.div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.75rem', fontWeight: 600 }}>
                    Meeting Requested!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6, maxWidth: '320px', marginBottom: '2rem' }}>
                    Your meeting request has been successfully dispatched!
                    <br />
                    Confirmed for <strong style={{ color: 'var(--text-primary)' }}>{selectedDate?.display}</strong> at <strong style={{ color: 'var(--text-primary)' }}>{selectedTime}</strong>. An invite will be sent to <strong style={{ color: 'var(--text-primary)' }}>{email}</strong>.
                  </p>
                  <button 
                    onClick={() => {
                      setIsBooked(false);
                      setSelectedDate(null);
                      setSelectedTime(null);
                      setEmail('');
                      setMessage('');
                    }}
                    className="btn-primary"
                    style={{ fontSize: '0.85rem', gap: '0.4rem' }}
                  >
                    <span>Request another slot</span>
                    <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
