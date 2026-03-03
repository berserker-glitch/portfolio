import React from 'react';

/**
 * Premium, highly polished SVG animations for the Projects section.
 * Designed with abstract geometric shapes, particle fields, deep 
 * 3D-like glow filters, and complex smooth animations.
 */

// Reusable SVG Filters & Gradients (Critical for the "WOW" factor)
const PremiumDefs = ({ id }: { id: string }) => (
    <defs>
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#020202" />
            <stop offset="50%" stopColor="#050510" />
            <stop offset="100%" stopColor="#080816" />
        </linearGradient>

        <linearGradient id={`${id}-accent`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4338ca" /> {/* Tailwind Indigo 700 */}
            <stop offset="50%" stopColor="#818cf8" /> {/* Tailwind Indigo 400 (Primary) */}
            <stop offset="100%" stopColor="#c7d2fe" /> {/* Tailwind Indigo 200 */}
        </linearGradient>

        <linearGradient id={`${id}-muted`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#171717" />
            <stop offset="100%" stopColor="#262626" />
        </linearGradient>

        {/* Deep inner glow filter */}
        <filter id="glow-heavy" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <filter id="glow-light" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Soft Drop Shadow for Depth */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.8" />
        </filter>

        {/* Noise overlay pattern */}
        <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0" />
        </filter>

        {/* Abstract Particle Grid */}
        <pattern id={`${id}-grid`} width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#818cf8" opacity="0.15" />
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.03" />
        </pattern>
    </defs>
);

const SVGContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <svg viewBox="0 0 900 600" className={className} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <PremiumDefs id="global" />
        {/* Background layer with noise texture */}
        <rect width="100%" height="100%" fill="url(#global-bg)" />
        <rect width="100%" height="100%" fill="url(#global-grid)" />
        {/* Subtle radial light in center */}
        <radialGradient id="centerLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
        </radialGradient>
        <rect width="100%" height="100%" fill="url(#centerLight)" />
        <rect width="100%" height="100%" filter="url(#noise)" style={{ mixBlendMode: 'overlay', opacity: 0.5 }} pointerEvents="none" />

        {/* Render primary animation content */}
        {children}
    </svg>
);


// ---------------------------------------------------------------------------
// 9ANON AI - Legal AI Chatbot
// ---------------------------------------------------------------------------
/**
 * Displays the image for the 9anon AI platform.
 * 
 * @param {Object} props - Component properties
 * @param {string} [props.className] - Optional CSS classes for styling
 * @returns {JSX.Element} The image component
 */
export const AnonAIAnimation = ({ className }: { className?: string }) => (
    <img
        src="/9anonai.png"
        alt="9anon AI Platform"
        className={className}
        style={{ objectFit: 'cover' }}
    />
);

// ---------------------------------------------------------------------------
// MOHIBI MATHS - LMS Platform
// ---------------------------------------------------------------------------
/**
 * Displays the image for the MohibiMaths LMS platform.
 * 
 * @param {Object} props - Component properties
 * @param {string} [props.className] - Optional CSS classes for styling
 * @returns {JSX.Element} The image component
 */
export const MohibiMathsAnimation = ({ className }: { className?: string }) => (
    <img
        src="/mohibimaths.png"
        alt="Mohibi Maths LMS Platform"
        className={className}
        style={{ objectFit: 'cover' }}
    />
);

// ---------------------------------------------------------------------------
// EL PATIO - High conversion Landing Page
// ---------------------------------------------------------------------------
/**
 * Displays the image for the El Patio landing page.
 * 
 * @param {Object} props - Component properties
 * @param {string} [props.className] - Optional CSS classes for styling
 * @returns {JSX.Element} The image component
 */
export const ElPatioAnimation = ({ className }: { className?: string }) => (
    <img
        src="/elpatio.png"
        alt="El Patio Landing Page"
        className={className}
        style={{ objectFit: 'cover' }}
    />
);

// ---------------------------------------------------------------------------
// SCOLINK - Educational Management
// ---------------------------------------------------------------------------
/**
 * Displays the image for the Scolink educational management platform.
 * 
 * @param {Object} props - Component properties
 * @param {string} [props.className] - Optional CSS classes for styling
 * @returns {JSX.Element} The image component
 */
export const ScolinkAnimation = ({ className }: { className?: string }) => (
    <img
        src="/scolink.png"
        alt="Scolink Educational Management"
        className={className}
        style={{ objectFit: 'cover' }}
    />
);

// ---------------------------------------------------------------------------
// DOBE - Unified AI Platform
// ---------------------------------------------------------------------------
/**
 * Displays the image for the Dobe unified AI workspace.
 * 
 * @param {Object} props - Component properties
 * @param {string} [props.className] - Optional CSS classes for styling
 * @returns {JSX.Element} The image component
 */
export const DobeAnimation = ({ className }: { className?: string }) => (
    <img
        src="/dobe.png"
        alt="Dobe Unified AI Platform"
        className={className}
        style={{ objectFit: 'cover' }}
    />
);

// ---------------------------------------------------------------------------
// ARTICLE MASTER - Video to Blog Tool
// ---------------------------------------------------------------------------
/**
 * Displays the image for the Article Master video-to-blog tool.
 * 
 * @param {Object} props - Component properties
 * @param {string} [props.className] - Optional CSS classes for styling
 * @returns {JSX.Element} The image component
 */
export const ArticleMasterAnimation = ({ className }: { className?: string }) => (
    <img
        src="/articlemaster.png"
        alt="Article Master Video to Blog Tool"
        className={className}
        style={{ objectFit: 'cover' }}
    />
);

// ---------------------------------------------------------------------------
// LE4N - Context-Aware PDF Student AI (Theme: Deep scanning layers, semantic highlighting, floating docs)
// ---------------------------------------------------------------------------
export const Le4nAnimation = ({ className }: { className?: string }) => (
    <SVGContainer className={className}>
        <g transform="translate(450, 300)">
            {/* Stacked floating 3D document planes */}
            <g transform="translate(0, 40)">
                <path d="M-150 -60 L100 -120 L150 -60 L-100 0 Z" fill="url(#global-muted)" stroke="#818cf8" strokeWidth="1" opacity="0.4">
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,20; 0,0" dur="5s" repeatCount="indefinite" />
                </path>

                <path d="M-150 -100 L100 -160 L150 -100 L-100 -40 Z" fill="url(#global-muted)" stroke="#ffffff" strokeWidth="2" opacity="0.9" filter="url(#shadow)">
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,10; 0,0" dur="6s" repeatCount="indefinite" />
                </path>

                {/* Extracted Neural Highlights pulling up directly from the document plane */}
                <g>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,-30; 0,0" dur="4s" repeatCount="indefinite" />
                    {/* Glowing highlight patches on the document */}
                    <path d="M-50 -120 L20 -135 L40 -115 L-30 -100 Z" fill="url(#global-accent)" filter="url(#glow-heavy)" opacity="0.7">
                        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M50 -95 L110 -110 L120 -90 L60 -75 Z" fill="#ffffff" filter="url(#glow-light)" opacity="0.5" />

                    {/* Neurons rising from the highlighted text */}
                    <circle cx="-10" cy="-150" r="10" fill="url(#global-accent)" filter="url(#glow-light)" />
                    <line x1="-15" y1="-120" x2="-10" y2="-150" stroke="#818cf8" strokeWidth="2" strokeDasharray="4 4" />

                    <circle cx="85" cy="-130" r="6" fill="#ffffff" filter="url(#glow-light)" />
                    <line x1="85" y1="-100" x2="85" y2="-130" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" />

                    {/* Connection arch bridging contexts */}
                    <path d="M-10 -150 Q40 -180 85 -130" fill="none" stroke="url(#global-accent)" strokeWidth="3" opacity="0.6">
                        <animate attributeName="stroke-dasharray" values="0 100; 100 0" dur="3s" repeatCount="indefinite" />
                    </path>
                </g>
            </g>

            {/* Background scanning radar / AI eye */}
            <g>
                <circle cx="0" cy="-100" r="140" fill="none" stroke="#4338ca" strokeWidth="1" opacity="0.2" />
                <path d="M0 -240 A140 140 0 0 1 140 -100 L0 -100 Z" fill="url(#global-accent)" opacity="0.05">
                    <animateTransform attributeName="transform" type="rotate" from="0 0 -100" to="360 0 -100" dur="8s" repeatCount="indefinite" />
                </path>
            </g>
        </g>
    </SVGContainer>
);
