import ProjectCard from '../components/ProjectCard';

function Projects() {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A pixelated, retro-inspired personal portfolio showcasing web development skills with interactive features and responsive design.',
            tags: ['React', 'CSS', 'Interactive'],
            link: '#'
        },
        {
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
            tags: ['React', 'Node.js', 'MongoDB', 'Payment API'],
            link: '#'
        },
        {
            title: 'Task Management App',
            description: 'A productivity app for managing daily tasks with categories, priorities, and progress tracking. Features include local storage and dark mode.',
            tags: ['React', 'LocalStorage', 'UI/UX'],
            link: '#'
        },
        {
            title: 'Weather Dashboard',
            description: 'Real-time weather information dashboard with location search, current conditions, and forecast data visualization.',
            tags: ['React', 'API', 'Weather'],
            link: '#'
        },
        {
            title: 'Photo Gallery App',
            description: 'Interactive photo gallery with filtering, sorting, and lightbox functionality. Demonstrates advanced image handling techniques.',
            tags: ['React', 'Image Processing', 'Gallery'],
            link: '#'
        },
        {
            title: 'Chat Application',
            description: 'Real-time messaging platform with user profiles, typing indicators, and message history. Built with WebSocket technology.',
            tags: ['React', 'WebSocket', 'Real-time'],
            link: '#'
        }
    ];

    return (
        <div className="row">
            <section>
                <h1 className="bounce">🎨 My Projects</h1>
                <p style={{ fontSize: '18px', marginBottom: '32px' }}>
                    A collection of work that demonstrates my skills in web development, design, and problem-solving.
                    Each project represents hours of creativity, debugging, and pixel-perfect attention to detail.
                </p>
            </section>

            <section>
                <h2>Featured Works</h2>
                <div className="grid">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </section>

            <section style={{ textAlign: 'center', background: 'rgba(131, 56, 236, 0.05)', padding: '32px', border: '3px dashed #8338ec' }}>
                <h2>Have a Project Idea?</h2>
                <p style={{ marginBottom: '16px' }}>
                    I'm always interested in collaborating on new and exciting projects!
                </p>
                <a href="mailto:your.email@example.com" style={{ textDecoration: 'none' }}>
                    <button>Get In Touch</button>
                </a>
            </section>
        </div>
    );
}

export default Projects;

