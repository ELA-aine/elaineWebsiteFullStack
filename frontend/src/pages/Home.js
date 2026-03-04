import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="row">
            <section>
                <h1 className="bounce">Welcome to My Pixel Portal</h1>
                <div className="card">
                    <h2>👋 Hello, I'm Elaine</h2>
                    <p style={{ fontSize: '18px', lineHeight: '1.8', marginTop: '16px' }}>
                        Welcome to my pixelated corner of the internet! I'm a creative developer who loves 
                        building beautiful digital experiences. This retro-inspired portfolio showcases my 
                        work in projects, photography, and music.
                    </p>
                    <p style={{ fontSize: '16px', marginTop: '16px', color: '#ffbe0b' }}>
                        ✦ Web Developer ✦ Photographer ✦ Music Enthusiast ✦
                    </p>
                    <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <Link to="/projects">
                            <button>View My Projects</button>
                        </Link>
                        <Link to="/interactive">
                            <button>Try Fun Features</button>
                        </Link>
                        <Link to="/about">
                            <button>Let's Connect</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <h2>✨ Featured Highlights</h2>
                <div className="grid">
                    <div className="card">
                        <h3>💻 Projects</h3>
                        <p>Explore my collection of creative web projects and applications.</p>
                        <Link to="/projects" style={{ textDecoration: 'none' }}>
                            <button style={{ width: '100%', marginTop: '16px' }}>
                                Explore Projects
                            </button>
                        </Link>
                    </div>
                    
                    <div className="card">
                        <h3>📷 Photography</h3>
                        <p>A visual journey through moments I've captured and curated.</p>
                        <Link to="/photography" style={{ textDecoration: 'none' }}>
                            <button style={{ width: '100%', marginTop: '16px' }}>
                                View Gallery
                            </button>
                        </Link>
                    </div>
                    
                    <div className="card">
                        <h3>🎵 Music & Video</h3>
                        <p>Discover my favorite sounds, videos, and creative audio projects.</p>
                        <Link to="/music" style={{ textDecoration: 'none' }}>
                            <button style={{ width: '100%', marginTop: '16px' }}>
                                Listen & Watch
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section style={{ textAlign: 'center' }}>
                <h2>🎮 Play & Interact</h2>
                <p style={{ marginBottom: '24px' }}>
                    This portfolio isn't just about scrolling. Try out some fun interactive features!
                </p>
                <Link to="/interactive">
                    <button style={{ padding: '16px 32px', fontSize: '16px' }}>
                        🎯 Enter the Fun Zone
                    </button>
                </Link>
            </section>
        </div>
    );
}

export default Home;

