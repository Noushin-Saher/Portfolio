document.addEventListener('DOMContentLoaded', function () {
    const hackathonsContainer = document.getElementById('hackathons-container');

    // Array of hackathons with details
    const hackathons = [
        {
            title: 'Sustain Solutions',
            description: 'The Sustain Solutions project, developed as part of the Google Developer Students Club, is a user-friendly website where individuals can upload pictures and descriptions of issues affecting Sustainable Development Goals (SDGs) in their communities. By providing a simple platform for sharing and communicating these problems, the website aims to bridge the gap between citizens and authorities, making it easier for officials to understand and address sustainability-related challenges.',
            link: 'https://youtu.be/AE940WbfEDo?si=2Z4pqB1MyqOaKWyf'
        },
        {
            title: 'Tata Innovent',
            description: 'We submitted our idea that is - AutoInsight, it is an innovative application that uses generative AI and frameworks like Rasa to revolutionize automotive exploration. It offers interactive 3D vehicle models, personalized car recommendations through an AI chatbot, and intelligent query resolution, providing a seamless and engaging customer experience.',
            link: 'https://drive.google.com/drive/folders/1hh4nCgRcTP1STYtT_xpmLoVpKOwp5SbB?usp=sharing'
        },
        {
            title: 'Bharatiya Antariksh',
            description: 'Our idea is to develop a geospatial web based portal for estimating the power generated using solar energy based on size of housing rooftops. The user can choose area and based on this, it determines how much solar energy can be generated at building level using existing solar radiation related satellite data and some assumptions of power related configuration of solar cells.',
            link: 'https://drive.google.com/drive/folders/1hh4nCgRcTP1STYtT_xpmLoVpKOwp5SbB?usp=sharing'
        },
        {
            title: 'Smart India Hackathon',
            description: 'Our Idea was related to water Hyacinth plants, since they are spread quickly over water bodies, forming dense mats that block sunlight, deplete oxygen levels, and disrupt aquatic ecosystems. Our solution tries to use this plant for other useful Purpose.',
            link: 'https://drive.google.com/drive/folders/1hh4nCgRcTP1STYtT_xpmLoVpKOwp5SbB?usp=sharing' // No link for this hackathon
        }
    ];

    // Generate and insert HTML for each hackathon
    hackathons.forEach(hackathon => {
        const hackathonDiv = document.createElement('div');
        hackathonDiv.className = 'hackathon-item';

        const title = document.createElement('h3');
        title.textContent = hackathon.title;

        const description = document.createElement('p');
        description.textContent = hackathon.description;

        hackathonDiv.appendChild(title);
        hackathonDiv.appendChild(description);

        // Only add the link if it exists
        if (hackathon.link) {
            const link = document.createElement('a');
            link.href = hackathon.link;
            link.textContent = 'View Presentation';
            link.target = '_blank'; // Opens the link in a new tab
            hackathonDiv.appendChild(link);
        }

        hackathonsContainer.appendChild(hackathonDiv);
    });
});
