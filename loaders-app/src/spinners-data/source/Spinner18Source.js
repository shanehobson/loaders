export const spinner18HTML = `
<div class="spinner18"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
`;

export const spinner18CSS = spinnerColor => `
.spinner18 {
    color: official;
    display: inline-block;
    position: relative;
    width: 90px;
    height: 85px;
  }
  .spinner18 div {
    transform-origin: 32px 32px;
    animation: spinner18 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    position: absolute;
    top: 18%;
    left: 18%;
  }
  .spinner18 div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 29px;
    width: 5px;
    height: 14px;
    border-radius: 20%;
    background: ${spinnerColor};
  }
  .spinner18 div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .spinner18 div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .spinner18 div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .spinner18 div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .spinner18 div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .spinner18 div:nth-child(6) {
    transform: rotate(180deg);
    animation-delay: -0.6s;
  }
  .spinner18 div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .spinner18 div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .spinner18 div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .spinner18 div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .spinner18 div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .spinner18 div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes spinner18 {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const spinner18Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';