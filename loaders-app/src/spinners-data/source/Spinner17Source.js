const spinnerConfig = require('../SpinnerConfig.json');
const spinnerColor = spinnerConfig.colors.spinnerColor;

export const spinner17HTML = `
<div class="spinner17"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`;

export const spinner17CSS = `
    .spinner17 {
        color: official;
        display: inline-block;
        position: relative;
        width: 90px;
        height: 85px;
    }
    .spinner17 div {
        transform-origin: 32px 32px;
        animation: spinner17 1.2s linear infinite;
    }
    .spinner17 div:after {
        content: " ";
        display: block;
        position: absolute;
        top: 3px;
        left: 29px;
        width: 5px;
        height: 14px;
        border-radius: 50%;
        background: ${spinnerColor};
    }
    .spinner17 div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
    }
    .spinner17 div:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
    }
    .spinner17 div:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
    }
    .spinner17 div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
    }
    .spinner17 div:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
    }
    .spinner17 div:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
    }
    .spinner17 div:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
    }
    .spinner17 div:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
    }
    .spinner17 div:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
    }
    .spinner17 div:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
    }
    .spinner17 div:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
    }
    .spinner17 div:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
    }
    @keyframes spinner17 {
        0% {
        opacity: 1;
        }
        100% {
        opacity: 0;
        }
    }
`;

export const spinner17Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';