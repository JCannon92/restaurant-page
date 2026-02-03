import '../styles/menu.css'
import beefVindalooPicture from '../img/beef-vindaloo.jpg'
import palakPaneerPicture from '../img/palak-paneer.jpg'
import chickenKormaPicture from '../img/chicken-korma.jpg'
import prawnBaltiPicture from '../img/prawn-balti.jpg'
import chickenBiryaniPicture from '../img/chicken-biryani.jpg'

const renderMenuPage = function() {
    const content = document.querySelector('div#content');

    //Create curry menu section    
    const menuHeading = document.createElement('h1');
        menuHeading.id = 'curry-menu';
        menuHeading.textContent = 'Curry Menu';
    const menuSection = document.createElement('section');
        menuSection.id = 'curry-menu';

    //Create menu and attach each item to menu section
    const curryMenu = [
        [
            'Beef Vindaloo',
            'A hot and spicy favourite - tender beef  slow cooked in an intense and tangy curry sauce.',
            beefVindalooPicture
        ],
        [
            'Palak Paneer',
            'A classic - golden paneer smothered in a rich and delicious spinach curry.',
            palakPaneerPicture
        ],
        [
            'Chicken Korma',
            'One for all you spice avoiders out there - marinated chicken pieces in a sweet and creamy sauce - no heat at all!',
            chickenKormaPicture
        ],
        [
            'King Prawn Balti',
            'Spicy and aromatic king prawns in a deep tomato-based sauce.',
            prawnBaltiPicture
        ],
        [
            'Chicken Biryani',
            'Another classic - beautifully fluffy spiced rice with slow-cooked chicken.',
            chickenBiryaniPicture
        ]
    ]

    //Attach all menu items to the menu section
    curryMenu.forEach(attachMenuItem);

    content.appendChild(menuHeading);
    content.appendChild(menuSection);

    function attachMenuItem (element) {

        const [name, description, picture] = element;

        const menuItem = document.createElement('div');
            menuItem.id = name;
            menuItem.classList.add('menu-item');

        const menuItemName = document.createElement('h3');
            menuItemName.textContent = name;

        const menuItemPicture = document.createElement('img');
            menuItemPicture.src = picture;
            menuItemPicture.alt = `picture of ${name} menu item`;

        const menuItemDescription = document.createElement('p');
            menuItemDescription.textContent = description;

        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemPicture);
        menuItem.appendChild(menuItemDescription);

        menuSection.appendChild(menuItem);
    }

    
}

export default renderMenuPage;

