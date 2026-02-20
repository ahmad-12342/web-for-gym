
import React from 'react';

const Logo = ({ size = 40, color = "#ccff00" }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0 0 8px rgba(204, 255, 0, 0.4))' }}
        >
            {/* Outer Hexagon / Shield Shape */}
            <path
                d="M50 5L90 25V75L50 95L10 75V25L50 5Z"
                stroke={color}
                strokeWidth="4"
                strokeLinejoin="round"
            />

            {/* Stylized Dumbbell / 'F' Integration */}
            <rect x="35" y="30" width="30" height="8" rx="2" fill={color} />
            <rect x="35" y="62" width="30" height="8" rx="2" fill={color} />
            <rect x="46" y="25" width="8" height="50" rx="4" fill={color} />

            {/* Accent Lines */}
            <path d="M20 35H30" stroke={color} strokeWidth="3" strokeLinecap="round" />
            <path d="M70 35H80" stroke={color} strokeWidth="3" strokeLinecap="round" />
            <path d="M20 65H30" stroke={color} strokeWidth="3" strokeLinecap="round" />
            <path d="M70 65H80" stroke={color} strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
};

export default Logo;
