export const spinner26HTML = `
<div class="spinner26-container">
  <div class="spinner26-dot1"></div>
  <div class="spinner26-dot2"></div>
</div>
`;

export const spinner26CSS = spinnerColor => `
.spinner26-container {
  margin: 25px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
}

.spinner26-dot1, .spinner26-dot2 {
  width: 60%;
  height: 60%;
  background-color: ${spinnerColor};
  border-radius: 100%;

  -webkit-animation: sk-bounce 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate-reverse both;
  animation: sk-bounce 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate-reverse both;
}

.spinner26-dot2 {
  width: 60%;
  height: 60%;
  background-color: ${spinnerColor};
  margin-left: 20px;
  border-radius: 0%;

  -webkit-animation: sk-bounce 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate-reverse both;
  animation: sk-bounce 1.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) infinite alternate-reverse both;
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
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