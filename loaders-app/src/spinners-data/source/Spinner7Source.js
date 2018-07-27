export const spinner7HTML = `
<div className="spinner7"><div></div><div></div><div></div><div></div></div>
`;

export const spinner7CSS = spinnerColor =>  `
.spinner7 {
    display: inline-block;
    position: relative;
    width: 100px;
    height: 100px;
  }
  .spinner7 div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    left: 40%;
    top: 40%;
    width: 46px;
    height: 46px;
    border: 3px solid ${spinnerColor};
    border-radius: 50%;
    animation: spinner7 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${spinnerColor} transparent transparent transparent;
  }
  .spinner7 div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .spinner7 div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .spinner7 div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes spinner7 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const spinner7Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';