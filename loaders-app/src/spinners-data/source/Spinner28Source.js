export const spinner28HTML = `
<div class="spinner28-container">
    <div class="spinner28-dot1"></div>
    <div class="spinner28-dot2"></div>
    <div class="spinner28-dot3"></div>
    <div class="spinner28-dot4"></div>
</div>
`;

export const spinner28CSS = spinnerColor => `
.spinner28-container {
  margin-top: 30px;
  margin-right: auto
  margin-left: auto
  width: 45px;
  height: 45px;
  position: relative;
  text-align: center;
}

.spinner28-dot1, .spinner28-dot2, .spinner28-dot3, .spinner28-dot4 {
        width: 10px;
        height: 10px;
        background-color: ${spinnerColor};
        border-radius: 100%;
        display: inline-block;
        margin-left: 4px;

        -webkit-animation: sk-bounce 0.75s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate-reverse both;
    animation: sk-bounce 0.75s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate-reverse both;
}

.spinner28-dot2 {
    -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
}

.spinner28-dot3 {
    -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
}

.spinner28-dot4 {
    -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
}

@-webkit-keyframes sk-bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
}
      
@keyframes sk-bounce {
        0%, 100% { 
          transform: scale(0.0);
          -webkit-transform: scale(0.0);
        } 50% { 
          transform: scale(1.0);
          -webkit-transform: scale(1.0);
        }
}
`;