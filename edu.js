// script-education.js

document.addEventListener('DOMContentLoaded', function() {
    const educationContent = `
        <div class="education-details">
            <div class="education-table">
                <h3 style="color: #16a7b1;">B.Tech</h3>
                <h3>2022-2026</h3>
                <ul>
                    <li>Shri Vishnu Engineering College for Women</li>
                    <li>Computer Science Engineering</li>
                    <li>CGPA: 8.86</li>
                    <li>Also Pursuing minor degree in Cyber Security</li>
                </ul>
            </div>
            <div class="education-table">
                <h3 style="color: #16a7b1;">Intermediate</h3>
                <h3>2020-2022</h3>
                <ul>
                    <li>Bhashyam Junior College</li>
                    <li>CGPA: 90.1</li>
                    <li>MPC Stream</li>
                </ul>
            </div>
            <div class="education-table">
            <h3 style="color: #16a7b1;">Schooling</h3>
                <h3>2020</h3>
                <ul>
                    <li>Bhashyam English Medium School</li>
                    <li>GPA: 10</li>
                </ul>
            </div>
            
        </div>
    `;
    
    // Update Education content
    function updateEducationContent() {
        document.getElementById('edu').innerHTML = educationContent;
    }

    // Initial update when page loads
    updateEducationContent();
});
