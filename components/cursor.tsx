"use client"

import React, { useEffect, useState } from 'react';

interface MousePosition {
    x: number;
    y: number;
}

interface CirclePosition {
    x: number;
    y: number;
}

const Cursor: React.FC = () => {
    const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
    const [previousMouse, setPreviousMouse] = useState<MousePosition>({ x: 0, y: 0 });
    const [circle, setCircle] = useState<CirclePosition>({ x: 0, y: 0 });
    const [transform, setTransform] = useState<string>('');

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const speed = 0.17;
    let currentScale = 0;
    let currentAngle = 0;

    let tick: () => void;
    tick = () => {
        setCircle(prevCircle => ({
            x: prevCircle.x + (mouse.x - prevCircle.x) * speed,
            y: prevCircle.y + (mouse.y - prevCircle.y) * speed
        }));

        const deltaMouseX = mouse.x - previousMouse.x;
        const deltaMouseY = mouse.y - previousMouse.y;
        setPreviousMouse({x: mouse.x, y: mouse.y});

        const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
        const scaleValue = (mouseVelocity / 150) * 0.5;
        currentScale += (scaleValue - currentScale) * speed;

        const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
        if (mouseVelocity > 20) {
            currentAngle = angle;
        }

        const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;
        const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
        const rotateTransform = `rotate(${currentAngle}deg)`;
        setTransform(`${translateTransform} ${rotateTransform} ${scaleTransform}`);

        window.requestAnimationFrame(tick);
    };

    useEffect(() => {
        window.requestAnimationFrame(tick);
    }, [tick]);

    return (
        <div
            className="fixed z-30 h-[40px] w-[40px] border border-white rounded-full pointer-events-none top-[-15px] left-[-20px]"
            style={{ transform: transform }}
        ></div>
    );
};

export default Cursor;