export const spinner3HTML = `
<div class="spinner3">
  <div class="rect1"></div>
  <div class="rect2"></div>
  <div class="rect3"></div>
  <div class="rect4"></div>
  <div class="rect5"></div>
</div>
`;

export const spinner3CSS = spinnerColor => `
    .spinner3 {
        margin: 25px;
        width: 50px;
        height: 40px;
        text-align: center;
        font-size: 10px;
    }
    
    .spinner3 > div {
        background-color: ${spinnerColor};
        height: 100%;
        width: 6px;
        display: inline-block;
        
        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
    }
    
    .spinner3 .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
        margin-left: 2px;
    }
    
    .spinner3 .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
        margin-left: 2px;
    }
    
    .spinner3 .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
        margin-left: 2px;
    }
    
    .spinner3 .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
        margin-left: 2px;
    }
    
    @-webkit-keyframes sk-stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
        20% { -webkit-transform: scaleY(1.0) }
    }
    
    @keyframes sk-stretchdelay {
        0%, 40%, 100% { 
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
        }  20% { 
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
        }
    }
  }`;

export const spinner3Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';