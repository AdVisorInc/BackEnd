import { getBoard } from '../../../Services/Parse/Board';

const getOverviewFunc = async () => {
    // return await getSession(TEST_SESSION_IDS.PLAYER1);
    // return await updateSession(TEST_SESSION_IDS.PLAYER1, true);
    return await getBoard('fwucwj0zZv');
};

export { getOverviewFunc };
