import React, {Component} from 'react';
import Style from 'style-it';

class Spinner13 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
              {`
              .spinner13 {
                display: inline-block;
                position: relative;
                width: 90px;
                height: 82px;
              }
              .spinner13:after {
                content: " ";
                display: block;
                position: absolute;
                left: 15%;
                top: 15%;
                border-radius: 50%;
                width: 0;
                height: 0;
                margin: 6px;
                box-sizing: border-box;
                border: 26px solid ${spinnerColor};
                border-color: ${spinnerColor} transparent ${spinnerColor} transparent;
                animation: spinner13 1.2s infinite;
              }
              @keyframes spinner13 {
                0% {
                  transform: rotate(0);
                  animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
                }
                50% {
                  transform: rotate(900deg);
                  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                }
                100% {
                  transform: rotate(1800deg);
                }
              }
              `}
            <div className="spinner13"></div>
            </Style>
        );
    };
}
  
export default Spinner13;