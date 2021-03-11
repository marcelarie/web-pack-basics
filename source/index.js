import {images} from './js/module-b.js';
import {render} from './js/main.js';
import "./sass/main.scss";

import img from '../public/img/mario.png';


render(images.mario.returnTemplate());
render(images.mushroom.returnTemplate());
render(images.logo.returnTemplate());
render(images.wallpaper.returnTemplate());

alert('HELLO WEBPACK');



