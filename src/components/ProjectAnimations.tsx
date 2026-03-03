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
// SCOLINK - Educational Management (Theme: Networks, nodes, connectivity, organization)
// ---------------------------------------------------------------------------
export const ScolinkAnimation = ({ className }: { className?: string }) => (
    <SVGContainer className={className}>
        <g transform="translate(450, 300)">
            {/* Hexagonal grid connecting operations */}
            <g stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" fill="none">
                <path d="M0 -150 L130 -75 L130 75 L0 150 L-130 75 L-130 -75 Z" />
                <path d="M0 0 L0 -150 M0 0 L130 -75 M0 0 L130 75 M0 0 L0 150 M0 0 L-130 75 M0 0 L-130 -75" strokeDasharray="5 5" />
            </g>

            {/* Pulsing Nodes */}
            {[
                { x: 0, y: -150, r: 12, s: 0 },
                { x: 130, y: -75, r: 8, s: 1 },
                { x: 130, y: 75, r: 16, s: 2 },
                { x: 0, y: 150, r: 10, s: 3 },
                { x: -130, y: 75, r: 14, s: 4 },
                { x: -130, y: -75, r: 9, s: 5 },
            ].map((node, i) => (
                <g key={i}>
                    {/* Connection animated packet */}
                    <circle cx="0" cy="0" r="3" fill="#ffffff" filter="url(#glow-heavy)">
                        <animateTransform attributeName="transform" type="translate" values={`0,0; ${node.x},${node.y}`} dur="2s" begin={`${node.s}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0" dur="2s" begin={`${node.s}s`} repeatCount="indefinite" />
                    </circle>
                    {/* Node points */}
                    <circle cx={node.x} cy={node.y} r={node.r} fill={i % 2 === 0 ? "url(#global-accent)" : "url(#global-muted)"} stroke="#818cf8" strokeWidth="2" filter="url(#shadow)">
                        <animate attributeName="r" values={`${node.r};${node.r + 4};${node.r}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                    </circle>
                </g>
            ))}

            {/* Core Nexus */}
            <circle cx="0" cy="0" r="35" fill="url(#global-muted)" stroke="#ffffff" strokeWidth="3" filter="url(#glow-heavy)" />
            <circle cx="0" cy="0" r="25" fill="url(#global-accent)" />
            <polygon points="0,-10 10,5 -10,5" fill="#ffffff">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
            </polygon>
        </g>
    </SVGContainer>
);

// ---------------------------------------------------------------------------
// DOBE - Unified AI Platform (Theme: Infinite portal, portals merging into one, cosmos)
// ---------------------------------------------------------------------------
export const DobeAnimation = ({ className }: { className?: string }) => (
    <SVGContainer className={className}>
        <g transform="translate(450, 300)">
            {/* The infinite portal abyss */}
            <g>
                {[...Array(6)].map((_, i) => (
                    <ellipse key={i} cx="0" cy="0" rx={240 - i * 40} ry={120 - i * 20} fill="none" stroke="url(#global-accent)" strokeWidth={1 + i * 0.5} opacity={1 - i * 0.15}>
                        <animateTransform attributeName="transform" type="rotate" values={`${i * 30}; ${i * 30 + 360}`} dur={`${20 + i * 5}s`} repeatCount="indefinite" />
                    </ellipse>
                ))}
            </g>

            {/* Intense gravity well light */}
            <circle cx="0" cy="0" r="50" fill="url(#global-accent)" filter="url(#glow-heavy)" opacity="0.3">
                <animate attributeName="r" values="40;60;40" dur="3s" repeatCount="indefinite" />
            </circle>

            {/* Orbiting disparate models pulling together */}
            <g>
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
                <circle cx="160" cy="0" r="15" fill="url(#global-muted)" stroke="#ffffff" strokeWidth="2" filter="url(#shadow)" />
                <path d="M160 0 L80 0" stroke="#818cf8" strokeWidth="2" strokeDasharray="4">
                    <animate attributeName="stroke-dashoffset" from="8" to="0" dur="0.5s" repeatCount="indefinite" />
                </path>
            </g>
            <g>
                <animateTransform attributeName="transform" type="rotate" from="120" to="480" dur="14s" repeatCount="indefinite" />
                <circle cx="130" cy="0" r="10" fill="#4338ca" filter="url(#glow-light)" />
                <path d="M130 0 L60 0" stroke="#818cf8" strokeWidth="1" strokeDasharray="2" />
            </g>
            <g>
                <animateTransform attributeName="transform" type="rotate" from="240" to="600" dur="8s" repeatCount="indefinite" />
                <circle cx="190" cy="0" r="20" fill="transparent" stroke="#818cf8" strokeWidth="4" filter="url(#glow-light)" />
                <path d="M190 0 L70 0" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
            </g>

            {/* Converged Center Singularity */}
            <circle cx="0" cy="0" r="18" fill="#ffffff" filter="url(#glow-heavy)">
                <animate attributeName="r" values="16;22;16" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="8" fill="#000000" />
        </g>
    </SVGContainer>
);

// ---------------------------------------------------------------------------
// ARTICLE MASTER - Video to Blog Tool (Theme: Media timeline breaking down into lines of code/text)
// ---------------------------------------------------------------------------
export const ArticleMasterAnimation = ({ className }: { className?: string }) => (
    <SVGContainer className={className}>
        <g transform="translate(450, 300)">
            {/* Split UI layout simulating transformation left (video) to right (text) */}

            {/* Scanning Laser */}
            <line x1="-50" y1="-200" x2="-50" y2="200" stroke="#818cf8" strokeWidth="3" filter="url(#glow-heavy)" opacity="0.8">
                <animate attributeName="x1" values="-200;100;-200" dur="4s" repeatCount="indefinite" />
                <animate attributeName="x2" values="-200;100;-200" dur="4s" repeatCount="indefinite" />
            </line>

            {/* Source Video Blocks (Left side) */}
            <g>
                <rect x="-250" y="-80" width="120" height="160" rx="8" fill="url(#global-muted)" stroke="#4338ca" strokeWidth="2" filter="url(#shadow)" />
                {/* Play button */}
                <polygon points="-200,-15 -170,0 -200,15" fill="url(#global-accent)">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </polygon>
                {/* Video timeline strip */}
                <rect x="-250" y="-120" width="120" height="20" fill="url(#global-accent)" opacity="0.2" />
                <rect x="-250" y="-120" width="40" height="20" fill="#818cf8">
                    <animate attributeName="width" values="0;120;0" dur="6s" repeatCount="indefinite" />
                </rect>
            </g>

            {/* AI Generator Engine (Middle) */}
            <g>
                <circle cx="0" cy="0" r="40" fill="none" stroke="url(#global-accent)" strokeWidth="4" strokeDasharray="10 10">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
                </circle>
                <path d="M-15 -15 L15 15 M-15 15 L15 -15" stroke="#ffffff" strokeWidth="3" filter="url(#glow-light)" />
                {/* Processing data flows */}
                <path d="M-120 0 Q-60 50 0 0 T120 0" fill="none" stroke="#818cf8" strokeWidth="2" opacity="0.5" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                </path>
            </g>

            {/* Generated Text Lines (Right side) cascading into place */}
            <g>
                <rect x="130" y="-100" width="180" height="200" rx="4" fill="url(#global-muted)" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" filter="url(#shadow)" />
                {[
                    { y: -60, w: 140, o: 0.1 },
                    { y: -30, w: 160, o: 0.3 },
                    { y: 0, w: 100, o: 0.5 },
                    { y: 30, w: 150, o: 0.7 },
                    { y: 60, w: 90, o: 0.9 },
                ].map((line, i) => (
                    <g key={i}>
                        <rect x="150" y={line.y} width={line.w} height="6" rx="3" fill="#ffffff" opacity="0.2" />
                        <rect x="150" y={line.y} width={line.w} height="6" rx="3" fill="url(#global-accent)">
                            <animate attributeName="width" values={`0;${line.w}`} dur="2s" begin={`${line.o}s`} repeatCount="indefinite" fill="freeze" />
                            <animate attributeName="opacity" values="0;1;1" dur="4s" begin={`${line.o}s`} repeatCount="indefinite" />
                        </rect>
                    </g>
                ))}
            </g>
        </g>
    </SVGContainer>
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
