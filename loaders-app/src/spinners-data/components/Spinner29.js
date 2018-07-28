import React, {Component} from 'react';
import Style from 'style-it';

class Spinner29 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
                {`
                .spinner29 {
                  display: inline-block;
                  position: relative;
                  width: 90px;
                  height: 82px;
                }
                .spinner29:after {
                  content: " ";
                  display: block;
                  position: absolute;
                  left: 22%;
                  top: 25%;
                  width: 40px;
                  height: 40px;
                  margin: 6px;
                  box-sizing: border-box;
                  background: ${spinnerColor};
                  animation: spinner29 1.2s infinite;
                }
                @keyframes spinner29 {
                  0% {
                    transform: rotate(90);
                    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
                  }
                  50% {
                    transform: rotate(360deg);
                    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
                  }
                  100% {
                    transform: rotate(720deg);
                  }
                }
                `}
                <div className="spinner29"></div> 
            </Style>
        );
    };
}
  
export default Spinner29;