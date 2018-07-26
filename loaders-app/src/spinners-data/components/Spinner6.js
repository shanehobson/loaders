import React, {Component} from 'react';
import Style from 'style-it';

class Spinner6 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
            {`
              @keyframes spinner6 {
                0% {
                    transform: translate3d(-50%, -50%, 0) rotate(0deg);
                }
                100% {
                    transform: translate3d(-50%, -50%, 0) rotate(360deg);
                }
            }
            .spinner6 {
                height: 90px;
                width: 90px;
                opacity: 1;
                position: relative;
                transition: opacity linear 0.1s;    
            }
            .spinner6::before {
                animation: 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite spinner6;
                border: solid 3px #eee;
                border-bottom-color: ${spinnerColor};
                border-radius: 50%;
                content: "";
                height: 40px;
                left: 50%;
                opacity: inherit;
                position: absolute;
                top: 50%;
                transform: translate3d(-50%, -50%, 0);
                transform-origin: center;
                width: 40px;
                will-change: transform;
            }
            `}
            <div className="spinner6">
            </div>
            </Style>
        );
    };
}
  
export default Spinner6;