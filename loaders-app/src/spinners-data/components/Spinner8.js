import React, {Component} from 'react';
import Style from 'style-it';

class Spinner8 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
            {`
            .spinner8 {
              display: inline-block;
              height: 90px;
              width: 90px;
              position: relative;
            }
            .spinner8:after {
              content: " ";
              display: block;
              position: absolute;
              left: 25%;
              top: 25%;
              width: 46px;
              height: 46px;
              margin: 1px;
              border-radius: 50%;
              border: 3px solid ${spinnerColor};
              border-color: ${spinnerColor} transparent ${spinnerColor} transparent;
              animation: spinner8 1.2s linear infinite;
            }
            @keyframes spinner8 {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            `}
            <div className="spinner8"></div>
            </Style>
        );
    };
}

export default Spinner8;