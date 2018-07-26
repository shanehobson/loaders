import React, {Component} from 'react';
import Style from 'style-it';

class Spinner11 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
            {`
            .spinner11 {
                margin: 25px;
                width: 40px;
                height: 40px;
                position: relative;
            }
              
            .circle1, .circle2 {
                background-color: ${spinnerColor};
                width: 15px;
                height: 15px;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 50%;
                
                -webkit-animation: sk-circlemove 1.8s infinite ease-in-out;
                animation: sk-circlemove 1.8s infinite ease-in-out;
            }
              
            .circle2 {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
            }
              
            @-webkit-keyframes sk-circlemove {
                25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
                50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
                75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
                100% { -webkit-transform: rotate(-360deg) }
            }
              
            @keyframes sk-circlemove {
                25% { 
                  transform: translateX(42px) rotate(-90deg) scale(0.5);
                  -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
                } 50% { 
                  transform: translateX(42px) translateY(42px) rotate(-179deg);
                  -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
                } 50.1% { 
                  transform: translateX(42px) translateY(42px) rotate(-180deg);
                  -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
                } 75% { 
                  transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
                  -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
                } 100% { 
                  transform: rotate(-360deg);
                  -webkit-transform: rotate(-360deg);
                }
            }
            `}
            <div className="spinner11">
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
            </Style>
        );
    };
}
  
export default Spinner11;