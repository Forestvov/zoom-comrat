import { FC } from 'react';
import clsx from 'clsx';

import s from './menu-list.module.scss';
import { ICategory, IItem } from 'interfaces/menu';

interface Props {
    categories: ICategory[];
    items: IItem[];
    currentCategory: number;
    selectCategoryId: (id: number) => void;
    currentCategoryName: string;
}

const MenuList: FC<Props> = ({ categories, items, currentCategory, selectCategoryId, currentCategoryName }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.tabs}>
                {categories.map((category) => (
                    <button
                        className={clsx(category.menuCategoryId === currentCategory && s.current)}
                        onClick={() => selectCategoryId(category.menuCategoryId)}
                        key={category.menuCategoryId}
                    >
                        {category.value}
                    </button>
                ))}
            </div>
            <div className={s.title}>{currentCategoryName}</div>
            <ul className={s.list}>
                {items.map((item) => (
                    <li key={item.menuItemId}>
                        <div className={s.item}>
                            <div className={s.name}>{item.menuItemLanguageValue}</div>
                            <div className={s.del} />
                            <div className={s.values}>
                                <div className={s.value}>
                                    {item.size} {item.menuItemSizeValue}
                                </div>
                                <div className={s.price}>{item.price} mdl</div>
                            </div>
                        </div>
                        {item.descriptions && <div className={s.description}>{item.descriptions}</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuList;
