import React, { useState, useEffect } from 'react';

function PixelPiano() {
    const [activeKey, setActiveKey] = useState(null);

    const notes = [
        { key: 'C', freq: 261.63, keyCode: 'KeyC' },
        { key: 'D', freq: 293.66, keyCode: 'KeyD' },
        { key: 'E', freq: 329.63, keyCode: 'KeyE' },
        { key: 'F', freq: 349.23, keyCode: 'KeyF' },
        { key: 'G', freq: 392.00, keyCode: 'KeyG' },
        { key: 'A', freq: 440.00, keyCode: 'KeyA' },
        { key: 'B', freq: 493.88, keyCode: 'KeyB' }
    ];

    const playSound = (frequency) => {
        // Create Web Audio API context
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'square'; // 8-bit sound

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    };

    const handleKeyClick = (note) => {
        setActiveKey(note.key);
        playSound(note.freq);
        setTimeout(() => setActiveKey(null), 200);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            const note = notes.find(n => n.keyCode === e.code);
            if (note) {
                handleKeyClick(note);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section>
            <h1 className="bounce">🎹 Pixel Piano</h1>
            <p style={{ marginBottom: '24px' }}>
                Click the keys below or press the corresponding keys on your keyboard (C, D, E, F, G, A, B) 
                to play 8-bit tones.
            </p>

            <div style={{ marginBottom: '32px' }}>
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    padding: '24px',
                    background: 'rgba(131, 56, 236, 0.1)',
                    border: '3px solid #8338ec'
                }}>
                    {notes.map((note) => (
                        <button
                            key={note.key}
                            onClick={() => handleKeyClick(note)}
                            style={{
                                width: '70px',
                                height: '100px',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                background: activeKey === note.key ? '#ff006e' : '#3a86ff',
                                border: '3px solid #ffbe0b',
                                color: activeKey === note.key ? '#0a0e27' : '#e0e0e0',
                                cursor: 'pointer',
                                transition: 'all 0.1s',
                                boxShadow: activeKey === note.key ? '0 0 12px #ff006e' : 'none',
                                transform: activeKey === note.key ? 'scale(0.95)' : 'scale(1)'
                            }}
                        >
                            {note.key}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{
                background: 'rgba(51, 211, 153, 0.2)',
                border: '3px dashed #33d39f',
                padding: '24px',
                textAlign: 'center'
            }}>
                <p style={{ margin: '0', color: '#33d39f' }}>
                    💡 Tip: Use your keyboard for faster playing! Press the letter keys to play notes.
                </p>
            </div>
        </section>
    );
}

export default PixelPiano;

