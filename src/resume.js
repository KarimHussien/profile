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
        <section>
        <h1>Karim Hussien</h1>
        <img src={resumeImage} width="250px" height="250px" alt='Karim Hussien'/>
        <p>KHussien00@outlook.com</p>
        <p><a href="https://www.linkedin.com/in/karim-hussien-207804261" target="_blank" rel="noreferrer">LinkedIn profile</a></p>
        <p>1-(904)-806-6321</p>
        <p>Saint Augustine, FL</p>
        </section>
    );
}

function ObjectiveStatement() {
    return (
        <section>
            <h2>Objective Statement</h2>
            <p>
                Computer Science graduate, seeking a permanent position as a full-stack, back-end, front-end 
                developer or software engineer. Seeking to build critical client applications to serve customer 
                needs.
            </p>
        </section>
    );
}

function Education() {
    return (
        <section>
            <h2>Education</h2>
            <p>University of North Florida Jacksonville, FL.</p>
            <p>Bachelor of Science in Computer Science</p>
            <p>Major in Computer Science</p>
            <ul>
                <li>GPA: 3.96/4.00</li>
                <li>Made the Dean’s List for Spring and Fall terms for 2021 and 2022.</li>
            </ul>
            <p>Saint Johns River State College Saint Augustine, FL.</p>
            <p>Associate in Arts</p>
        </section>
    );
}

function RelevantCoursework() {
    return (
        <section>
            <h2>Relevat Coursework</h2>
            <p>COP2220 Programming I: Learned to use the C coding language, and Linux OS.</p>
            <p>COP3503 Programming II: Learned to use the Java coding language, and Eclipse.</p>
            <p>COP3813 Internet Programming: Learned to use HTML, CSS, JavaScript, PHP and Node.js.</p>
            <p>COP3703 Introduction to Database: Learned to build relational databases and use SQL.</p>
            <p>CEN4010 Software Engineering: Learned about the SDLC and Agile and Scrum methodologies.</p>
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
        <section>
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
        <section>
            <h2>Work Experience</h2>
            <p>Nautica Saint Augustine, FL. </p>
            <p>Sales Associate June 2018 to Present.</p>
            <ul>
                <li>Greeted customers and ascertained their needs.</li>
                <li>Worked collaboratively in a team environment.</li>
                <li>Was entrusted with additional responsibilties, such as voiding and price changing, which was not standard for Sales Associates.</li>
                <li>Assisted with technical problems, such as with Excel files or working with company software. </li>
            </ul>
        </section>
    );
}

function Projects() {
    return (
        <section>
            <h2>Projects</h2>
            <ul>
                <li>Multipurpose Website: Worked collaboratively in a team environment to create a fullstack website that offered features such as a map, planner, and calendar tool. 
                    The project was created using Agile practices.</li>
                <li><a href="https://warm-boba-2f892c.netlify.app/" target="_blank" rel="noreferrer">React website</a>: Created a website using React and deployed it myself to the web. </li>
                <li>N-queens: Created a genetic algorithm from scratch that could solve the N-queens problems.</li>
                <li>Bankers algorithm: Created a program that could replicate the work that the Bankers algorithm is used for.</li>
            </ul>
        </section>
    );
}

export default Resume;