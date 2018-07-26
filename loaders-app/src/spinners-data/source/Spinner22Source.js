export const spinner22HTML = `
    <div class="spinner22">
        <div class="spinner22-dot1"></div>
        <div class="spinner22-dot2"></div>
    </div>
`;

export const spinner22CSS = spinnerColor => `
.spinner22 {
    margin: 25px auto;
    width: 40px;
    height: 40px;
    position: relative;
    text-align: center;
    
    -webkit-animation: sk-rotate-4 2s infinite linear;
    animation: sk-rotate-4 2s infinite linear;
  }
  
  .spinner22-dot1, .spinner22-dot2 {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: ${spinnerColor};
    
    
    -webkit-animation: sk-bounce-4 2.0s infinite ease-in-out;
    animation: sk-bounce-4 2.0s infinite ease-in-out;
  }
  
  .spinner22-dot2 {
    top: auto;
    bottom: 0;
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
  
  @-webkit-keyframes sk-rotate-4 { 100% { -webkit-transform: rotate(720deg) }}
  @keyframes sk-rotate-4 { 100% { transform: rotate(720deg); -webkit-transform: rotate(720deg) }}
  
  @-webkit-keyframes sk-bounce-4 {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes sk-bounce-4 {
    0%, 100% { 
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% { 
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
`;

export const spinner22Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';