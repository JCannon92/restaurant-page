function renderContactUsPage() {
    const content = document.querySelector('div#content');

    const contactUsHeading = document.createElement('h1');
        contactUsHeading.id = 'contact-us';
        contactUsHeading.textContent = 'Contact Us';
    const contactUsSection = document.createElement('section');
        contactUsSection.id = 'contact-us';
    
        const contactUsEmail = document.createElement('p');
            contactUsEmail.textContent = 'Email us at: curryqueries@curryondown.com';

        const contactUsPhone = document.createElement('p');
            contactUsPhone.textContent = 'Phone us at: 0123456789';

    contactUsSection.appendChild(contactUsEmail);
    contactUsSection.appendChild(contactUsPhone);
    content.appendChild(contactUsHeading);
    content.appendChild(contactUsSection);

}

export default renderContactUsPage