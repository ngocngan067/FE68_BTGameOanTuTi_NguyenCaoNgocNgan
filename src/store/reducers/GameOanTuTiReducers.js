import * as OTTtype from '../constants/GameOanTuTiConstants'

const listOTT = [
    { id: 0, image: './image/dauhoi.png' },
    { id: 1, image: './image/keo.png' },
    { id: 2, image: './image/bua.png' },
    { id: 3, image: './image/bao.png' },
];

const initialState = {
    notification: "I'm iron man, I love you 3000!!",
    soBanThang: 0,
    soBanChoi: 0,
    computerPick: listOTT[0],
    playerPick: listOTT[0],

}

// Math.random() * (b - a) + a;
const getRandomOTT = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const OTTResult = (a, b) => {
    if (a === b) {
        return 'DRAW';
    } else if (a === b - 1 || a === b + 2) {
        return 'LOSE';
    } else {
        return 'WIN';
    }
}


const gameOanTuTiReducer = (state = initialState, { type, payload }) => {
    // const { type, payload } = action;
    switch (type) {
        case OTTtype.SELECT_OTT:
            let isFind = listOTT.find((item) => item.id === payload);
            state.notification = "I'm iron man, I love you 3000!!"
            state.computerPick = listOTT[0];
            state.playerPick = isFind;
            break;

        case OTTtype.PLAY_OTT:
            if (state.playerPick.id === 0) {
                // document.getElementById('loi').play();
                alert("Please choose before you play!");
                // swal("Oops!", "Please choose before you play!!", "warning");
                break;
            }
            const idRandom = getRandomOTT(1, 3);
            let Find = listOTT.find((item) => item.id === idRandom);
            state.computerPick = Find;
            const result = OTTResult(state.playerPick.id, state.computerPick.id)
            state.soBanChoi += 1;
            if (result == 'WIN') {
                state.soBanThang += 1;
                document.getElementById('win').play();
                // swal("Winner!", "You clicked the button to play again!", "success");
            } else if (result == 'LOSE') {
                document.getElementById('loser').play();
                // swal("Loser!", "You clicked the button to play again!", "error");
            } else {
                document.getElementById('draw').play();
                // swal("Draw!", "You clicked the button to play again!", "info");
            }
            state.notification = result;
            break;

        default:
            return state;
    }
    return { ...state }
}

export default gameOanTuTiReducer;