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
    return(
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
        <p></p>
        </section>
        );
}

function ObjectiveStatement() {
    return (
        <section>

        </section>
    );
}

function Education() {
    return (
        <section>

        </section>
    );
}

function RelevantCoursework() {
    return (
        <section>

        </section>
    );
}

function RelevantSkills() {
    return (
        <section>

        </section>
    );
}

function AchievementsandInvolvements() {
    return (
        <section>

        </section>
    );
}

function WorkExperience() {
    return (
        <section>

        </section>
    );
}

function Projects() {
    return (
        <section>

        </section>
    );
}

export default Resume;