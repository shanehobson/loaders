export const spinner29HTML = `
    <div class="spinner29"></div>
`;

export const spinner29CSS = spinnerColor => `
.spinner29 {
    display: inline-block;
    position: relative;
    width: 90px;
    height: 82px;
  }
  .spinner29:after {
    content: " ";
    display: block;
    position: absolute;
    left: 22%;
    top: 25%;
    width: 40px;
    height: 40px;
    margin: 6px;
    box-sizing: border-box;
    background: ${spinnerColor};
    animation: spinner29 1.2s infinite;
  }
  @keyframes spinner29 {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(360deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(720deg);
    }
  }
`;

export const spinner29Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';