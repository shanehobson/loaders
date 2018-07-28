export const spinner25HTML = `
<div class="spinner25-container">
  <div class="spinner25" />
</div>
`;

export const spinner25CSS = spinnerColor => `
.spinner25-container {
  margin: 25px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
}

.spinner25 {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: ${spinnerColor};

  -webkit-animation: flip-2-hor-top-bck 0.75s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite alternate both;
  animation: flip-2-hor-top-bck 0.75s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite alternate both;
}

@-webkit-keyframes flip-2-hor-top-bck {
        0% {
        -webkit-transform: translateY(0) rotateX(0) scale(1);
                transform: translateY(0) rotateX(0) scale(1);
        -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
        }
        100% {
        -webkit-transform: translateY(-100%) rotateX(180deg) scale(.4);
                transform: translateY(-100%) rotateX(180deg) scale(.4);
        -webkit-transform-origin: 50% 120%;
                transform-origin: 50% 120%;
        }
}
@keyframes flip-2-hor-top-bck {
        0% {
        -webkit-transform: translateY(0) rotateX(0) scale(1);
                transform: translateY(0) rotateX(0) scale(1);
        -webkit-transform-origin: 50% 0%;
                transform-origin: 50% 0%;
        }
        100% {
        -webkit-transform: translateY(-100%) rotateX(180deg) scale(.4);
                transform: translateY(-100%) rotateX(180deg) scale(.4);
        -webkit-transform-origin: 50% 120%;
                transform-origin: 50% 120%;
        }
}
`;