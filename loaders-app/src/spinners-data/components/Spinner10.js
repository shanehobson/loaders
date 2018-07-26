import React, {Component} from 'react';
import Style from 'style-it';

class Spinner10 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
                {`
                .spinner10-container{
                    position: relative;
                    height: 90px;
                    width: 90px;
                }
                .spinner10 {
                    display: inline-block;
                    position: absolute;
                    left: 15%;
                    top: 15%;
                    height: 90px;
                    width: 90px;
                  }
                  .spinner10 div {
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    background: ${spinnerColor};
                    border-radius: 50%;
                    animation: spinner10 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                  }
                  .spinner10 div:nth-child(1) {
                    animation-delay: 0s;
                    top: 29px;
                    left: 53px;
                  }
                  .spinner10 div:nth-child(2) {
                    animation-delay: -0.1s;
                    top: 18px;
                    left: 50px;
                  }
                  .spinner10 div:nth-child(3) {
                    animation-delay: -0.2s;
                    top: 9px;
                    left: 41px;
                  }
                  .spinner10 div:nth-child(4) {
                    animation-delay: -0.3s;
                    top: 6px;
                    left: 29px;
                  }
                  .spinner10 div:nth-child(5) {
                    animation-delay: -0.4s;
                    top: 9px;
                    left: 18px;
                  }
                  .spinner10 div:nth-child(6) {
                    animation-delay: -0.5s;
                    top: 18px;
                    left: 9px;
                  }
                  .spinner10 div:nth-child(7) {
                    animation-delay: -0.6s;
                    top: 29px;
                    left: 6px;
                  }
                  .spinner10 div:nth-child(8) {
                    animation-delay: -0.7s;
                    top: 41px;
                    left: 9px;
                  }
                  .spinner10 div:nth-child(9) {
                    animation-delay: -0.8s;
                    top: 50px;
                    left: 18px;
                  }
                  .spinner10 div:nth-child(10) {
                    animation-delay: -0.9s;
                    top: 53px;
                    left: 29px;
                  }
                  .spinner10 div:nth-child(11) {
                    animation-delay: -1s;
                    top: 50px;
                    left: 41px;
                  }
                  .spinner10 div:nth-child(12) {
                    animation-delay: -1.1s;
                    top: 41px;
                    left: 50px;
                  }
                  @keyframes spinner10 {
                    0%, 20% {
                      transform: scale(1.2);
                    }
                    50% {
                      transform: scale(2.2);
                    }
                    100% {
                        transform: scale(1.2);
                      }
                  }                
                `}
                <div className="spinner10-container">
                    <div className="spinner10"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            </Style>
        );
    };
}

export default Spinner10;