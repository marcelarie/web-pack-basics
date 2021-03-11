import {ImageGenerator} from './module-a.js';


const image01 = new ImageGenerator('100px', '../public/img/mario.png');
const image02 = new ImageGenerator('100px', '../public/img/mushroom.png');
const image03 = new ImageGenerator('100px', '../public/img/LOGO.svg');
const image04 = new ImageGenerator('100px', '../public/img/wallpaper.jpg');



document.getElementById('images').insertAdjacentHTML('beforeend', image01.returnTemplate());
document.getElementById('images').insertAdjacentHTML('beforeend', image02.returnTemplate());
document.getElementById('images').insertAdjacentHTML('beforeend', image03.returnTemplate());
document.getElementById('images').insertAdjacentHTML('beforeend', image04.returnTemplate());


