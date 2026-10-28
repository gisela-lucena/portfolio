import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-badge">Hi, I'm Gisela </span>
                <h1>Full-Stack Engineer<br />
                    building <span className="highlight">thoughtful</span><br />
                    web apps</h1>
                <p>I'm Gisela Elia — a Full-Stack Software Engineer with experience building, deploying,
                    and maintaining web applications using React, Node.js, Express.js, MongoDB, and
                    REST APIs. I care about clean architecture, dependable APIs, and interfaces that feel
                    effortless.</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn">Get in touch</a>
                    <a href="https://github.com/gisela-lucena" target="_blank"
                        rel="noreferrer" className="btn btn-outline">
                        View GitHub →
                    </a>
                </div>
                <div className="terminal">
                    <div className="terminal-lights">
                        <span className="red-light"></span>
                        <span className="yellow-light"></span>
                        <span className="green-light"></span>
                    </div>
                    <div className="terminal-command">
                        <span className="command-text">~/gisela $</span>
                        <span className="terminal-typing">
                            npm run build-something
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;