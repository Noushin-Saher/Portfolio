document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: 4,
            title: 'Quiz App',
            image: 'quizz.png',
            description: 'I created quiz application using React, Javascript, CSS, and backened using Xampp. It allows users to create quizzes and edit them and also delete them, also allow others to attempt quizzes and get immediate feedback about their scores.'
        },
        {
            id: 5,
            title: 'Carve Your Wish',
            image: 'carve.png',
            description: 'We developed an application it acts as an interface between user and carpeter. User can login and search nearest carpenters available with good background and users can also upload their desirable product. We used Tkinter module in python to develop it and backend as MySQL.'
        },
        {
            id: 6,
            title: 'Menu Master',
            image: 'food.png',
            description: 'I am also working on a mini project which is an food ordering application. It facilitates the students and teachers to order food in campus which saves time and effort and once the food is ready they can go collect their food which saves waiting time.'
        },
        {
            id: 1,
            title: 'To Do List',
            image: 'todolist.jpg',
            description: 'I have done To Do List as a part of CodSoft internship project using Python. This application helps users manage and organize their tasks efficiently. It aims to create a command-line or GUI based application, allowing users to create, update and track their to-do lists.'
        },
        {
            id: 2,
            title: 'Calculator',
            image: 'calc.png',
            description: 'I have done Calculator as a part of CodSoft internship project. It is a python code to create a simple calculator with basic arithmetic operations, Prompt the user to input two numbers and an operation of their choice. It performs the calculation and displays the result.'
        },
        {
            id: 3,
            title: 'Password Generator',
            image: 'password.png',
            description: 'I have done Password Generator as a part of CodSoft internship project and I created this using Python. This project aims to create a Strong and Random passwords using Python, allowing users to specify the length and complexity of the password.'
        },
    ];

    const projectsContainer = document.getElementById('projects-container');

    projects.forEach(project => {
        const projectBox = document.createElement('div');
        projectBox.className = 'project-box';

        const projectImage = document.createElement('div');
        projectImage.className = 'project-image';
        projectImage.style.backgroundImage = `url(${project.image})`;

        const projectHeading = document.createElement('div');
        projectHeading.className = 'project-heading';
        projectHeading.textContent = project.title;

        const projectDescription = document.createElement('div');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;

        projectBox.appendChild(projectImage);
        projectBox.appendChild(projectHeading);
        projectBox.appendChild(projectDescription);

        projectsContainer.appendChild(projectBox);
    });
});
