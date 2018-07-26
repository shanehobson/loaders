const spinnerConfig = require('../SpinnerConfig.json');
const spinnerColor = spinnerConfig.colors.spinnerColor;

export const spinner8HTML = `
    <div className="spinner8"></div>
`;

export const spinner8CSS = spinnerColor => `
    .spinner8 {
        display: inline-block;
        width: 100px;
        height: 100px;
        position: relative;
    }
    .spinner8:after {
        content: " ";
        display: block;
        position: absolute;
        left: 40%;
        top: 40%;
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
`;

export const spinner8Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';