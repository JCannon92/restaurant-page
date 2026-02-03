import renderHomePage from "./scripts/home.js";
import renderMenuPage from "./scripts/menu.js";


renderHomePage();

function clearContent() {
    const content = document.querySelector('div#content');
        content.replaceChildren();
}

//Add nav button event listerns to render each page
const homeButton = document.querySelector('button#home');
    homeButton.addEventListener('click', () => {
        clearContent();
        renderHomePage();
    });

const menuButton = document.querySelector('button#menu');
    menuButton.addEventListener('click', () => {
        clearContent();
        renderMenuPage();
    })
