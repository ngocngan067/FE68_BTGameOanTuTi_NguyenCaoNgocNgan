import * as OTTtype from '../constants/GameOanTuTiConstants';
import { defaultSelected, listResult, listSelect } from '../OTTData';

const initialState = {
    soBanThang: 0,
    soBanChoi: 0,
    computerPick: defaultSelected,
    playerPick: defaultSelected,
    result: listResult[0],
};

// Math.random() * (b - a) + a;
const getRandomOTT = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const OTTResult = (a, b) => {
    if (a === b) {
        return 'DRAW';
    } else if (a === b - 1 || a === b + 2) {
        return 'LOSE';
    } else {
        return 'WIN';
    }
};

const gameOanTuTiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case OTTtype.SELECT_OTT:
            let isFind = listSelect.find((item) => item.id === payload);
            state.result = listResult[0];
            state.computerPick = defaultSelected;
            state.playerPick = isFind;
            break;

        case OTTtype.PLAY_OTT:
            state.error = state.playerPick.id === 0 ? 'Please choose before you play!!' : '';

            if (state.playerPick.id !== 0) {
                const idRandom = getRandomOTT(1, 3);
                let Find = listSelect.find((item) => item.id === idRandom);
                state.computerPick = Find;
                const resultType = OTTResult(state.playerPick.id, state.computerPick.id);
                state.soBanChoi += 1;
                if (resultType === 'WIN') {
                    state.soBanThang += 1;
                }
                state.notification = resultType;
                state.result = listResult.find((item) => item.name === resultType);
            }

            break;

        default:
            return {...state};
    }
    return { ...state };
};

export default gameOanTuTiReducer;
