import React, {Component} from 'react';
import Style from 'style-it';

class Spinner27 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
                {`
                .spinner27-container {
                  margin-top: 30px;
                  margin-right: auto
                  margin-left: auto
                  width: 45px;
                  height: 45px;
                  position: relative;
                  text-align: center;
                }

                .spinner27-dot1, .spinner27-dot2, .spinner27-dot3, .spinner27-dot4 {
                        width: 10px;
                        height: 10px;
                        background-color: ${spinnerColor};
                        border-radius: 100%;
                        display: inline-block;
                        margin-left: 4px;

                        -webkit-animation: sk-bounce 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate-reverse both;
	                  animation: sk-bounce 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate-reverse both;
                }

                .spinner27-dot2 {
                    -webkit-animation-delay: 0.15s;
                        animation-delay: 0.15s;
                }

                .spinner27-dot3 {
                    -webkit-animation-delay: 0.3s;
                        animation-delay: 0.3s;
                }

                .spinner27-dot4 {
                    -webkit-animation-delay: 0.45s;
                        animation-delay: 0.45s;
                }

                @-webkit-keyframes sk-bounce {
                        0%, 100% { -webkit-transform: scale(0.0) }
                        50% { -webkit-transform: scale(1.0) }
                }
                      
                @keyframes sk-bounce {
                        0%, 100% { 
                          transform: scale(0.0);
                          -webkit-transform: scale(0.0);
                        } 50% { 
                          transform: scale(1.0);
                          -webkit-transform: scale(1.0);
                        }
                }
                `}
                <div className="spinner27-container">
                    <div className="spinner27-dot1" />
                    <div className="spinner27-dot2" />
                    <div className="spinner27-dot3" />
                    <div className="spinner27-dot4" />
                </div>
            </Style>
        );
    };
}

export default Spinner27;