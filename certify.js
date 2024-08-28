// script-certify.js

document.addEventListener('DOMContentLoaded', function() {
    const certificationsContent = `
        <h2>Certifications</h2>
        <div class="certifications-details">
            <ul>
                <li>Certificate in Cyber Security and Ethical Hacking Workshop.</li>
                <li>Certificate in French Language.</li>
                <li>Online Internship Certificate in CodSoft.</li>
                <li>Delegance Certificate in Toastmasters International Jubilance.</li>
                <li>Certificate for Paper Presentation Contest.</li>
                <li>Certificate for Poster Presentation Contest.</li>
                <li>Certificate of Energy Literacy by Swaraj Foundation.</li>
                <li>ISTE Student Chapter Certificates.</li>
                <li>Sustainable Development Goals Certificates.</li>
                <li>Certificates in Infosys SpringBoard.</li>
                <li>Certificates in Great Learning.</li>
                <li>British Council English Strokes Course Completion Certificates.</li>
                <li>Coursera Foundations of Cyber Security Certificate.</li>
                <li>IIT Madras Shaastrs 2024 Certificate of Excellence.</li>
                <li>Coursera DeepLearning.AI Certificate.</li>
                <li>Kirit Certificate of Participation.</li>
                <li>EduSkills RPA Developer Virtual Internship Certificate.</li>
                <li>EduSkills Networking Virtual Internship.</li>
                <li>SkillDzire Full Stack Java Certificate.</li>
            </ul>
        </div>
    `;
    
    // Update Certifications content
    function updateCertificationsContent() {
        document.getElementById('certify').innerHTML = certificationsContent;
    }

    // Initial update when page loads
    updateCertificationsContent();
});
