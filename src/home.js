import restaurantInterior from './assets/restaurant-interior.jpg';

function createHome() {
    const container = document.getElementById('content');

    const header = document.createElement('h1');
    header.innerText = 'Thistle & Heather Tavern';

    const image = document.createElement('img');
    image.src = restaurantInterior;

    const span = document.createElement('span');
    span.innerText = 'Embark on a Gastronomic Journey at Thistle & Heather Tavern: Where Scottish Tradition Meets Culinary Innovation!';

    const para = document.createElement('p');
    para.innerHTML = `
            Welcome to Thistle & Heather Tavern, where the warm embrace of Scottish hospitality meets the culinary delights of the Highlands. Nestled in the heart of Edinburgh's historic Old Town, our restaurant offers a cozy and inviting atmosphere, perfect for a gathering of friends or a romantic evening out.
            <br /><br />
            Indulge in a menu inspired by Scotland's rich culinary heritage, featuring traditional dishes with a modern twist. From hearty stews made with locally sourced ingredients to succulent Scottish salmon grilled to perfection, every bite tells a story of the land and sea that surrounds us.
            <br /><br />
            Pair your meal with a fine selection of Scotch whiskies from renowned distilleries across the country, or choose from our curated list of Scottish ales and craft beers. Our knowledgeable staff is always on hand to guide you through our extensive drinks menu, ensuring a truly immersive dining experience.
            <br /><br />
            Whether you're a visitor to Scotland or a local looking for a taste of home, Thistle & Heather Tavern invites you to savor the flavors of this beautiful land in every dish we serve.
    `;

    const adressPara = document.createElement('p');
    adressPara.classList.add('adress');
    adressPara.innerHTML = `
        <span>Adress: </span>Thistle & Heather Tavern, 42 Royal Mile, Edinburgh, EH1 1QN, Scotland
    `;

    container.appendChild(header);
    container.appendChild(image);
    container.appendChild(span);
    container.appendChild(para);
    container.appendChild(adressPara);
}

export { createHome };