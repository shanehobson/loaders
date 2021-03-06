import React, {Component} from 'react';
import Style from 'style-it';

class Spinner3 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
            {`
            .spinner3 {
                margin: 25px;
                width: 50px;
                height: 40px;
                text-align: center;
                font-size: 10px;
            }
              
            .spinner3 > div {
                background-color: ${spinnerColor};
                height: 100%;
                width: 6px;
                display: inline-block;
                
                -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
                animation: sk-stretchdelay 1.2s infinite ease-in-out;
            }
              
            .spinner3 .rect2 {
                -webkit-animation-delay: -1.1s;
                animation-delay: -1.1s;
                margin-left: 2px;
            }
              
            .spinner3 .rect3 {
                -webkit-animation-delay: -1.0s;
                animation-delay: -1.0s;
                margin-left: 2px;
            }
              
            .spinner3 .rect4 {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
                margin-left: 2px;
            }
              
            .spinner3 .rect5 {
                -webkit-animation-delay: -0.8s;
                animation-delay: -0.8s;
                margin-left: 2px;
            }
              
            @-webkit-keyframes sk-stretchdelay {
                0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
                20% { -webkit-transform: scaleY(1.0) }
            }
              
            @keyframes sk-stretchdelay {
                0%, 40%, 100% { 
                  transform: scaleY(0.4);
                  -webkit-transform: scaleY(0.4);
                }  20% { 
                  transform: scaleY(1.0);
                  -webkit-transform: scaleY(1.0);
                }
            }
            `}
            <div className="spinner3">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
            </Style>
        );
    };
}
  
export default Spinner3;