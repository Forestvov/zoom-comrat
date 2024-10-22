import { useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';

import s from './menu-selector.module.scss';

import Arrow from '../../../assets/drop-arrow.svg?react';
import useOnOutsideClick from '../../../hooks/useOnOutsideClick.ts';

const MenuSelector = () => {
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null);

    useOnOutsideClick(ref, () => setIsOpen(false));

    const animation = useSpring({
        to: { opacity: isOpen ? 1 : 0 },
    });

    return (
        <div className={s.wrapper}>
            <div className={s.drop} ref={ref}>
                <div className={s.head} onClick={() => setIsOpen(true)}>
                    <span>ЗАКУСКИ</span>
                    <Arrow />
                </div>
                <animated.div className={s.list} style={animation}>
                    <button>Чаши и миксы</button>
                    <button>БАР</button>
                    <button>ИГРЫ</button>
                </animated.div>
            </div>
            <p className={s.text}>*количество представленных позиций и цены zoom могут отличаться в меньшую стороную</p>
        </div>
    );
};

export default MenuSelector;
