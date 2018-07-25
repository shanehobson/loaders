const spinnerConfig = require('../SpinnerConfig.json');
const spinnerColor = spinnerConfig.colors.spinnerColor;

export const spinner13HTML = `
    <div class="spinner13"></div>
`;

export const spinner13CSS = `
    .spinner13 {
        display: inline-block;
        position: relative;
        width: 90px;
        height: 82px;
    }
    .spinner13:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 6px;
        box-sizing: border-box;
        border: 26px solid ${spinnerColor};
        border-color: ${spinnerColor} transparent ${spinnerColor} transparent;
        animation: spinner13 1.2s infinite;
    }
    @keyframes spinner13 {
        0% {
        transform: rotate(0);
        animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
        transform: rotate(900deg);
        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
        transform: rotate(1800deg);
        }
    }
`;

export const spinner13Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';