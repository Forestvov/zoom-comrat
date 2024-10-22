import s from './menu-header.module.scss';

import Logo from '../../../assets/menu-logo.svg?react';

const MenuHeader = () => {
    return (
        <div className={s.wrapper}>
            <Logo />
            <div className={s.lang}>ru</div>
            <button className={s.burger}>
                <div />
                <div />
            </button>
        </div>
    );
};

export default MenuHeader;
