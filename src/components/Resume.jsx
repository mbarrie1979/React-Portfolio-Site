export default function Resume() {
    return (
        <div className="container resume">
            <h1 className="row text-shadow">Resume</h1>
            <a className="row" href="/Mark_Barrie_Resume.pdf" download="Mark_Barrie_Resume.pdf">
                Download Resume
            </a>
            <section className="resume-webdev row">
                <h2 className="text-shadow">Proficiencies</h2>
                <section className="mb-3">
                    <h3 className="text-shadow">Web Development</h3>
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
                <section className="mb-3">
                    <h3 className="text-shadow">APIs</h3>
                    <ul className="resume-list">
                        <li>Server-Side</li>
                        <li>Third-Party</li>
                    </ul>
                </section>
                <section className="mb-3">
                    <h3 className="text-shadow">Development Tools</h3>
                    <ul className="resume-list">
                        <li>Git</li>
                        <li>Git Hub</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </section>
            </section>
        </div>
    );
}