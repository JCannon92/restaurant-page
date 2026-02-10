import '../styles/about-us.css';

function renderAboutUsPage() {
    const content = document.querySelector('div#content');
    

    const aboutUsHeading = document.createElement('h1');
        aboutUsHeading.id = 'about-us';
        aboutUsHeading.textContent = 'About Us';
    const aboutUsSection = document.createElement('section');
        aboutUsSection.id = 'about-us';

        const aboutUsText = document.createElement('p');
        aboutUsText.textContent = 'We are a family owned local curry house that specialises in home-made cooking, just the way your grandma made her curries.';

        const aboutUsLocationText = document.createElement('p');
            aboutUsLocationText.textContent = 'You can find us here:';

        const aboutUsMap = document.createElement('iframe');
            aboutUsMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57115.28846602097!2d133.2182411016437!3d-26.52959352304822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b29d777adc25683%3A0xe48fb0803f3d655d!2sDe%20Rose%20Hill%20SA%205724!5e0!3m2!1sen!2sau!4v1770683981128!5m2!1sen!2sau';
            aboutUsMap.width = 650;
            aboutUsMap.height = 450;
            aboutUsMap.loading = 'lazy';

    aboutUsSection.appendChild(aboutUsText);
    aboutUsSection.appendChild(aboutUsLocationText);
    aboutUsSection.appendChild(aboutUsMap);
    content.appendChild(aboutUsHeading);
    content.appendChild(aboutUsSection);

}

export default renderAboutUsPage;

