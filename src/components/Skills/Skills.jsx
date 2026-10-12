import './Skills.css';

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="section-container skills-content">
                <span className="section-label">SKILLS</span>
                <h2>Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-card">
                        <h3>Frontend</h3>
                        <ul className="skill-sublist">
                            <li className="skill-tag">React</li>
                            <li className="skill-tag">React Native</li>
                            <li className="skill-tag">JavaScript (ES6+)</li>
                            <li className="skill-tag">TypeScript</li>
                            <li className="skill-tag">HTML5</li>
                            <li className="skill-tag">CSS3</li>
                            <li className="skill-tag">Vite</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h3>Backend & Databases</h3>
                        <ul className="skill-sublist">
                            <li className="skill-tag">Node.js</li>
                            <li className="skill-tag">Express.js</li>
                            <li className="skill-tag">REST APIs</li>
                            <li className="skill-tag">JWT Auth</li>
                            <li className="skill-tag">MongoDB</li>
                            <li className="skill-tag">Mongoose</li>
                            <li className="skill-tag">MongoDB Atlas</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h3>Tools & Platforms</h3>
                        <ul className="skill-sublist">
                            <li className="skill-tag">Git</li>
                            <li className="skill-tag">GitHub</li>
                            <li className="skill-tag">Vercel</li>
                            <li className="skill-tag">Render</li>
                            <li className="skill-tag">Expo</li>
                            <li className="skill-tag">Postman</li>
                            <li className="skill-tag">pnpm</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h3>Practices</h3>
                        <ul className="skill-sublist">
                            <li className="skill-tag">Full-Stack Development</li>
                            <li className="skill-tag">API Integration</li>
                            <li className="skill-tag">MVC</li>
                            <li className="skill-tag">Auth & Authz</li>
                            <li className="skill-tag">Cloud Deployment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;