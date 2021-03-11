import {ImageGenerator} from './module-a.js';

export const images = {
    mario: new ImageGenerator('50px', '../public/img/mario.png'),
    mushroom: new ImageGenerator('100px', '../public/img/mushroom.png'),
    logo: new ImageGenerator('150px', '../public/img/LOGO.svg'),
    wallpaper: new ImageGenerator('300px', '../public/img/wallpaper.jpg')
}



