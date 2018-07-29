export const spinner31HTML = `
<div id="altcircularG">
    <div id="altcircularG_1" class="altcircularG"></div>
    <div id="altcircularG_2" class="altcircularG"></div>
    <div id="altcircularG_3" class="altcircularG"></div>
    <div id="altcircularG_4" class="altcircularG"></div>
    <div id="altcircularG_5" class="altcircularG"></div>
    <div id="altcircularG_6" class="altcircularG"></div>
    <div id="altcircularG_7" class="altcircularG"></div>
    <div id="altcircularG_8" class="altcircularG"></div>
</div>
`;

export const spinner31CSS = spinnerColor => `
#altcircularG{
    position:relative;
    width:58px;
    height:58px;
    margin: auto;
    margin-top: 16px;
}
.altcircularG{
    position:absolute;
    background-color: ${spinnerColor};
    width:14px;
    height:14px;
    border-radius:9px;
        -o-border-radius:9px;
        -ms-border-radius:9px;
        -webkit-border-radius:9px;
        -moz-border-radius:9px;
    animation-name:bounce_altcircularG;
        -o-animation-name:bounce_altcircularG;
        -ms-animation-name:bounce_altcircularG;
        -webkit-animation-name:bounce_altcircularG;
        -moz-animation-name:bounce_altcircularG;
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
#altcircularG_1{
    left:0;
    top:23px;
    animation-delay:0.41s;
        -o-animation-delay:0.41s;
        -ms-animation-delay:0.41s;
        -webkit-animation-delay:0.41s;
        -moz-animation-delay:0.41s;
}
#altcircularG_2{
    left:6px;
    top:6px;
    animation-delay:0.55s;
        -o-animation-delay:0.55s;
        -ms-animation-delay:0.55s;
        -webkit-animation-delay:0.55s;
        -moz-animation-delay:0.55s;
}
#altcircularG_3{
    top:0;
    left:23px;
    animation-delay:0.69s;
        -o-animation-delay:0.69s;
        -ms-animation-delay:0.69s;
        -webkit-animation-delay:0.69s;
        -moz-animation-delay:0.69s;
}
#altcircularG_4{
    right:6px;
    top:6px;
    animation-delay:0.83s;
        -o-animation-delay:0.83s;
        -ms-animation-delay:0.83s;
        -webkit-animation-delay:0.83s;
        -moz-animation-delay:0.83s;
}
#altcircularG_5{
    right:0;
    top:23px;
    animation-delay:0.97s;
        -o-animation-delay:0.97s;
        -ms-animation-delay:0.97s;
        -webkit-animation-delay:0.97s;
        -moz-animation-delay:0.97s;
}
#altcircularG_6{
    right:6px;
    bottom:6px;
    animation-delay:1.1s;
        -o-animation-delay:1.1s;
        -ms-animation-delay:1.1s;
        -webkit-animation-delay:1.1s;
        -moz-animation-delay:1.1s;
}
#altcircularG_7{
    left:23px;
    bottom:0;
    animation-delay:1.24s;
        -o-animation-delay:1.24s;
        -ms-animation-delay:1.24s;
        -webkit-animation-delay:1.24s;
        -moz-animation-delay:1.24s;
}
#altcircularG_8{
    left:6px;
    bottom:6px;
    animation-delay:1.38s;
        -o-animation-delay:1.38s;
        -ms-animation-delay:1.38s;
        -webkit-animation-delay:1.38s;
        -moz-animation-delay:1.38s;
}

@keyframes bounce_altcircularG{
    0%{
        transform:scale(1);
    }

    100%{
        transform:scale(.3);
    }
}
@-o-keyframes bounce_altcircularG{
    0%{
        -o-transform:scale(1);
    }

    100%{
        -o-transform:scale(.3);
    }
}
@-ms-keyframes bounce_altcircularG{
    0%{
        -ms-transform:scale(1);
    }

    100%{
        -ms-transform:scale(.3);
    }
}
@-webkit-keyframes bounce_altcircularG{
    0%{
        -webkit-transform:scale(1);
    }

    100%{
        -webkit-transform:scale(.3);
    }
}
@-moz-keyframes bounce_altcircularG{
    0%{
        -moz-transform:scale(1);
    }

    100%{
        -moz-transform:scale(.3);
    }
}
`;

export const spinner31Javascript = 'import ddd from \'ddd\';\n\nclass Animator extends ddd {\nexport const ddd = "ddd"}';