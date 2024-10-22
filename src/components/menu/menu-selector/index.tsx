import s from './menu-selector.module.scss';
import { FC } from 'react';

interface Props {
    currentCategoryName: string;
}

const MenuSelector: FC<Props> = ({ currentCategoryName }) => {
    // const [isOpen, setIsOpen] = useState(false);
    //
    // const ref = useRef(null);
    //
    // useOnOutsideClick(ref, () => setIsOpen(false));

    // const animation = useSpring({
    //     to: { opacity: isOpen ? 1 : 0 },
    //     from: { opacity: 0, pointEvents: 'none' },
    // });

    return (
        <div className={s.wrapper}>
            <div className={s.drop}>
                <div className={s.head}>
                    <span>{currentCategoryName}</span>
                    {/*<Arrow />*/}
                </div>
                {/*<animated.div className={s.list} style={animation}>*/}
                {/*    <button>Чаши и миксы</button>*/}
                {/*    <button>БАР</button>*/}
                {/*    <button>ИГРЫ</button>*/}
                {/*</animated.div>*/}
            </div>
            <p className={s.text}>*количество представленных позиций и цены zoom могут отличаться в меньшую стороную</p>
        </div>
    );
};

export default MenuSelector;
