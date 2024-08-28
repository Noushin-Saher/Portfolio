// script-skills.js

document.addEventListener('DOMContentLoaded', function() {
    const skillsContent = `
        <h2>Skills</h2>
        <div class="skills-section">
            <h3>Hard Skills</h3>
            <div class="hard-skills">
                <img src="htlm.png" alt="Skill 1">
                <img src="css.png" alt="Skill 2">
                <img src="Java-Logo.png" alt="Skill 3">
                <img src="python.png" alt="Skill 4">
                <img src="dsa.png" alt="Skill 5">
                <img src="mysql.png" alt="Skill 6">
                <img src="react.png" alt="Skill 7">
            </div>
            <h3 class="soft-skills-heading">Soft Skills</h3>
            <ul class="soft-skills">
                <li>Multitasking</li>
                <li>Time Management</li>
                <li>Decision Making</li>
                <li>Problem Solving</li>
                <li>Leadership Qualities</li>
                <li>Good Communication</li>
            </ul>
        </div>
    `;

    // Update Skills content
    function updateSkillsContent() {
        document.getElementById('skills').innerHTML = skillsContent;
    }

    // Initial update when page loads
    updateSkillsContent();
});
