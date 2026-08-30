import './Projects.css';

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-content">
                <span className="projects-badge">PORTFOLIO</span>
                <h2>Selected projects.</h2>
                <div className="projects-list">
                    <article className="project-item">
                        <a href="https://filmera.us/" target="_blank" rel="noreferrer">
                            <h3>Full-Stack Web App</h3>
                            <p>End-to-end MERN application with authentication, REST API, and MongoDB Atlas deployment.</p>
                            <ul className="project-tech-list">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
                        </a>
                    </article>
                    <article className="project-item">
                        <a href="https://apps.apple.com/us/app/filmera/id6779366077" target="_blank" rel="noreferrer">
                            <h3>React Native Mobile App</h3>
                            <p>Cross-platform mobile experience built with Expo and a Node.js + Express backend.</p>
                            <ul className="project-tech-list">
                                <li>React Native</li>
                                <li>Expo</li>
                                <li>REST API</li>
                            </ul>
                        </a>
                    </article>
                    <article className="project-item">
                        <a href="https://github.com/filmera/rest-api" target="_blank" rel="noreferrer">
                            <h3>REST API Service</h3>
                            <p>Secure JWT-authenticated REST API with MVC architecture and cloud deployment on Render.</p>
                            <ul className="project-tech-list">
                                <li>Express</li>
                                <li>JWT</li>
                                <li>Mongoose</li>
                            </ul>
                        </a>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Projects;