import "../styles/home.css";
import logoImage from "../img/logo.png";

const initialLoad = (function() {
    const content = document.querySelector('div#content');

    const introSection = document.createElement('section');
        introSection.id = 'introduction';

        const headerContainer = document.createElement('div');
            headerContainer.id = 'header-container';

            const logo = document.createElement('img');
                logo.id = 'logo';
                logo.src = logoImage;
            const mainHeading = document.createElement('h1');
                mainHeading.id = 'main-heading';
                mainHeading.textContent = 'Curry on Down!';

        const welcomeText = document.createElement('p');
            welcomeText.textContent = "Welcome to Curry on Down!";
        const introText = document.createElement('p');
            introText.textContent = 'We make the most delicious curries in town.';

    headerContainer.appendChild(logo);
    headerContainer.appendChild(mainHeading);
    introSection.appendChild(headerContainer);
    introSection.appendChild(welcomeText);
    introSection.appendChild(introText);

    content.appendChild(introSection);
})();

export default initialLoad;
