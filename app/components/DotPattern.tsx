'use client';

import { useEffect, useRef } from 'react';
export function DotPattern() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = 106 * window.devicePixelRatio;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Colors array (using Tailwind config colors)
        const colors = [
            '#2a593f',
            // forest-700
            '#436552',
            // forest-500
            '#77735c',
            // sand-800
            '#e0d4be',
            // sand-300
            '#689e80', // forest-200
        ];

        // Draw static dots
        const drawDots = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const dotSize = 3 * window.devicePixelRatio;
            const spacing = 16 * window.devicePixelRatio;
            const rows = 8;
            const columns = Math.floor(canvas.width / spacing);
            for (let row = 0; row < rows; row++) {
                const baseY = canvas.height - row * spacing * 1.2;
                for (let col = 0; col < columns; col++) {
                    const x = (col + 1) * spacing;
                    const y = baseY;
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    ctx.beginPath();
                    ctx.arc(x, y, dotSize, 0, Math.PI * 2);
                    ctx.fillStyle = randomColor;
                    ctx.fill();
                }
            }
        };
        drawDots();
        window.addEventListener('resize', drawDots);
        return () => {
            window.removeEventListener('resize', setCanvasSize);
            window.removeEventListener('resize', drawDots);
        };
    }, []);
    return (
        <canvas
            ref={canvasRef}
            className="w-full h-[106px]"
            style={{
                opacity: 0.6,
            }}
        />
    );
}
