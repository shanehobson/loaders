import React, {Component} from 'react';
import Style from 'style-it';

class Spinner7 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
            {`
            .spinner7 {
              display: inline-block;
              position: relative;
              height: 90px;
              width: 90px;
            }
            .spinner7 div {
              box-sizing: border-box;
              display: block;
              position: absolute;
              left: 30%;
              top: 30%;
              width: 46px;
              height: 46px;
              border: 3px solid ${spinnerColor};
              border-radius: 50%;
              animation: spinner7 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
              border-color: ${spinnerColor} transparent transparent transparent;
            }
            .spinner7 div:nth-child(1) {
              animation-delay: -0.45s;
            }
            .spinner7 div:nth-child(2) {
              animation-delay: -0.3s;
            }
            .spinner7 div:nth-child(3) {
              animation-delay: -0.15s;
            }
            @keyframes spinner7 {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            `}
              <div className="spinner7"><div></div><div></div><div></div><div></div></div>
            </Style>
        );
    };
}
  
export default Spinner7;