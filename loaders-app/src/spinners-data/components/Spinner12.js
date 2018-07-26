import React, {Component} from 'react';
import Style from 'style-it';

class Spinner12 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
                {`
                .spinner12 {
                    margin: 25px;
                    width: 50px;
                    height: 40px;
                    text-align: center;
                    font-size: 10px;
                }
                
                .spinner12 > div {
                    background-color: ${spinnerColor};
                    height: 100%;
                    width: 6px;
                    display: inline-block;
                    border-radius: 50%;
                    
                    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
                    animation: sk-stretchdelay 1.2s infinite ease-in-out;
                }
                
                .spinner12 .circ2 {
                    -webkit-animation-delay: -1.1s;
                    animation-delay: -1.1s;
                    margin-left: 2px;
                }
                
                .spinner12 .circ3 {
                    -webkit-animation-delay: -1.0s;
                    animation-delay: -1.0s;
                    margin-left: 2px;
                }
                
                .spinner12 .circ4 {
                    -webkit-animation-delay: -0.9s;
                    animation-delay: -0.9s;
                    margin-left: 2px;
                }
                
                .spinner12 .circ5 {
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
            <div className="spinner12">
                <div className="circ1"></div>
                <div className="circ2"></div>
                <div className="circ3"></div>
                <div className="circ4"></div>
                <div className="circ5"></div>
            </div>
            </Style>
        );
    };
}

export default Spinner12;