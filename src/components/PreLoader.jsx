
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell } from 'lucide-react';

const PreLoader = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 9999,
                            background: '#0a0a0a',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 180, 360],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}
                        >
                            <Dumbbell size={80} />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{ color: 'white', letterSpacing: '5px', fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                            FITNESS ARENA
                        </motion.h2>
                        <motion.div
                            style={{
                                width: '200px',
                                height: '2px',
                                background: 'rgba(255,255,255,0.1)',
                                marginTop: '2rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <motion.div
                                animate={{ left: ['-100%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    width: '50%',
                                    height: '100%',
                                    background: 'var(--primary)'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!loading && children}
        </>
    );
};

export default PreLoader;
