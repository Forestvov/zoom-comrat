import { FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { animated, useSpring } from 'react-spring';

import s from './menu-header.module.scss';

import Logo from 'assets/menu-logo.svg?react';
import Arrow from 'assets/drop-arrow.svg?react';

import { useGetLangs } from 'api/langs';
import { getCookie, setCookie } from 'helpers/cookie';

import useOnOutsideClick from 'hooks/useOnOutsideClick';

interface Props {
    setLang: (id: number) => void;
}

const MenuHeader: FC<Props> = ({ setLang }) => {
    const [langId, setLangId] = useState<number>(1);
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef(null);

    useOnOutsideClick(ref, () => setIsOpen(false));

    const { opacity } = useSpring({
        to: { opacity: isOpen ? 1 : 0 },
        from: { opacity: 0 },
    });

    const { langs } = useGetLangs();

    useEffect(() => {
        const langId = getCookie('langId');

        if (langId) {
            setLangId(Number(langId));
        }
    }, []);

    const currentLang = langs.find((lang) => lang.id === langId)?.value ?? '';

    const selectLang = (langId: number) => {
        setIsOpen(false);
        setLangId(langId);
        setLang(langId);
        setCookie('langId', langId.toString());
    };

    return (
        <div className={s.wrapper}>
            <Logo />

            <div className={s.drop} ref={ref}>
                <div className={clsx(s.lang, isOpen && s.active)} onClick={() => setIsOpen(true)}>
                    {currentLang.slice(0, 2)}
                    {<Arrow />}
                </div>
                <animated.div className={s.list} style={{ opacity, pointerEvents: isOpen ? 'auto' : 'none' }}>
                    {langs.map((lang) => (
                        <button onClick={() => selectLang(lang.id)} key={lang.id}>
                            {lang.value}
                        </button>
                    ))}
                </animated.div>
            </div>

            <button className={s.burger}>
                <div />
                <div />
            </button>
        </div>
    );
};

export default MenuHeader;
