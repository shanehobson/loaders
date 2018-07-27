import React, {Component} from 'react';
import Style from 'style-it';

class Spinner24 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
                {`
                .spinner24 {
                    margin: 25px auto;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    text-align: center;
                    
                    -webkit-animation: sk-rotate-6 2s infinite linear;
                    animation: sk-rotate-6 2s infinite linear;
                  }
                  
                  .spinner24-dot1 {
                    width: 60%;
                    height: 60%;
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    background-color: ${spinnerColor};
                    border-radius: 100%;
                    
                    -webkit-animation: sk-bounce-6 2.0s infinite ease-in-out;
                    animation: sk-bounce-6 2.0s infinite ease-in-out;
                  }
                                   
                  @-webkit-keyframes sk-rotate-6 { 100% { -webkit-transform: rotate(1080deg) }}
                  @keyframes sk-rotate-6 { 100% { transform: rotate(1080deg); -webkit-transform: rotate1080deg) }}
                  
                  @-webkit-keyframes sk-bounce-6 {
                    0%, 100% { -webkit-transform: scale(0.0) }
                    50% { -webkit-transform: scale(1.0) }
                  }
                  
                  @keyframes sk-bounce-6 {
                    0%, 100% { 
                      transform: scale(0.0);
                      -webkit-transform: scale(0.0);
                    } 50% { 
                      transform: scale(1.0);
                      -webkit-transform: scale(1.0);
                    }
                  }
                `}
                <div className="spinner24">
                    <div className="spinner24-dot1"></div>
                </div>
            </Style>
        );
    };
}

export default Spinner24;