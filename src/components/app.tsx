import LockScreen from './lock-screen';
import Menu from './menu';
import { useEffect } from 'react';
import { getCookie, setCookie } from 'helpers/cookie';

const App = () => {
    useEffect(() => {
        const langId = getCookie('langId');

        if (!langId) {
            setCookie('langId', '1');
        }
    }, []);

    return (
        <>
            <LockScreen />
            <Menu />
        </>
    );
};

export default App;
