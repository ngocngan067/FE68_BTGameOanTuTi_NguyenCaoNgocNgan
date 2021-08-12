import React, { Component } from 'react'
import './GameOanTuTi.css'
import { connect } from 'react-redux'
import { playOTTActions, selectOTTActions } from '../../src/store/actions/GameOanTuTiActions'

class GameOanTuTi extends Component {
    render() {
        const { OTT, handleSelectOTT, handlePlayOTT } = this.props;
        return (
            <div className="game-container py-4">
                <div className="container">
                    <div className="row">
                        <div className="col imgPlayer">
                            <div className="both">
                                <img src="./image/player.png" className="player img-thumbnail" alt="" />
                                <div id="squareOut">
                                    <div className="speech-bubble"></div>
                                    <div id="square">
                                        <img src={OTT.playerPick.image} className="tuXi w-50 h-50" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex game">
                                <div className="m-2">
                                    <button type="button" className="box btn  btn-success btn-outline-success" onClick={() => handleSelectOTT(1)}>
                                        <img src="./image/keo.png" className="card-img-top" alt="" />
                                    </button>

                                </div>
                                <div className="m-2">
                                    <button type="button" className="box btn  btn-success btn-outline-success" onClick={() => handleSelectOTT(2)}>
                                        <img src="./image/bua.png" className="card-img-top" alt="" />
                                    </button>

                                </div>
                                <div className="m-2">
                                    <button type="button" className="box btn  btn-success btn-outline-success" onClick={() => handleSelectOTT(3)}>
                                        <img src="./image/bao.png" className="card-img-top" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="col-6 my-4">
                            
                            <audio id="win" src="./image/Am-thanh-tra-loi-dung-www_nhacchuongvui_com.mp3"></audio>
                            <audio id="loser" src="./image/Am-thanh-tra-loi-sai-www_nhacchuongvui_com.mp3"></audio>
                            <audio id="draw" src="./image/Tieng-wow-tre-con-www_nhacchuongvui_com.mp3"></audio>
                            {/* <audio id="loi" src="./image/Tieng-tinh-tinh-www_tiengdong_com.mp3"></audio> */}
                            
                            <div className="infor"><h1 className="text-center total">{OTT.notification}</h1> </div>

                            <div className="winningTurn py-4">
                                <h1 className="text-center  text-success">Số bàn thắng: <span className="total">{OTT.soBanThang}</span></h1>
                            </div>

                            <div className="turn">
                                <h1 className="text-center text-success">Số bàn chơi: <span className="total">{OTT.soBanChoi}</span></h1>
                            </div>

                            <div className="btn">
                                <button className="btn btn-success mt-4 px-4 py-2" onClick={handlePlayOTT}>Play game</button>
                            </div>
                        </div>
                        <div className="col imgPlayer">
                            <div className="both">
                                <div>
                                    <img src="./image/playerComputer.png" className="player img-thumbnail" alt="" />
                                </div>
                                <div id="squareOut">
                                    <div className="speech-bubble"></div>
                                    <div id="square">
                                        <img src={OTT.computerPick.image} className="tuXi w-50 h-50" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        )
    }
}

const mapStateToProps = state => ({
    OTT: state.gameOanTuTiReducer,
});

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectOTT: (id) => {
            dispatch(selectOTTActions(id));
        },
        handlePlayOTT: () => {
            dispatch(playOTTActions());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOanTuTi);