import React, {Component} from 'react';
import Style from 'style-it';

class Spinner14 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
                {`
                .spinner14 {
                  display: inline-block;
                  position: relative;
                  width: 90px;
                  height: 82px;
                }
                .spinner14:after {
                  content: " ";
                  display: block;
                  position: absolute;
                  left: 15%;
                  top: 15%;
                  width: 0;
                  height: 0;
                  margin: 6px;
                  box-sizing: border-box;
                  border: 26px solid ${spinnerColor};
                  border-color: ${spinnerColor} transparent ${spinnerColor} transparent;
                  animation: spinner14 1.2s infinite;
                }
                @keyframes spinner14 {
                  0% {
                    transform: rotate(0);
                    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
                  }
                  50% {
                    transform: rotate(90deg);
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                  }
                  100% {
                    transform: rotate(180deg);
                  }
                }
                `}
                <div className="spinner14"></div> 
            </Style>
        );
    };
}
  
export default Spinner14;