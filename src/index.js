import './style.css'
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createAbout } from './about.js';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const aboutBtn = document.getElementById('about');
const container = document.getElementById('content');

homeBtn.addEventListener('click', function() {
    container.innerHTML= '';
    createHome();
})

menuBtn.addEventListener('click', function() {
    container.innerHTML= '';
    createMenu();
});

aboutBtn.addEventListener('click', function() {
    container.innerHTML= '';
    createAbout();
});

createHome();