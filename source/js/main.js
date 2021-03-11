import {images} from './module-b.js';

const render = (template) => {
    document.getElementById('images').insertAdjacentHTML('beforeend', template);
}

render(images.mario.returnTemplate());
render(images.mushroom.returnTemplate());
render(images.logo.returnTemplate());
render(images.wallpaper.returnTemplate());
