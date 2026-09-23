import { useState, useEffect, useRef } from 'react';

/**
 * useMagnetic Hook
 * Restrained magnetic pull applied ONLY to the single primary CTA.
 * Cursor shifts element subtly (max 6-8px). Springs back on leave.
 * Automatically disabled on touch/coarse pointer devices.
 */
export default function useMagnetic(maxDistance = 7) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if the device has a mouse/fine pointer (disable on mobile/touch)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // Calculate distance from center
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const threshold = Math.max(width, height) * 0.8;

      if (distance < threshold) {
        // Normalize and scale to maxDistance (6-8px)
        const moveX = (deltaX / threshold) * maxDistance;
        const moveY = (deltaY / threshold) * maxDistance;
        setPosition({ x: moveX, y: moveY });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxDistance]);

  return { ref, position };
}
