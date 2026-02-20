import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Motion values for instant tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs with HIGH stiffness for a snappy feel (not floaty)
    const ringX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
    const ringY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('a, button, input, [role="button"], .clickable');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            {/* Outer Ring - Snappy Trace */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isHovering ? 50 : 30,
                    height: isHovering ? 50 : 30,
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                    backgroundColor: isHovering ? 'rgba(204, 255, 0, 0.15)' : 'transparent',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Center Dot - Instant Point */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 6,
                    height: 6,
                    backgroundColor: 'var(--primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            <style>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 1024px) {
          * {
            cursor: auto !important;
          }
          div[style*="zIndex: 9999"], div[style*="zIndex: 10000"] {
            display: none !important;
          }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
