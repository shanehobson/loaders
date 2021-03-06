import React, {Component} from 'react';
import Style from 'style-it';

class Spinner5 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
              {`
              @keyframes spinner5 {
                0% {
                    transform: translate3d(-50%, -50%, 0) rotate(0deg);
                }
                100% {
                    transform: translate3d(-50%, -50%, 0) rotate(360deg);
                }
            }
            .spinner5 {
                height: 90px;
                width: 90px;
                opacity: 1;
                position: relative;
                transition: opacity linear 0.1s;    
            }
            .spinner5::before {
                animation: 2s linear infinite spinner5;
                border: solid 3px transparent;
                border-bottom-color: ${spinnerColor};
                border-top-color: ${spinnerColor};
                border-left-color: ${spinnerColor};
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
              <div className="spinner5">
              </div>
            </Style>
        );
    };
}

  
export default Spinner5;