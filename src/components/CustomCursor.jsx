import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's a touch device (no fine cursor)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsTouchDevice(mediaQuery.matches);
    const mediaListener = (e) => setIsTouchDevice(e.matches);
    mediaQuery.addEventListener('change', mediaListener);

    return () => {
      mediaQuery.removeEventListener('change', mediaListener);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoved = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isMoved) {
        isMoved = true;
        setIsVisible(true);
        // Instant snap on first move
        currentX = mouseX;
        currentY = mouseY;
      }
    };

    const onMouseDown = () => {
      cursor.classList.add('cursor-active');
    };

    const onMouseUp = () => {
      cursor.classList.remove('cursor-active');
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const computedStyle = window.getComputedStyle(target);
      const cursorType = computedStyle.cursor;

      // Reset cursor modifier classes
      cursor.classList.remove('cursor-hover', 'cursor-text', 'cursor-not-allowed');

      // Check if it is a text-input element
      const textSelector = 'input[type="text"], input[type="search"], input[type="email"], input[type="url"], input[type="password"], input[type="tel"], textarea, [contenteditable="true"]';
      const isText = target.closest(textSelector) || cursorType === 'text';

      if (isText) {
        cursor.classList.add('cursor-text');
        return;
      }

      // Check if it is a blocked element
      if (cursorType === 'not-allowed') {
        cursor.classList.add('cursor-not-allowed');
        return;
      }

      // Check if interactive element
      const isInteractive = target.closest('a, button, [role="button"], .interactive-hover') || cursorType === 'pointer';
      if (isInteractive) {
        cursor.classList.add('cursor-hover');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Attach listeners
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Animation loop (RAF)
    let animationFrameId;
    const render = () => {
      // Lerp the entire cursor unit (0.22 coefficient provides snappy responsiveness with a touch of organic glide)
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div 
      ref={cursorRef} 
      className={`custom-cursor-container ${isVisible ? 'visible' : ''}`}
      aria-hidden="true"
    >
      <div className="custom-cursor-ring" />
      <div className="custom-cursor-dot" />
    </div>
  );
}
