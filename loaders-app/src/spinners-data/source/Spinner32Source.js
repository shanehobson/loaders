export const spinner32HTML = `
<div id="othercircularG">
    <div id="othercircularG_1" class="othercircularG"></div>
    <div id="othercircularG_2" class="othercircularG"></div>
    <div id="othercircularG_3" class="othercircularG"></div>
    <div id="othercircularG_4" class="othercircularG"></div>
    <div id="othercircularG_5" class="othercircularG"></div>
    <div id="othercircularG_6" class="othercircularG"></div>
    <div id="othercircularG_7" class="othercircularG"></div>
    <div id="othercircularG_8" class="othercircularG"></div>
</div>
`;

export const spinner32CSS = spinnerColor => `
#othercircularG{
    position:relative;
    width:58px;
    height:58px;
    margin: auto;
    margin-top: 16px;
}
.othercircularG{
    position:absolute;
    background-color: ${spinnerColor};
    width:14px;
    height:14px;
    border-radius:9px;
        -o-border-radius:9px;
        -ms-border-radius:9px;
        -webkit-border-radius:9px;
        -moz-border-radius:9px;
    animation-name:bounce_othercircularG;
        -o-animation-name:bounce_othercircularG;
        -ms-animation-name:bounce_othercircularG;
        -webkit-animation-name:bounce_othercircularG;
        -moz-animation-name:bounce_othercircularG;
    animation-duration:1.1s;
        -o-animation-duration:1.1s;
        -ms-animation-duration:1.1s;
        -webkit-animation-duration:1.1s;
        -moz-animation-duration:1.1s;
    animation-iteration-count:infinite;
        -o-animation-iteration-count:infinite;
        -ms-animation-iteration-count:infinite;
        -webkit-animation-iteration-count:infinite;
        -moz-animation-iteration-count:infinite;
    animation-direction:normal;
        -o-animation-direction:normal;
        -ms-animation-direction:normal;
        -webkit-animation-direction:normal;
        -moz-animation-direction:normal;
}
#othercircularG_1{
    left:0;
    top:23px;
    animation-delay:0.41s;
        -o-animation-delay:0.41s;
        -ms-animation-delay:0.41s;
        -webkit-animation-delay:0.41s;
        -moz-animation-delay:0.41s;
}
#othercircularG_2{
    left:6px;
    top:6px;
    animation-delay:0.55s;
        -o-animation-delay:0.55s;
        -ms-animation-delay:0.55s;
        -webkit-animation-delay:0.55s;
        -moz-animation-delay:0.55s;
}
#othercircularG_3{
    top:0;
    left:23px;
    animation-delay:0.69s;
        -o-animation-delay:0.69s;
        -ms-animation-delay:0.69s;
        -webkit-animation-delay:0.69s;
        -moz-animation-delay:0.69s;
}
#othercircularG_4{
    right:6px;
    top:6px;
    animation-delay:0.83s;
        -o-animation-delay:0.83s;
        -ms-animation-delay:0.83s;
        -webkit-animation-delay:0.83s;
        -moz-animation-delay:0.83s;
}
#othercircularG_5{
    right:0;
    top:23px;
    animation-delay:0.97s;
        -o-animation-delay:0.97s;
        -ms-animation-delay:0.97s;
        -webkit-animation-delay:0.97s;
        -moz-animation-delay:0.97s;
}
#othercircularG_6{
    right:6px;
    bottom:6px;
    animation-delay:1.1s;
        -o-animation-delay:1.1s;
        -ms-animation-delay:1.1s;
        -webkit-animation-delay:1.1s;
        -moz-animation-delay:1.1s;
}
#othercircularG_7{
    left:23px;
    bottom:0;
    animation-delay:1.24s;
        -o-animation-delay:1.24s;
        -ms-animation-delay:1.24s;
        -webkit-animation-delay:1.24s;
        -moz-animation-delay:1.24s;
}
#othercircularG_8{
    left:6px;
    bottom:6px;
    animation-delay:1.38s;
        -o-animation-delay:1.38s;
        -ms-animation-delay:1.38s;
        -webkit-animation-delay:1.38s;
        -moz-animation-delay:1.38s;
}

@keyframes bounce_othercircularG{
    0%{
        transform:scale(1.3);
    }

    100%{
        transform:scale(0);
    }
}
@-o-keyframes bounce_othercircularG{
    0%{
        -o-transform:scale(1.3);
    }

    100%{
        -o-transform:scale(0);
    }
}
@-ms-keyframes bounce_othercircularG{
    0%{
        -ms-transform:scale(1.3);
    }

    100%{
        -ms-transform:scale(0);
    }
}
@-webkit-keyframes bounce_othercircularG{
    0%{
        -webkit-transform:scale(1.3);
    }

    100%{
        -webkit-transform:scale(0);
    }
}
@-moz-keyframes bounce_othercircularG{
    0%{
        -moz-transform:scale(1.3);
    }

    100%{
        -moz-transform:scale(0);
    }
}
`;

export const spinner32Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';