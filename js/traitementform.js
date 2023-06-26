//annimation logo brand 

const image = document.querySelector('#brand');

let angle = 0;
setInterval(() => {
 angle += 1;
 image.style.transform = `rotate(${angle}deg)`;
}, 10);