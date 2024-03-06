import menuImage from './assets/menu-image.jpg';

function createMenu() {
    const container = document.getElementById('content');

    const header = document.createElement('h1');
    header.innerText = 'Menu';

    const image = document.createElement('img');
    image.src = menuImage;

    const menuContent = document.createElement('div');
    menuContent.innerHTML = `
    <h2>Starters</h2>
    <ul>
        <li><span class="menu-item">Cullen Skink: </span><p>A creamy Scottish soup with smoked haddock, potatoes, and onions.</p></li>
        <li><span class="menu-item">Haggis Bon Bons: </span><p>Deep fried haggis balls served with a whisky cream sauce.</p></li>
        <li><span class="menu-item">Scottish Smoked Salmon Platter: </span><p>Locally sourced smoked salmon served with capers, red onions, and homemade oatcakes.</p></li>
    </ul>

    <h2>Mains</h2>
    <ul>
        <li><span class="menu-item">Highland Beef Wellington: </span><p>Prime Scottish beef fillet wrapped in puff pastry, served with buttery mash, seasonal vegetables, and a rich red wine jus.</p></li>
        <li><span class="menu-item">Loch Ness Salmon Fillet: </span><p>Grilled Scottish salmon fillet served with a lemon dill sauce, roasted potatoes, and wilted greens.</p></li>
        <li><span class="menu-item">Vegetarian Haggis Neeps & Tatties: </span><p>Vegetarian haggis served with mashed turnips, potatoes, and a whisky cream sauce.</p></li>
    </ul>

    <h2>Desserts</h2>
    <ul>
        <li><span class="menu-item">Cranachan: </span><p>A traditional Scottish dessert made with whipped cream, raspberries, toasted oats, and Scottish heather honey.</p></li>
        <li><span class="menu-item">Sticky Toffee Pudding: </span><p>Moist sponge cake made with dates, covered in a rich toffee sauce, served with vanilla ice cream.</p></li>
        <li><span class="menu-item">Scottish Tablet: </span><p>Homemade Scottish tablet made with sugar, butter, and condensed milk, served with a drizzle of caramel sauce.</p></li>
    </ul>

    <h2>Drinks</h2>
    <ul>
        <li><span class="menu-item">Single Malt Scotch Whiskies: </span><p>Choose from a selection of single malt Scotch whiskies, each with its own unique flavor profile.</p></li>
        <li><span class="menu-item">Craft Beers: </span><p>Explore our range of locally brewed craft beers, featuring traditional Scottish ales and modern IPA styles.</p></li>
        <li><span class="menu-item">Non-Alcoholic Beverages: </span><p>Enjoy a variety of non-alcoholic options including Scottish sparkling water, artisanal sodas, and fresh fruit juices.</p></li>
    </ul>
    `
    container.appendChild(header);
    container.appendChild(image);
    container.appendChild(menuContent);
}



export { createMenu };