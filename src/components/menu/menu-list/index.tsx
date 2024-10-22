import clsx from 'clsx';

import s from './menu-list.module.scss';

const MenuList = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.tabs}>
                <button className={clsx(s.current)}>СУШИ</button>
                <button>ПИЦЦА</button>
                <button>ОРЕШКИ</button>
                <button>ДЕСЕРТЫ</button>
            </div>
            <div className={s.title}>Закуски</div>
            <ul className={s.list}>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Фисташки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Фисташки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Орешки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                    <div className={s.description}>в глазури из ликера и специй</div>
                </li>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Фисташки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Фисташки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Орешки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                    <div className={s.description}>в глазури из ликера и специй</div>
                </li>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Фисташки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Фисташки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.item}>
                        <div className={s.name}>Орешки</div>
                        <div className={s.del} />
                        <div className={s.values}>
                            <div className={s.value}>50 г</div>
                            <div className={s.price}>120 mdl</div>
                        </div>
                    </div>
                    <div className={s.description}>в глазури из ликера и специй</div>
                </li>
            </ul>
        </div>
    );
};

export default MenuList;
