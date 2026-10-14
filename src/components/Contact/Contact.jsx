import './Contact.css'

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="section-container contact-content">
                <span className="section-label">CONTACT</span>
                <h2>Let's build something solid together.</h2>
                <p>Open to full-stack, frontend, or backend roles. The fastest way to reach me is through the links below.</p>
                <div className="contact-card">
                    <h3>Let's talk</h3>
                    <div>
                        <a href="https://www.linkedin.com/in/gisela-elia" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                    <div>
                        <a href="mailto:lucena.gisela@gmail.com">
                            Email
                        </a>
                    </div>
                </div>
                <div className="contact-buttons">
                    <a href="https://github.com/gisela-lucena" target="_blank" rel="noopener noreferrer" className="btn">View GitHub →</a>
                </div>
            </div>
        </section>
    );
}

export default Contact;