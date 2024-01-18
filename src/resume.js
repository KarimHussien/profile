import './resume.css';
import resumeImage from './assets/Images/IMG_0067.JPG';

function AllComponents({ children }) {
    return (
      <div className="AllComponents">
        {children}
      </div>
    );
  }

function Resume() {
    return (
        <AllComponents>
            <ContactInformation />
            <ObjectiveStatement />
            <Education />
            <RelevantCoursework />
            <RelevantSkills />
            <AchievementsandInvolvements />
            <WorkExperience />
            <Projects />
        </AllComponents>
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
            <p>Computer Science graduate, seeking a permanent position as a full-stack, back-end, front-end developer or software engineer. </p>
            <p>Seeking to build critical client applications to serve customer needs.</p>
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
                <li>GPA: 3.96/4.00</li>
                <li>Made the Dean’s List for Spring and Fall terms for 2021, 2022 and 2023.</li>
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
            <p><b>COP2220 Programming I</b>: Learned to use the C coding language, and Linux OS.</p>
            <p><b>COP3503 Programming II</b>: Learned to use the Java coding language, and Eclipse.</p>
            <p><b>COP3813 Internet Programming</b>: Learned to use HTML, CSS, JavaScript, PHP and Node.js.</p>
            <p><b>COP3703 Introduction to Database</b>: Learned to build relational databases and use SQL.</p>
            <p><b>CEN4010 Software Engineering</b>: Learned about the SDLC and Agile and Scrum methodologies.</p>
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
            </ul>
        </section>
    );
}

function AchievementsandInvolvements() {
    return (
        <section className="achievements-involvements">
            <h2>Achievements and Involvements</h2>
            <ul>
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
            <p><i>Sales Associate</i> <span className="space-container-4">June 2018 to Present.</span></p>
            <ul className="work-experience-list">
                <li>Greeted customers and ascertained their needs.</li>
                <li>Worked collaboratively in a team environment.</li>
                <li>Was entrusted with additional responsibilities, such as voiding and price changing, which was not standard for Sales Associates.</li>
                <li>Assisted with technical problems, such as with Microsoft 365 applications or working with company software.</li>
            </ul>
        </section>
    );
}

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <ul>
                <li><a href="https://www.alexkeo.com/" target="_blank" rel="noreferrer">Multipurpose Website</a>: Worked collaboratively in a team environment to create a full-stack website that offered features such as a map, planner, and calendar tool. 
                    The project was created using Agile practices.</li>
                <li><a href="https://warm-boba-2f892c.netlify.app/" target="_blank" rel="noreferrer">React website</a>: Created a website using the React framework and deployed it to the web. </li>
                <li>N-queens: Created a genetic algorithm from scratch that could solve the N-queens problems.</li>
                <li>Bankers algorithm: Created a program that could replicate the work that the Bankers algorithm is used for.</li>
            </ul>
        </section>
    );
}

export default Resume;