
import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const mouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, []);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mousePosition.x, springConfig);
    const cursorY = useSpring(mousePosition.y, springConfig);

    return (
        <>
            {/* The trailing ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isHovering ? 60 : 40,
                    height: isHovering ? 60 : 40,
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                    backgroundColor: isHovering ? 'rgba(204, 255, 0, 0.1)' : 'transparent',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    translateX: cursorX,
                    translateY: cursorY,
                    x: '-50%',
                    y: '-50%',
                    transition: 'width 0.3s, height 0.3s, background-color 0.3s'
                }}
            />

            {/* The center dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: 8,
                    height: 8,
                    backgroundColor: 'var(--primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
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
