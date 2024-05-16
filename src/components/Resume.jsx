export default function Resume() {
    return (
        <div className="vh-100 container resume">
            <h1 className="row">Resume</h1>
            <a className="row" href="/Mark_Barrie_Resume.pdf" download="Mark_Barrie_Resume.pdf">
                Download Resume
            </a>
            <section className="resume-webdev row">
                <h2>Proficiencies</h2>
                <h3 >Web Development</h3>
                <ul className="resume-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
            </section>
        </div>
    );
}