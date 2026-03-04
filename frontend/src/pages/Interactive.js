import { useState } from 'react';
import DrawingCanvas from '../components/interactive/DrawingCanvas';
import MemoryGame from '../components/interactive/MemoryGame';
import PixelPiano from '../components/interactive/PixelPiano';
import QuoteGenerator from '../components/interactive/QuoteGenerator';
import ClickCounter from '../components/interactive/ClickCounter';
import MazeGame from '../components/interactive/MazeGame';

function Interactive() {
    const [activeGame, setActiveGame] = useState(null);

    const games = [
        { id: 'canvas', title: '🎨 Pixel Canvas', description: 'Draw with pixels on a grid canvas' },
        { id: 'memory', title: '🧠 Memory Game', description: 'Match pairs in this classic memory game' },
        { id: 'piano', title: '🎹 Pixel Piano', description: 'Click or press keys to play 8-bit sounds' },
        { id: 'quotes', title: '💭 Quote Generator', description: 'Get inspired with random quotes' },
        { id: 'clicker', title: '🖱️ Click Counter', description: 'Click the pixel character to earn points' },
        { id: 'maze', title: '🎯 Maze Game', description: 'Navigate through random mazes with arrow keys' }
    ];

    if (activeGame) {
        return (
            <div className="row">
                <section>
                    <button 
                        onClick={() => setActiveGame(null)}
                        style={{ marginBottom: '24px' }}
                    >
                        ← Back to Games
                    </button>
                </section>
                {activeGame === 'canvas' && <DrawingCanvas />}
                {activeGame === 'memory' && <MemoryGame />}
                {activeGame === 'piano' && <PixelPiano />}
                {activeGame === 'quotes' && <QuoteGenerator />}
                {activeGame === 'clicker' && <ClickCounter />}
                {activeGame === 'maze' && <MazeGame />}
            </div>
        );
    }

    return (
        <div className="row">
            <section>
                <h1 className="bounce">🎮 Fun Interactive Zone</h1>
                <p style={{ fontSize: '18px', marginBottom: '32px' }}>
                    Take a break and play with some fun interactive features! Each game is designed to entertain 
                    and showcase interactive React components. Pick one and let's have some pixel-perfect fun!
                </p>
            </section>

            <section>
                <h2>Choose Your Game</h2>
                <div className="grid">
                    {games.map((game) => (
                        <div 
                            key={game.id}
                            className="card"
                            onClick={() => setActiveGame(game.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>
                                {game.title.split(' ')[0]}
                            </h3>
                            <h4 style={{ marginBottom: '8px' }}>
                                {game.title.split(' ').slice(1).join(' ')}
                            </h4>
                            <p>{game.description}</p>
                            <button 
                                style={{ width: '100%', marginTop: '16px' }}
                                onClick={() => setActiveGame(game.id)}
                            >
                                Play Now →
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ textAlign: 'center', background: 'rgba(131, 56, 236, 0.05)', padding: '32px', border: '3px dashed #8338ec' }}>
                <h2>More Games Coming Soon!</h2>
                <p>
                    Stay tuned for more interactive features, mini-games, and fun pixel-based experiences.
                    Your feedback helps shape what comes next!
                </p>
            </section>
        </div>
    );
}

export default Interactive;

