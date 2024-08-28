document.addEventListener('DOMContentLoaded', function() {
    const internships = [
        {
            name: 'Swecha Summer of AI',
            link: 'swecha.pdf',
            description: 'Swecha Summer of AI is a virtual internship. Swecha AI internship program, helped me delving into the realm of data collection and analysis using the innovative Kobo Collect app. It was a rewarding experience working on data collection and honing our skills in cutting-edge technologies. This internship gave basic knowledge of Large Language Models and Natural Language Processing.'
        },
        {
            name: 'CodSoft',
            link: 'codsoft.pdf',
            description: 'It is a 4 weeks Virtual Internship Program in Python Programming at CodSoft. As a part of this internship I have created three python projects - Password generator, Basic Calculator, To-Do List. Password generator aims to create a Strong and Random passwords using Python, allowing users to specify the length and complexity of the password. Basic calculator is a python project to create a simple calculator with basic arithmetic operations, It prompts the user to input two numbers and an operation of their choice. It performs the calculation and displays the result. To do list application helps users manage and organize their tasks efficiently. It aims to create a command-line or GUI based application, allowing users to create, update and track their to-do lists.'
        },
        
        {
            name: 'SkillDzire Full Stack through Java',
            link: 'skilldzire.pdf',
            description: 'SkillDzire is a 2 months virtual internship. It focused on full stack through Java. We learned how to develop applications through java.'
        }
    ];

    const container = document.getElementById('internships-container');

    internships.forEach(internship => {
        const internshipItem = document.createElement('div');
        internshipItem.className = 'internship-item';

        const internshipLink = document.createElement('a');
        internshipLink.className = 'internship-link';
        internshipLink.href = internship.link;
        internshipLink.textContent = internship.name;
        internshipLink.target = '_blank';

        const internshipDescription = document.createElement('div');
        internshipDescription.className = 'internship-description';
        internshipDescription.textContent = internship.description;

        internshipItem.appendChild(internshipLink);
        internshipItem.appendChild(internshipDescription);
        container.appendChild(internshipItem);
    });
});
