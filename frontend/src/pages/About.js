import React, { useState } from 'react';

function About() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <div className="row">
            <section>
                <h1 className="bounce">👤 About Me</h1>
                <div className="card">
                    <h2>Who Am I?</h2>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                        I'm a passionate web developer and creative enthusiast with a love for all things pixel-art 
                        and retro design. With a background in both technical development and visual design, I bring 
                        a unique perspective to every project I work on.
                    </p>
                    <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '16px' }}>
                        My journey in tech started with curiosity about how things work on the internet. Over time, 
                        that curiosity evolved into a full-fledged passion for creating beautiful, functional, and 
                        delightful user experiences. I specialize in React, JavaScript, and modern web technologies.
                    </p>
                </div>
            </section>

            <section>
                <h2>My Skills</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                    <div className="card">
                        <h3>💻 Frontend Development</h3>
                        <ul style={{ listStyle: 'none', marginTop: '12px' }}>
                            <li>✓ React & React Router</li>
                            <li>✓ HTML5 & CSS3</li>
                            <li>✓ JavaScript (ES6+)</li>
                            <li>✓ Responsive Design</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>🎨 Design & UX</h3>
                        <ul style={{ listStyle: 'none', marginTop: '12px' }}>
                            <li>✓ UI/UX Design</li>
                            <li>✓ Pixel Art</li>
                            <li>✓ Color Theory</li>
                            <li>✓ Animation Design</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>🛠️ Tools & Tech</h3>
                        <ul style={{ listStyle: 'none', marginTop: '12px' }}>
                            <li>✓ Git & GitHub</li>
                            <li>✓ Node.js</li>
                            <li>✓ Figma</li>
                            <li>✓ VS Code</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h2>📜 Experience</h2>
                <div className="card">
                    <h3>Senior Web Developer</h3>
                    <p style={{ color: '#ffbe0b', marginBottom: '8px' }}>2022 - Present</p>
                    <p>Leading frontend development projects and mentoring junior developers in modern React practices.</p>
                </div>
                <div className="card">
                    <h3>Full Stack Developer</h3>
                    <p style={{ color: '#ffbe0b', marginBottom: '8px' }}>2020 - 2022</p>
                    <p>Built full-stack applications using React, Node.js, and MongoDB. Focused on user experience and performance.</p>
                </div>
                <div className="card">
                    <h3>Junior Web Developer</h3>
                    <p style={{ color: '#ffbe0b', marginBottom: '8px' }}>2018 - 2020</p>
                    <p>Started my career building responsive websites and learning the fundamentals of web development.</p>
                </div>
            </section>

            <section>
                <h2>💬 Let's Connect</h2>
                <p style={{ marginBottom: '24px' }}>
                    Have a project idea, question, or just want to chat? Feel free to reach out!
                </p>

                {submitted && (
                    <div style={{
                        background: 'rgba(51, 211, 153, 0.2)',
                        border: '3px solid #33d39f',
                        padding: '16px',
                        marginBottom: '24px',
                        textAlign: 'center'
                    }}>
                        <p style={{ color: '#33d39f', fontWeight: 'bold' }}>
                            ✓ Message sent successfully! I'll get back to you soon.
                        </p>
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="What's this about?"
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell me more..."
                            rows="6"
                        />
                    </div>

                    <button type="submit" style={{ width: '100%', marginTop: '16px' }}>
                        Send Message
                    </button>
                </form>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <h3>Social Links</h3>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '16px' }}>
                        <button>🐙 GitHub</button>
                        <button>🔗 LinkedIn</button>
                        <button>🐦 Twitter</button>
                        <button>📸 Instagram</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;

