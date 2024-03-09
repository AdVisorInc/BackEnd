import { sessionQuery } from '.';

// const createSession = async () => {
//     const newSession = {
//         is_active: false,
//     };

//     const obj = await sessionObject().save(newSession);

//     return obj.toJSON();
// };

const getSession = async sessionId => {
    const sessionObject = await sessionQuery().get(sessionId);

    return sessionObject.toJSON();
};

export { getSession };
