import './resume.css';
import resumeImage from './assets/Images/IMG_0067.JPG';

function Resume() {
    return (
        <>
            <ContactInformation />
            <ObjectiveStatement />
            <Education />
            <RelevantCoursework />
            <RelevantSkills />
            <AchievementsandCertificationss />
            <WorkExperience />
            <Projects />
        </>
    );
}

function ContactInformation() {
    return (
        <section className="contact-info">
        <h1>Karim Hussien</h1>
        <p><a href="mailto:KHussien00@outlook.com">KHussien00@outlook.com</a></p>
        <p><a href="https://www.linkedin.com/in/karim-hussien-207804261" target="_blank" rel="noreferrer">LinkedIn profile</a></p>
        <p>1-(904)-806-6321</p>
        <p>Saint Augustine, FL</p>
        <img src={resumeImage} className="profile-picture" alt='Karim Hussien'/>
        </section>
    );
}

function ObjectiveStatement() {
    return (
        <section className="objective-statement">
            <h2>Objective Statement</h2>
            <p>Computer Science graduate, seeking a permanent position as a full-stack, back-end or front-end developer or as a software engineer. </p>
            <p>Seeking to further professional skills and build critical client applications to serve customer needs.</p>
        </section>
    );
}

function Education() {
    return (
        <section className="education">
            <h2>Education</h2>
            <p>University of North Florida <span className="space-container">Jacksonville, FL.</span></p>
            <p><i>Bachelor of Science in Computer Science</i></p>
            <p>Major in Computer Science</p>
            <ul className="education-list">
                <li>GPA: 3.96 / 4.00</li>
                <li>Made the Dean’s List for Spring and Fall terms for 2021-2023.</li>
            </ul>
            <p>Saint Johns River State College <span className="space-container-2">Saint Augustine, FL.</span></p>
            <p><i>Associate in Arts</i></p>
        </section>
    );
}

function RelevantCoursework() {
    return (
        <section className="relevant-coursework">
            <h2>Relevant Coursework</h2>
            <p><b>Programming I</b>: Learned to use C and Linux commands.</p>
            <p><b>Programming II</b>: Learned to use Java and Eclipse.</p>
            <p><b>Internet Programming</b>: Learned to use HTML, CSS, JavaScript, PHP and Node.js.</p>
            <p><b>Database</b>: Learned to build relational databases and use SQL.</p>
            <p><b>Software Engineering</b>: Learned about the SDLC and Agile and Scrum methodologies.</p>
        </section>
    );
}

function RelevantSkills() {
    return (
        <section>
            <h2>Relevant Skills</h2>
            <ul>
                <li>C</li>
                <li>Java</li>
                <li>C#</li>
                <li>.NET</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Node.js</li>
                <li>React</li>
                <li>SQL Languages</li>
                <li>Linux</li>
                <li>Eclipse</li>
                <li>Visual Studio Code</li>
                <li>Version control software (Git and GitHub)</li>
                <li>Cloud Computing (Microsoft Azure)</li>
            </ul>
        </section>
    );
}

function AchievementsandCertificationss() {
    return (
        <section className="achievements-certifications">
            <h2>Achievements and Certifications</h2>
            <ul>
                <li>Earned the Certificate for the Microsoft Azure Fundamentals Exams.</li>
                <li>Member of Phi Kappa Phi, NSCS, Phi Theta Kappa, and Upsilon Pi Epsilon.</li>
                <li>Graduated Summa Cum Laude.</li>
            </ul>
        </section>
    );
}

function WorkExperience() {
    return (
        <section className="work-experience">
            <h2>Work Experience</h2>
            <p>Nautica <span className="space-container-3">Saint Augustine, FL.</span></p>
            <p><i>Sales Associate</i> <span className="space-container-4">June 2018 <span className="spacing-required">to Present.</span></span></p>
            <ul className="work-experience-list">
                <li>Excelled in customer service by greeting customers and ascertaining their needs. </li>
                <li>Worked collaboratively in a team environment and enhanced operational efficiency.</li>
                <li>Entrusted with advanced responsibilities including item voiding and price adjustments, demonstrating trust and competence beyond standard duties.</li>
                <li>Provided technical support with Microsoft 365 applications and company software.</li>
            </ul>
        </section>
    );
}

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <ul>
                <li><b><a href="https://www.alexkeo.com/" target="_blank" rel="noreferrer">Osprey Productivity Tool</a></b> (Java, SQL): 
                    Worked collaboratively in a team environment to create a full-stack website that offered features such as a map, planner, and calendar tool. 
                    The project was created using Agile practices.</li>
                <li><b><a href="https://generation-1-pokemon-facts.netlify.app/" target="_blank" rel="noreferrer">React Website</a></b> (HTML, CSS, JavaScript, Node.js, React): 
                    Created a website using the React framework and deployed it to the web. </li>
                <li><b>University Relational Database</b> (Java, SQL, Oracle):
                    Collaborated with team members to evaluate the database needs and requirements for a hypothetical university.
                    Designed, developed, and tested the database over the course of a semester.
                    Completed the database project a week ahead of scheduled due date, including testing and finalizing.</li>
                <li><b>N-queens</b> (Java): Created a genetic algorithm from scratch that could solve the N-queens problems.</li>
                <li><b>Bankers algorithm</b> (Java): Created a program that could replicate the work that the Bankers algorithm is used for.</li>
            </ul>
        </section>
    );
}

export default Resume;