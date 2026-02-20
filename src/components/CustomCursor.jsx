import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Optimized spring physics for maximum smoothness
    const x = useSpring(0, { stiffness: 400, damping: 50 });
    const y = useSpring(0, { stiffness: 400, damping: 50 });

    // Trailing ring with more "weight" for liquid feel
    const ringX = useSpring(0, { stiffness: 100, damping: 25 });
    const ringY = useSpring(0, { stiffness: 100, damping: 25 });

    useEffect(() => {
        const mouseMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            ringX.set(e.clientX);
            ringY.set(e.clientY);
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
    }, [x, y, ringX, ringY]);

    return (
        <>
            {/* The trailing liquid ring */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: isHovering ? 50 : 35,
                    height: isHovering ? 50 : 35,
                    borderRadius: '50%',
                    border: '1.5px solid var(--primary)',
                    backgroundColor: isHovering ? 'var(--primary)' : 'transparent',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    mixBlendMode: isHovering ? 'difference' : 'normal',
                    opacity: 0.6
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 30 }}
            />

            {/* The sharp center point */}
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
                    x,
                    y,
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
                    .custom-cursor-container {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default CustomCursor;
