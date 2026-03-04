function ProjectCard({ title, description, tags, link, image }) {
    return (
        <div className="card">
            {image && (
                <img 
                    src={image} 
                    alt={title}
                    style={{ 
                        width: '100%', 
                        marginBottom: '16px',
                        borderRadius: '4px'
                    }}
                />
            )}
            <h3>{title}</h3>
            <p>{description}</p>
            {tags && tags.length > 0 && (
                <div style={{ margin: '12px 0' }}>
                    {tags.map((tag, idx) => (
                        <span 
                            key={idx}
                            style={{
                                display: 'inline-block',
                                background: 'rgba(255, 0, 110, 0.2)',
                                border: '1px solid #ff006e',
                                padding: '4px 8px',
                                marginRight: '8px',
                                marginBottom: '8px',
                                fontSize: '12px',
                                color: '#ffbe0b'
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            {link && (
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        marginTop: '12px',
                        padding: '8px 16px',
                        background: '#8338ec',
                        color: '#e0e0e0',
                        textDecoration: 'none',
                        border: '2px solid #ffbe0b',
                        fontFamily: "'Courier New', monospace",
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                    className="project-link"
                >
                    View Project →
                </a>
            )}
        </div>
    );
}

export default ProjectCard;

