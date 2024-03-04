import menuImage from './assets/menu-image.jpg';

function createMenu() {
    const container = document.getElementById('content');

    const header = document.createElement('h1');
    header.innerText = 'Menu';

    const image = document.createElement('img');
    image.src = menuImage;



    container.appendChild(header);
    container.appendChild(image);
}



export { createMenu };