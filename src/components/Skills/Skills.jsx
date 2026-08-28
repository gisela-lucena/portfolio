import './Skills.css';

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="skills-content">
                <h2>Technical Skills</h2>
                <div className="skills-list">
                    <div className="skill">Frontend
                        <ul className="skill-sublist">
                            <li>React</li>
                            <li>React Native</li>
                            <li>JavaScript (ES6+)</li>
                            <li>TypeScript</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Vite</li>
                        </ul>
                    </div>
                    <div className="skill">Backend & Databases
                        <ul className="skill-sublist">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>REST APIs</li>
                            <li>JWT Auth</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>MongoDB Atlas</li>
                        </ul>
                    </div>
                    <div className="skill">Tools & Platforms
                        <ul className="skill-sublist">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Vercel</li>
                            <li>Render</li>
                            <li>Expo</li>
                            <li>Postman</li>
                            <li>pnpm</li>
                        </ul>
                    </div>
                    <div className="skill">Practices
                        <ul className="skill-sublist">
                            <li>Full-Stack Development</li>
                            <li>API Integration</li>
                            <li>MVC</li>
                            <li>Auth & Authz</li>
                            <li>Cloud Deployment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;