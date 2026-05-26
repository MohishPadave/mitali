import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState('light');

  // Synchronize theme with html attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  // Render the current active view
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      
      {/* Floating Header */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Floating Theme Toggler (Decorative/Interactive Circle Dot on the right) */}
      <button 
        onClick={toggleTheme}
        className="floating-side-dot"
        title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
        aria-label="Toggle Theme"
      />

      {/* Main Page Content Wrapper with Transitions */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Footer Section */}
      <Footer onConnectClick={() => setActivePage('contact')} />
      
    </div>
  );
}

export default App;
