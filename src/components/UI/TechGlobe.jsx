import { useMemo, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';
import { CONFIG } from '../../data/config';

const Word = ({ children, position, isDarkMode, onHover, onLeave, isHovered }) => {
    const ref = useRef(null);
    const [active, setActive] = useState(false);

    // Generate a stable random color for this word
    const color = useMemo(() => {
        // Cool Spectrum Palette: Cyan -> Sky -> Blue -> Indigo -> Violet
        const darkPalette = ["#2d3168ff", "#38bdf8", "#60a5fa", "#818cf8", "#a78bfa"];
        const lightPalette = ["#0891b2", "#0284c7", "#2563eb", "#4f46e5", "#7c3aed"];
        const palette = isDarkMode ? darkPalette : lightPalette;
        return palette[Math.floor(Math.random() * palette.length)];
    }, [isDarkMode]);

    useFrame(({ camera }) => {
        if (ref.current) {
            // Make text always face the camera correctly
            ref.current.lookAt(camera.position);

            // Auto-highlight logic
            const worldPos = new THREE.Vector3();
            ref.current.getWorldPosition(worldPos);
            // Threshold for "front"
            const isActive = worldPos.z > 12;
            if (active !== isActive) setActive(isActive);
        }
    });

    const isHighlighted = isHovered || active;

    // Default to Cool Grey, light up with specific color on hover
    const baseColor = isDarkMode ? "#94a3b8" : "#64748b"; // Slate-400 (Dark) / Slate-500 (Light)
    const displayColor = isHighlighted ? color : baseColor;

    // Performance Optimization: Use scale instead of fontSize to avoid geometry regeneration
    const scale = isHighlighted ? 1.4 : 1;

    return (
        <Text
            ref={ref}
            position={position}
            fontSize={1.8} // Constant font size
            fontWeight={isHighlighted ? 800 : 500} // Medium weight normally, Bold on highlight
            color={displayColor}
            scale={[scale, scale, scale]} // Animate scale
            onPointerOver={() => {
                document.body.style.cursor = 'pointer';
                onHover();
            }}
            onPointerOut={() => {
                document.body.style.cursor = 'auto';
                onLeave();
            }}
            anchorX="center"
            anchorY="middle"
        >
            {children}
        </Text>
    );
};

Word.propTypes = {
    children: PropTypes.string.isRequired,
    position: PropTypes.instanceOf(THREE.Vector3).isRequired,
    isDarkMode: PropTypes.bool.isRequired,
    onHover: PropTypes.func.isRequired,
    onLeave: PropTypes.func.isRequired,
    isHovered: PropTypes.bool.isRequired,
};

const Cloud = ({ radius = 20, isDarkMode }) => {
    const groupRef = useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [autoSelectedIndices, setAutoSelectedIndices] = useState([]);

    // Auto-Selection Timer
    useEffect(() => {
        // Only auto-select if user is NOT hovering
        if (hoveredIndex !== null) {
            setAutoSelectedIndices([]);
            return;
        }

        const interval = setInterval(() => {
            const count = Object.values(CONFIG.skills).flat().length;
            // Select 3 random words
            const indices = [];
            for (let i = 0; i < 5; i++) {
                indices.push(Math.floor(Math.random() * count));
            }
            setAutoSelectedIndices(indices);
        }, 800); // Change every 800ms (High Speed)

        return () => clearInterval(interval);
    }, [hoveredIndex]);

    // Determine if a specific index is active (Hover takes precedence)
    const isIndexActive = (index) => {
        if (hoveredIndex !== null) return hoveredIndex === index;
        return autoSelectedIndices.includes(index);
    };

    // Randomized Rotation (Increased Speed)
    useFrame((state) => {
        if (groupRef.current) {
            const t = state.clock.getElapsedTime();
            // Increased speed: 0.1 -> 0.15, 0.15 -> 0.2
            groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.2 + t * 0.2;
            groupRef.current.rotation.x = Math.cos(t * 0.2) * 0.2;
        }
    });

    const { words, connections, activeConnectionIndices } = useMemo(() => {
        const skills = Object.values(CONFIG.skills).flat();
        const count = skills.length;
        const tempWords = [];
        const phi = Math.PI * (3 - Math.sqrt(5));

        // 1. Generate Word Positions
        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radiusAtY;
            const z = Math.sin(theta) * radiusAtY;
            tempWords.push([
                new THREE.Vector3(x * radius, y * radius, z * radius),
                skills[i]
            ]);
        }

        // 2. Generate Connections (Constellation)
        // Connect each point to its 2 nearest neighbors
        // We store indices [i, j] to filter them later
        const tempConnections = []; // Array of Vector3 pairs for rendering
        const tempIndices = []; // Array of [i, j] pairs for filtering

        tempWords.forEach(([pos1], i) => {
            let nearest = [];
            for (let j = 0; j < count; j++) {
                if (i === j) continue;
                const dist = pos1.distanceTo(tempWords[j][0]);
                nearest.push({ dist, pos: tempWords[j][0], index: j });
            }
            nearest.sort((a, b) => a.dist - b.dist);

            // Connect to closest 2
            if (nearest[0]) {
                tempConnections.push([pos1, nearest[0].pos]);
                tempIndices.push([i, nearest[0].index]);
            }
            if (nearest[1]) {
                tempConnections.push([pos1, nearest[1].pos]);
                tempIndices.push([i, nearest[1].index]);
            }
        });

        return { words: tempWords, connections: tempConnections, activeConnectionIndices: tempIndices };
    }, [radius]);

    // Filter active lines based on active indices
    const activeLines = useMemo(() => {
        const activeSet = new Set(hoveredIndex !== null ? [hoveredIndex] : autoSelectedIndices);
        if (activeSet.size === 0) return [];

        return activeConnectionIndices
            .filter(([i, j]) => activeSet.has(i) || activeSet.has(j))
            .map(([i, j]) => [words[i][0], words[j][0]])
            .flat();
    }, [hoveredIndex, autoSelectedIndices, activeConnectionIndices, words]);

    // Increased opacity for Dark Mode visibility
    // Dark Mode: White lines with 0.4 opacity (much more visible)
    // Light Mode: Black lines with 0.1 opacity
    const lineColor = isDarkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.1)";
    const activeLineColor = "#38bdf8"; // Sky Blue for active connections

    return (
        <group ref={groupRef}>
            {/* Words */}
            {words.map(([pos, word], index) => (
                <Word
                    key={index}
                    position={pos}
                    isDarkMode={isDarkMode}
                    onHover={() => setHoveredIndex(index)}
                    onLeave={() => setHoveredIndex(null)}
                    isHovered={isIndexActive(index)}
                >
                    {word}
                </Word>
            ))}

            {/* Base Constellation Lines */}
            <Line
                points={connections.flat()}
                color={lineColor}
                lineWidth={0.5}
                segments
                transparent
                opacity={isDarkMode ? 0.4 : 0.1}
            />

            {/* Active Connections (Highlight) */}
            {activeLines.length > 0 && (
                <Line
                    points={activeLines}
                    color={activeLineColor}
                    lineWidth={1.5}
                    segments
                    transparent
                    opacity={1}
                />
            )}
        </group>
    );
};

Cloud.propTypes = {
    radius: PropTypes.number,
    isDarkMode: PropTypes.bool.isRequired,
};

const TechGlobe = () => {
    // Initialize state directly from DOM to prevent flash of wrong theme
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return true; // Default to dark
    });

    useEffect(() => {
        const checkTheme = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        // Initial check
        checkTheme();

        // Observer for class changes on html element
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full h-[500px] lg:h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 40], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} />
                <Cloud radius={12} isDarkMode={isDarkMode} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};

export default TechGlobe;
