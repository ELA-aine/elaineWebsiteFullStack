import React, { useState } from 'react';

function Photography() {
    const [selectedImage, setSelectedImage] = useState(null);

    const photoGallery = [
        {
            id: 1,
            title: 'Mountain Sunrise',
            description: 'Golden hour at the peak',
            color: '#ff006e'
        },
        {
            id: 2,
            title: 'Urban Geometry',
            description: 'City architecture captured',
            color: '#8338ec'
        },
        {
            id: 3,
            title: 'Forest Path',
            description: 'Nature\'s serene beauty',
            color: '#3a86ff'
        },
        {
            id: 4,
            title: 'Ocean Waves',
            description: 'Coastal moments',
            color: '#ffbe0b'
        },
        {
            id: 5,
            title: 'Sunset Reflections',
            description: 'Water mirror landscape',
            color: '#fb5607'
        },
        {
            id: 6,
            title: 'Night Sky',
            description: 'Stars and constellations',
            color: '#7209b7'
        },
        {
            id: 7,
            title: 'Flower Details',
            description: 'Macro photography beauty',
            color: '#f72585'
        },
        {
            id: 8,
            title: 'Rain Drops',
            description: 'Water texture art',
            color: '#4361ee'
        }
    ];

    return (
        <div className="row">
            <section>
                <h1 className="bounce">📷 Photography Gallery</h1>
                <p style={{ fontSize: '18px', marginBottom: '32px' }}>
                    A visual collection of moments I've captured. Each image tells a story of light, shadow, and emotion.
                    Click on any image to view it in detail.
                </p>
            </section>

            <section>
                <h2>Gallery</h2>
                <div className="grid">
                    {photoGallery.map((photo) => (
                        <div 
                            key={photo.id}
                            className="card"
                            onClick={() => setSelectedImage(photo)}
                            style={{ cursor: 'pointer', overflow: 'hidden' }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '200px',
                                    background: `linear-gradient(135deg, ${photo.color} 0%, ${photo.color}99 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '48px',
                                    marginBottom: '16px',
                                    borderRadius: '4px'
                                }}
                            >
                                📸
                            </div>
                            <h3>{photo.title}</h3>
                            <p>{photo.description}</p>
                            <p style={{ fontSize: '12px', color: '#ffbe0b', marginTop: '12px' }}>
                                Click to view →
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2000,
                        cursor: 'pointer'
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        style={{
                            position: 'relative',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            background: 'rgba(10, 14, 39, 0.95)',
                            border: '4px solid #ff006e',
                            padding: '24px',
                            boxShadow: '0 0 40px #ff006e'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                background: '#ff006e',
                                border: 'none',
                                color: '#0a0e27',
                                fontSize: '20px',
                                padding: '8px 12px',
                                cursor: 'pointer'
                            }}
                        >
                            ✕
                        </button>
                        
                        <div
                            style={{
                                width: '400px',
                                height: '300px',
                                background: `linear-gradient(135deg, ${selectedImage.color} 0%, ${selectedImage.color}99 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '80px',
                                marginBottom: '24px',
                                borderRadius: '4px'
                            }}
                        >
                            📸
                        </div>
                        
                        <h2>{selectedImage.title}</h2>
                        <p style={{ fontSize: '16px', marginBottom: '16px' }}>{selectedImage.description}</p>
                        <p style={{ fontSize: '12px', color: '#ffbe0b' }}>
                            [High-resolution image would be displayed here]
                        </p>
                    </div>
                </div>
            )}

            <section style={{ textAlign: 'center', background: 'rgba(131, 56, 236, 0.05)', padding: '32px', border: '3px dashed #8338ec' }}>
                <h2>Want to use my photos?</h2>
                <p style={{ marginBottom: '16px' }}>
                    Interested in licensing or commissioning photography work?
                </p>
                <a href="mailto:your.email@example.com" style={{ textDecoration: 'none' }}>
                    <button>Contact Me</button>
                </a>
            </section>
        </div>
    );
}

export default Photography;

