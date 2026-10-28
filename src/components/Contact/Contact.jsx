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
                    <div className="contact-links">
                        <a href="https://www.linkedin.com/in/giselaelia/" target="_blank" rel="noopener noreferrer"
                            className="btn">
                            LinkedIn
                        </a>
                        <a href="mailto:lucena.gisela@icloud.com" className="btn btn-outline">
                            Email
                        </a>
                    </div>
                </div>
                <div className="contact-buttons">
                    <a href="https://github.com/gisela-lucena" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        View GitHub →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;