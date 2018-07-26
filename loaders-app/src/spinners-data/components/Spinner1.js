import React, {Component} from 'react';
import Style from 'style-it';

class Spinner1 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
                {`
                .skCircle {
                    margin: 25px;
                    width: 40px;
                    height: 40px;
                    position: relative;
                }
                .skCircle .skChild {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                .skCircle .skChild:before {
                    content: '';
                    display: block;
                    margin: 0 auto;
                    width: 15%;
                    height: 15%;
                    background-color: ${spinnerColor};
                    border-radius: 100%;
                    -webkit-animation: skCircleBounceDelay 1.2s infinite ease-in-out both;
                            animation: skCircleBounceDelay 1.2s infinite ease-in-out both;
                }
                .skCircle .skCircle2 {
                    -webkit-transform: rotate(30deg);
                        -ms-transform: rotate(30deg);
                            transform: rotate(30deg); }
                .skCircle .skCircle3 {
                    -webkit-transform: rotate(60deg);
                        -ms-transform: rotate(60deg);
                            transform: rotate(60deg); }
                .skCircle .skCircle4 {
                    -webkit-transform: rotate(90deg);
                        -ms-transform: rotate(90deg);
                            transform: rotate(90deg); }
                .skCircle .skCircle5 {
                    -webkit-transform: rotate(120deg);
                        -ms-transform: rotate(120deg);
                            transform: rotate(120deg); }
                .skCircle .skCircle6 {
                    -webkit-transform: rotate(150deg);
                        -ms-transform: rotate(150deg);
                            transform: rotate(150deg); }
                .skCircle .skCircle7 {
                    -webkit-transform: rotate(180deg);
                        -ms-transform: rotate(180deg);
                            transform: rotate(180deg); }
                .skCircle .skCircle8 {
                    -webkit-transform: rotate(210deg);
                        -ms-transform: rotate(210deg);
                            transform: rotate(210deg); }
                .skCircle .skCircle9 {
                    -webkit-transform: rotate(240deg);
                        -ms-transform: rotate(240deg);
                            transform: rotate(240deg); }
                .skCircle .skCircle10 {
                    -webkit-transform: rotate(270deg);
                        -ms-transform: rotate(270deg);
                            transform: rotate(270deg); }
                .skCircle .skCircle11 {
                    -webkit-transform: rotate(300deg);
                        -ms-transform: rotate(300deg);
                            transform: rotate(300deg); }
                .skCircle .skCircle12 {
                    -webkit-transform: rotate(330deg);
                        -ms-transform: rotate(330deg);
                            transform: rotate(330deg); }
                .skCircle .skCircle2:before {
                    -webkit-animation-delay: -1.1s;
                            animation-delay: -1.1s; }
                .skCircle .skCircle3:before {
                    -webkit-animation-delay: -1s;
                            animation-delay: -1s; }
                .skCircle .skCircle4:before {
                    -webkit-animation-delay: -0.9s;
                            animation-delay: -0.9s; }
                .skCircle .skCircle5:before {
                    -webkit-animation-delay: -0.8s;
                            animation-delay: -0.8s; }
                .skCircle .skCircle6:before {
                    -webkit-animation-delay: -0.7s;
                            animation-delay: -0.7s; }
                .skCircle .skCircle7:before {
                    -webkit-animation-delay: -0.6s;
                            animation-delay: -0.6s; }
                .skCircle .skCircle8:before {
                    -webkit-animation-delay: -0.5s;
                            animation-delay: -0.5s; }
                .skCircle .skCircle9:before {
                    -webkit-animation-delay: -0.4s;
                            animation-delay: -0.4s; }
                .skCircle .skCircle10:before {
                    -webkit-animation-delay: -0.3s;
                            animation-delay: -0.3s; }
                .skCircle .skCircle11:before {
                    -webkit-animation-delay: -0.2s;
                            animation-delay: -0.2s; }
                .skCircle .skCircle12:before {
                    -webkit-animation-delay: -0.1s;
                            animation-delay: -0.1s; }
                  
                @-webkit-keyframes skCircleBounceDelay {
                    0%, 80%, 100% {
                      -webkit-transform: scale(0);
                              transform: scale(0);
                    } 40% {
                      -webkit-transform: scale(1);
                              transform: scale(1);
                    }
                }
                  
                @keyframes skCircleBounceDelay {
                    0%, 80%, 100% {
                      -webkit-transform: scale(0);
                              transform: scale(0);
                    } 40% {
                      -webkit-transform: scale(1);
                              transform: scale(1);
                    }
                }
                `}
                <div className="skCircle">
                    <div className="skCircle1 skChild"></div>
                    <div className="skCircle2 skChild"></div>
                    <div className="skCircle3 skChild"></div>
                    <div className="skCircle4 skChild"></div>
                    <div className="skCircle5 skChild"></div>
                    <div className="skCircle6 skChild"></div>
                    <div className="skCircle7 skChild"></div>
                    <div className="skCircle8 skChild"></div>
                    <div className="skCircle9 skChild"></div>
                    <div className="skCircle10 skChild"></div>
                    <div className="skCircle11 skChild"></div>
                    <div className="skCircle12 skChild"></div>
                </div>
            </Style>
        );
    };
}

export default Spinner1;