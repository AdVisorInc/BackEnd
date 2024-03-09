import 'dotenv/config';

const getBack4AppKeys = () => {
    const { BACK_4_APP_APP_ID, BACK_4_APP_SECRET_KEY } = process.env;

    return { BACK_4_APP_APP_ID, BACK_4_APP_SECRET_KEY };
};

export { getBack4AppKeys };
