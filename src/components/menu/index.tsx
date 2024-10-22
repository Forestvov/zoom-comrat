import MenuList from './menu-list';
import MenuHeader from './menu-header';
import MenuSelector from './menu-selector';

import s from './menu.module.scss';

const Menu = () => {
    return (
        <div className={s.menu}>
            <MenuHeader />
            <MenuSelector />
            <MenuList />
        </div>
    );
};

export default Menu;
