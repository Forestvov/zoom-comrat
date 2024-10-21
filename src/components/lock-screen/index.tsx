import React, { useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import s from './lock-screen.module.scss';

import Logo from '../../assets/start-logo.svg?react';
import CircleArrow from '../../assets/circle-arrow.svg?react';

const SwipeableComponent: React.FC = () => {
    const [offset, setOffset] = useState<number>(0);
    const touchStartY = useRef<number | null>(null);
    const swipeThreshold = window.innerHeight * 0.3;

    const animation = useSpring({
        to: { transform: `translateY(${offset}px)` },
        config: { duration: 300 },
    });

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStartY.current !== null) {
            const touch = e.touches[0];
            setOffset(touch.clientY - touchStartY.current);
        }
    };

    const hideLockScreen = () => setOffset(-window.innerHeight);

    const handleTouchEnd = () => {
        if (Math.abs(offset) > swipeThreshold) {
            hideLockScreen();
        } else {
            setOffset(0);
        }
        touchStartY.current = null;
    };

    return (
        <animated.div
            className={s.scroll}
            style={animation}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <Logo />
                </div>
                <div className={s.bottom}>
                    <h1 className={s.title}>Открыть меню</h1>
                    <p className={s.text}>Здесь начинается настоящий релакс</p>
                    <button onClick={hideLockScreen}>
                        <CircleArrow />
                    </button>
                    <div className={s.handler} />
                </div>
            </div>
        </animated.div>
    );
};

export default SwipeableComponent;
