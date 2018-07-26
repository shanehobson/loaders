export const spinner23HTML = `
    <div class="spinner23">
        <div class="spinner23-dot1"></div>
    </div>
`;

export const spinner23CSS = spinnerColor => `
.spinner23 {
    margin: 25px auto;
    width: 40px;
    height: 40px;
    position: relative;
    text-align: center;
    
    -webkit-animation: sk-rotate-5 2s infinite linear;
    animation: sk-rotate-5 2s infinite linear;
  }
  
  .spinner23-dot1 {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: ${spinnerColor};
    
    
    -webkit-animation: sk-bounce-5 2.0s infinite ease-in-out;
    animation: sk-bounce-5 2.0s infinite ease-in-out;
  }
                   
  @-webkit-keyframes sk-rotate-5 { 100% { -webkit-transform: rotate(1080deg) }}
  @keyframes sk-rotate-5 { 100% { transform: rotate(1080deg); -webkit-transform: rotate1080deg) }}
  
  @-webkit-keyframes sk-bounce-5 {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes sk-bounce-5 {
    0%, 100% { 
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% { 
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
`;

export const spinner23Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';