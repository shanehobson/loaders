import React, {Component} from 'react';
import Style from 'style-it';

class Spinner9 extends Component {

    render() {
        const { spinnerColor } = this.props;
        return (
            <Style>
              {`
              .spinner9 {
                display: inline-block;
                height: 90px;
                width: 90px;
                position: relative;
              }
              .spinner9:after {
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
                animation: spinner9 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
              }
              @keyframes spinner9 {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              `}
              <div className="spinner9"></div>
            </Style>
        );
    };
}

export default Spinner9;