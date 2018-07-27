import React, {Component} from 'react';
import Style from 'style-it';

class Spinner20 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
                {`
                .spinner20 {
                    margin: 25px auto;
                    width: 40px;
                    height: 40px;
                    position: relative;
                    text-align: center;
                    
                    -webkit-animation: sk-rotate-2 2s infinite linear;
                    animation: sk-rotate-2 2s infinite linear;
                  }
                  
                  .spinner20-dot1, .spinner20-dot2 {
                    width: 60%;
                    height: 60%;
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    background-color: ${spinnerColor};
                    border-radius: 100%;
                    
                    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
                    animation: sk-bounce 2.0s infinite ease-in-out;
                  }
                  
                  .spinner20-dot2 {
                    top: auto;
                    bottom: 0;
                    -webkit-animation-delay: -1.0s;
                    animation-delay: -1.0s;
                  }
                  
                  @-webkit-keyframes sk-rotate-2 { 100% { -webkit-transform: rotate(1080deg) }}
                  @keyframes sk-rotate-2 { 100% { transform: rotate(360deg); -webkit-transform: rotate(1080deg) }}
                  
                  @-webkit-keyframes sk-bounce {
                    0%, 100% { -webkit-transform: scale(0.0) }
                    50% { -webkit-transform: scale(1.0) }
                  }
                  
                  @keyframes sk-bounce {
                    0%, 100% { 
                      transform: scale(0.0);
                      -webkit-transform: scale(0.0);
                    } 50% { 
                      transform: scale(1.0);
                      -webkit-transform: scale(1.0);
                    }
                  }
                `}
                <div className="spinner20">
                    <div className="spinner20-dot1"></div>
                    <div className="spinner20-dot2"></div>
                </div>
            </Style>
        );
    };
}

export default Spinner20;