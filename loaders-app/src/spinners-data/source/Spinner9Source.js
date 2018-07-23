const spinnerConfig = require('../SpinnerConfig.json');
const spinnerColor = spinnerConfig.colors.spinnerColor;

export const spinner9HTML = `
    <div className="spinner9"></div>
`;

export const spinner9CSS = `
    .spinner9 {
        display: inline-block;
        width: 100px;
        height: 100px;
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
        border: 3px solid ${spinnerColor} ;
        border-color: ${spinnerColor}  transparent ${spinnerColor} transparent;
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
`;

export const spinner9Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';