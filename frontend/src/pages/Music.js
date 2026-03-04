function Music() {
    const musicItems = [
        {
            id: 1,
            title: 'Synthwave Dreams',
            artist: 'Featured Artist',
            type: 'music',
            description: 'Immersive synthwave tracks perfect for pixel art vibes'
        },
        {
            id: 2,
            title: 'Lofi Study Session',
            artist: 'Chill Beats',
            type: 'music',
            description: 'Relaxing background music for focus and creativity'
        },
        {
            id: 3,
            title: 'Retro Gaming Sounds',
            artist: 'Pixel Audio',
            type: 'music',
            description: '8-bit and chiptune inspired musical pieces'
        },
        {
            id: 4,
            title: 'Portfolio Showcase',
            artist: 'My Channel',
            type: 'video',
            description: 'Watch me talk about my favorite projects'
        },
        {
            id: 5,
            title: 'Photography Series',
            artist: 'Visual Stories',
            type: 'video',
            description: 'Behind-the-scenes of my photography adventures'
        },
        {
            id: 6,
            title: 'Web Dev Tutorial',
            artist: 'Tech Tips',
            type: 'video',
            description: 'Building pixel-perfect websites with React'
        }
    ];

    return (
        <div className="row">
            <section>
                <h1 className="bounce">🎵 Music & Video</h1>
                <p style={{ fontSize: '18px', marginBottom: '32px' }}>
                    Explore my favorite sounds and visual stories. From ambient soundscapes to creative videos,
                    here's what keeps me inspired and motivated.
                </p>
            </section>

            <section>
                <h2>🎶 Music Playlist</h2>
                <div className="grid">
                    {musicItems.filter(item => item.type === 'music').map((item) => (
                        <div key={item.id} className="card">
                            <div style={{
                                width: '100%',
                                height: '160px',
                                background: 'linear-gradient(135deg, #8338ec 0%, #3a86ff 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px',
                                marginBottom: '16px',
                                borderRadius: '4px'
                            }}>
                                🎵
                            </div>
                            <h3>{item.title}</h3>
                            <p style={{ color: '#ffbe0b', fontWeight: 'bold' }}>{item.artist}</p>
                            <p>{item.description}</p>
                            <button style={{ width: '100%', marginTop: '16px' }}>▶ Play Now</button>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>🎬 Featured Videos</h2>
                <div className="grid">
                    {musicItems.filter(item => item.type === 'video').map((item) => (
                        <div key={item.id} className="card">
                            <div style={{
                                width: '100%',
                                height: '160px',
                                background: 'linear-gradient(135deg, #ff006e 0%, #ffbe0b 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px',
                                marginBottom: '16px',
                                borderRadius: '4px'
                            }}>
                                🎬
                            </div>
                            <h3>{item.title}</h3>
                            <p style={{ color: '#ffbe0b', fontWeight: 'bold' }}>{item.artist}</p>
                            <p>{item.description}</p>
                            <button style={{ width: '100%', marginTop: '16px' }}>▶ Watch Now</button>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ textAlign: 'center', background: 'rgba(131, 56, 236, 0.05)', padding: '32px', border: '3px dashed #8338ec' }}>
                <h2>Follow My Creative Journey</h2>
                <p style={{ marginBottom: '24px' }}>
                    Subscribe to my channels for regular music releases and video updates!
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button>🎵 Spotify</button>
                    <button>🎥 YouTube</button>
                    <button>🎧 SoundCloud</button>
                </div>
            </section>
        </div>
    );
}

export default Music;

