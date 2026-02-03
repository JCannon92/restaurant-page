import "../styles/home.css";
import logoImage from "../img/logo.png";

const renderHomePage = function() {
    const content = document.querySelector('div#content');

    const introSection = document.createElement('section');
        introSection.id = 'introduction';

        const welcomeText = document.createElement('p');
            welcomeText.textContent = "Welcome to Curry on Down!";
        const introText = document.createElement('p');
            introText.textContent = 'We make the most delicious curries in town.';

    introSection.appendChild(welcomeText);
    introSection.appendChild(introText);

    content.appendChild(introSection);
};

export default renderHomePage;
