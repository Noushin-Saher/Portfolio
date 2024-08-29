document.addEventListener('DOMContentLoaded', function() {
    const aboutContent = `
        <div class="row1">
            <div class="col-md-12">
                <table class="table table-bordered about-table">
                    <tbody>
                        <tr>
                            <td>MOHAMMED NOUSHIN SAHER</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="about-description">
            <div class="row">
                <div class="col-md-12">
                    <p>I am Mohammed Noushin Saher, a dedicated third-year B.Tech Computer Science student with a passion for technology and innovation, possessing a robust blend of technical prowess and effective soft skills. I am highly focused on achieving academic excellence and constantly seek opportunities to enhance my skills and knowledge. I am eager to explore and contribute to challenging projects that align with my interests and aspirations in the tech industry. I am currently working on writing a <span class="highlight">Research Paper</span> on our working project that is A Machine Learning Framework for Tree Survival Prediction to achieve Sustainable Development Goals. Also, I am one of the Sustainable Development Goals club <span class="highlight">Main Coordinator</span> among 30 students. I held second position in Poster Presentation in Robotics and also held Second Position in coding round in SRKR Technical event.</p>
                    <h2>Coding Profiles</h2>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="https://leetcode.com/u/Noushin_Saher/" target="_blank"><i class="cib-leetcode"></i>Leetcode</a></li><br>
                        <li class="list-inline-item"><a href="https://www.codechef.com/users/noushin_saher" target="_blank"><i class="fab fa-codechef"></i>Codechef</a></li><br>
                        <li class="list-inline-item"><a href="https://www.hackerrank.com/profile/22b01a05c0" target="_blank"><i class="fab fa-hackerrank"></i>HackerRank</a></li><br>
                        <li class="list-inline-item"><a href="https://codeforces.com/profile/Noushin_Saher" target="_blank"><i class="fab fa-codeforces"></i>Codeforces</a></li><br>
                        <!-- Add more links/icons as needed -->
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    // Update About Me content
    function updateAboutMeContent() {
        document.getElementById('aboutContent').innerHTML = aboutContent;
    }

    // Initial update when page loads
    updateAboutMeContent();
});
