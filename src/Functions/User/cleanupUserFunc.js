import { TEST_SESSION_IDS, updateSession } from '../../Services';

const TEST_USER_SESSION_ID = TEST_SESSION_IDS.PLAYER1;

export const cleanupUserFunc = async () => {
    // No matter what, we want to set these values to reset this test session
    return await updateSession(TEST_USER_SESSION_ID, false, null);
};
