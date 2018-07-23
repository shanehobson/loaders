import spinnerColor from '../SpinnerConfig.js';

export const spinner6HTML = `
    <div className="spinner6"></div>
`;

export const spinner6CSS = `
@keyframes spinner {
    0% {
        transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
         transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
}
.spinner3 {
    height: 100px;
    width: 100px;
    opacity: 1;
    position: relative;
    transition: opacity linear 0.1s;    
}
.spinner3::before {
    animation: 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite spinner;
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

export const spinner6Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';