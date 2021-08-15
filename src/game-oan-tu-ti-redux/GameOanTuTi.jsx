import React, { Component } from 'react';
import './GameOanTuTi.css';
import { connect } from 'react-redux';
import { playOTTActions, selectOTTActions } from '../../src/store/actions/GameOanTuTiActions';
import { listSelect } from '../store/OTTData';
class GameOanTuTi extends Component {
    render() {
        const { OTT, handleSelectOTT, handlePlayOTT } = this.props;
        const audio = new Audio(OTT.result.sound); 
        //Tạo audio trên này, mỗi lần thay đổi result thì component sẽ render, nên sẽ chạy audio tương ứng cho result
        audio.play();
        return (
            <div className="game-container py-4">
                <div className="container">
                    <div className="row">
                        <div className="col imgPlayer">
                            <div className="both">
                                <img
                                    src="./image/player.png"
                                    className="player img-thumbnail"
                                    alt=""
                                />
                                <div id="squareOut">
                                    <div className="speech-bubble"></div>
                                    <div id="square">
                                        <img
                                            src={OTT.playerPick.image}
                                            className="tuXi w-50 h-50"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex game">
                                {listSelect.map(
                                    (
                                        item,
                                        key //nên đưa vào 1 cái list để tạo vòng for hàng loạt
                                    ) => (
                                        <div className="m-2" key={'select-' + key}>
                                            <button
                                                type="button"
                                                className={`btn ${
                                                    OTT.playerPick.id === item.id && 'btn-success'
                                                }`}
                                                // chỗ này là điều kiện để button nào đang được chọn sẽ sáng lên(bất kể click qua chỗ khác hay không)
                                                onClick={() => handleSelectOTT(item.id)}
                                            >
                                                <img src={item.image} className="w-100" alt="" />
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                        <div className="col-6 my-4">
                            <h1 className="text-warning">{OTT.result.name}</h1>
                            <div className="winningTurn py-4">
                                <h1 className="text-center  text-success">
                                    Số bàn thắng: <span className="total">{OTT.soBanThang}</span>
                                </h1>
                            </div>

                            <div className="turn">
                                <h1 className="text-center text-success">
                                    Số bàn chơi: <span className="total">{OTT.soBanChoi}</span>
                                </h1>
                            </div>

                            <div className="btn">
                                <button
                                    className="btn btn-success mt-4 px-4 py-2"
                                    onClick={handlePlayOTT}
                                >
                                    Play game
                                </button>
                            </div>
                        </div>
                        <div className="col imgPlayer">
                            <div className="both">
                                <div>
                                    <img
                                        src="./image/playerComputer.png"
                                        className="player img-thumbnail"
                                        alt=""
                                    />
                                </div>
                                <div id="squareOut">
                                    <div className="speech-bubble"></div>
                                    <div id="square">
                                        <img
                                            src={OTT.computerPick.image}
                                            className="tuXi w-50 h-50"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-white">{OTT.error}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
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
