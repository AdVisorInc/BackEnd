import Parse from 'parse/node';
import { getBack4AppKeys } from '../../utils/env';

const initParse = () => {
    const BACK_4_APP_KEYS = getBack4AppKeys();

    Parse.initialize(
        BACK_4_APP_KEYS.BACK_4_APP_APP_ID,
        BACK_4_APP_KEYS.BACK_4_APP_SECRET_KEY,
    );
    Parse.serverURL = 'https://parseapi.back4app.com/';
};

export { initParse };

export * from './Sessions';
