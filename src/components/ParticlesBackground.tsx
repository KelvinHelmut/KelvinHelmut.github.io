import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        const canvas = canvasEl;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const TECH_COLORS = [
            '59, 130, 246',  // Blue
            '139, 92, 246', // Violet
            '6, 182, 212',  // Cyan
            '16, 185, 129', // Emerald
        ];

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            char: string | null;
            color: string;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.char = Math.random() > 0.8 ? (Math.random() > 0.5 ? '1' : '0') : null;
                this.size = this.char ? 10 : Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.4 + 0.2;
                this.color = TECH_COLORS[Math.floor(Math.random() * TECH_COLORS.length)] || '59, 130, 246';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                if (!ctx) return;
                const isDark = document.documentElement.classList.contains('dark');

                // Adjust vibrant colors based on theme
                const finalOpacity = isDark ? this.opacity : this.opacity * 0.7;
                const colorStr = `rgba(${this.color}, ${finalOpacity})`;

                ctx.shadowBlur = isDark ? 10 : 0;
                ctx.shadowColor = `rgba(${this.color}, 0.5)`;

                if (this.char) {
                    ctx.font = `${this.size}px monospace`;
                    ctx.fillStyle = colorStr;
                    ctx.fillText(this.char, this.x, this.y);
                } else {
                    ctx.fillStyle = colorStr;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.shadowBlur = 0; // Reset for performance
            }
        }

        const init = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 10000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            if (!ctx) return;
            const maxDistance = 150;

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];
                if (!p1) continue;

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    if (!p2) continue;

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.15;
                        const pulse = Math.sin(Date.now() * 0.002 + i) * 0.05 + 0.1;

                        // Use the color of the first particle for the connection
                        ctx.strokeStyle = `rgba(${p1.color}, ${opacity + pulse})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                const mDx = p1.x - mousePos.current.x;
                const mDy = p1.y - mousePos.current.y;
                const mDistance = Math.sqrt(mDx * mDx + mDy * mDy);
                if (mDistance < 200) {
                    const opacity = (1 - mDistance / 200) * 0.4;
                    ctx.strokeStyle = `rgba(${p1.color}, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mousePos.current.x, mousePos.current.y);
                    ctx.stroke();
                }
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                if (p) {
                    p.update();
                    p.draw();
                }
            }
            drawLines();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mousePos.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-30 transition-opacity duration-1000"
            id="particles-canvas"
        />
    );
}
