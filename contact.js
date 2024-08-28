document.addEventListener('DOMContentLoaded', function() {
    const contacts = [
        {
            iconClass: 'fab fa-github',
            link: 'https://github.com/Mohammed-Noushin-Saher',
            text: 'GitHub',
            isLink: true
        },
        {
            iconClass: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/noushin-saher-711024259',
            text: 'LinkedIn',
            isLink: true
        },
        {
            iconClass: 'fas fa-envelope',
            link: '',
            text: 'mdnoushinsaher829@gmail.com',
            isLink: false
        }
    ];

    const container = document.getElementById('contact-container');

    contacts.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';

        const icon = document.createElement('i');
        icon.className = contact.iconClass;
        contactItem.appendChild(icon);

        if (contact.isLink) {
            const link = document.createElement('a');
            link.href = contact.link;
            link.textContent = contact.text;
            link.target = '_blank';
            contactItem.appendChild(link);
        } else {
            const span = document.createElement('span');
            span.textContent = contact.text;
            contactItem.appendChild(span);
        }

        container.appendChild(contactItem);
    });
});
