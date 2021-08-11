import * as OTTConstants from '../constants/GameOanTuTiConstants';

export const selectOTTActions = (payload) =>{
    return{
        type: OTTConstants.SELECT_OTT,
        payload,
    }
}

export const playOTTActions = (payload) =>{
    return{
        type: OTTConstants.PLAY_OTT,
        payload,
    }
}