document.addEventListener('DOMContentLoaded', function() {
    const contacts = [
        {
            name: 'GitHub',
            link: 'https://github.com/sampleusername',
            iconClass: 'fab fa-github'
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/sampleusername',
            iconClass: 'fab fa-linkedin'
        },
        {
            name: 'Email',
            link: 'mailto:sample@example.com',
            iconClass: 'fas fa-envelope'
        }
    ];

    const container = document.getElementById('contact-container');

    contacts.forEach(contact => {
        const contactLink = document.createElement('a');
        contactLink.className = 'contact-link';
        contactLink.href = contact.link;
        contactLink.target = '_blank';

        const contactIcon = document.createElement('i');
        contactIcon.className = contact.iconClass + ' contact-icon';

        const contactText = document.createTextNode(' ' + contact.name);

        contactLink.appendChild(contactIcon);
        contactLink.appendChild(contactText);
        container.appendChild(contactLink);
    });
});
