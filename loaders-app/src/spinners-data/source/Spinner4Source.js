const spinnerConfig = require('../SpinnerConfig.json');
const spinnerColor = spinnerConfig.colors.spinnerColor;


export const spinner4HTML = `
    <div className="spinner4"></div>
`;

export const spinner4CSS = spinnerColor => `
    @keyframes spinner4 {
        0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }
    .spinner4 {
        height: 100px;
        opacity: 1;
        position: relative;
        transition: opacity linear 0.1s;    
    }
    .spinner4::before {
        animation: 2s linear infinite spinner4;
        border: solid 3px #eee;
        border-bottom-color: ${spinnerColor};
        border-radius: 50%;
        content: "";
        height: 40px;
        left: 50%;
        opacity: inherit;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        transform-origin: center;
        width: 40px;
        will-change: transform;
    }
`;

export const spinner4Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';