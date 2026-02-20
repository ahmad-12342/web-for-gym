import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    // High stiffness for a snappy, non-laggy feel
    const x = useSpring(0, { stiffness: 500, damping: 30 });
    const y = useSpring(0, { stiffness: 500, damping: 30 });

    useEffect(() => {
        const mouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const mouseOver = (e) => {
            const isClickable = e.target.closest('button, a, input, [role="button"]');
            setIsHovering(!!isClickable);
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, [x, y]);

    return (
        <>
            {/* The sharp trailing ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isHovering ? 50 : 35,
                    height: isHovering ? 50 : 35,
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                    backgroundColor: isHovering ? 'rgba(204, 255, 0, 0.1)' : 'transparent',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x,
                    y,
                    translateX: '-50%',
                    translateY: '-50%',
                    transition: 'width 0.2s, height 0.2s, background-color 0.2s'
                }}
            />

            {/* The instant center dot */}
            <div
                style={{
                    position: 'fixed',
                    left: mousePosition.x,
                    top: mousePosition.y,
                    width: 6,
                    height: 6,
                    backgroundColor: 'var(--primary)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000,
                    transform: 'translate(-50%, -50%)',
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
