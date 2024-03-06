import aboutImage from './assets/about-image.jpg';

function createAbout() {
    const container = document.getElementById('content');

    const header = document.createElement('h1');
    header.innerText = 'About Us: Thistle & Heather Tavern';

    const image = document.createElement('img');
    image.src = aboutImage;

    const menuContent = document.createElement('div');
    menuContent.innerHTML = `
    <h2>Our Founding Inspiration</h2>
    <p>Nestled in the heart of Edinburgh's historic Old Town, Thistle & Heather Tavern is more than just a restaurant; it's a celebration of Scotland's rich cultural heritage and culinary traditions.</p>
    
    <h2>A Journey Through Scotland's Heart</h2>
    <p>Founded by a group of friends with a passion for Scottish cuisine and a deep appreciation for the country's natural beauty, Thistle & Heather Tavern was born out of a desire to create a welcoming space where locals and visitors alike could come together to savor the flavors of Scotla</p>
    
    <h2>Crafting Culinary Classics with a Modern Twist</h2>
    <p>Drawing on their own Scottish roots and a commitment to sourcing the finest local ingredients, the founders worked tirelessly to craft a menu that pays homage to Scotland's culinary classics while also incorporating modern twists and flavors.</p>
    
    <h2>A Hub of Creativity and Community</h2>
    <p>But Thistle & Heather Tavern is more than just a place to enjoy delicious food; it's a gathering place for the community, a hub of creativity and conversation, and a home away from home for all who walk through its doors.</p>
    
    <h2>Join Us on a Culinary Adventure</h2>
    <p>With its cozy interior and warm hospitality, Thistle & Heather Tavern invites you to embark on a culinary adventure through Scotland's heart, one delicious dish at a time.</p>
    `
    container.appendChild(header);
    container.appendChild(image);
    container.appendChild(menuContent);
}



export { createAbout };