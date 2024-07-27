import './style.css'
import { createHeader } from './header';
import { loadHome } from "./home";
import { createFooter } from './footer';

import { loadAbout } from './about';

const init = () => {
    createHeader();
    loadHome();
    createFooter();
}

init();

const aboutBtn = document.querySelector('.about-btn');
aboutBtn.addEventListener('click', () => loadAbout())

const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => loadHome())