import { useEffect, useState } from 'react';

import MenuSelector from './menu-selector';
import MenuList from './menu-list';
import MenuHeader from './menu-header';

import { useGetCategoriesAndItems } from 'api/menu';

import s from './menu.module.scss';
import { getCookie } from 'helpers/cookie';

const Menu = () => {
    const [langId, setLangId] = useState<number | null>(null);
    const [currentCategory, setCurrentCategory] = useState<null | number>(null);

    const { categories, currentCategoryId, items, currentCategoryName } = useGetCategoriesAndItems(
        langId,
        currentCategory
    );

    useEffect(() => {
        const id = getCookie('langId');

        if (id) {
            setLangId(Number(id));
        } else {
            setLangId(1);
        }
    }, []);

    const changeLang = (idLage: number) => {
        setLangId(idLage);
        setCurrentCategory(null);
    };

    return (
        <div className={s.menu} id="menu">
            <MenuHeader setLang={changeLang} />
            <MenuSelector currentCategoryName={currentCategoryName} />
            <MenuList
                currentCategoryName={currentCategoryName}
                categories={categories}
                currentCategory={currentCategory ?? currentCategoryId}
                items={items}
                selectCategoryId={setCurrentCategory}
            />
        </div>
    );
};

export default Menu;
