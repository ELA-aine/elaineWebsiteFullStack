import React, { useState, useEffect } from 'react';

function MemoryGame() {
    const emojis = ['🎮', '🎨', '🎵', '🎬', '💻', '🚀', '✨', '🎯'];
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        initializeGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (matched.length === emojis.length * 2) {
            setGameWon(true);
        }
    }, [matched, emojis.length]);

    const initializeGame = () => {
        const gameCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
        setCards(gameCards);
        setFlipped([]);
        setMatched([]);
        setMoves(0);
        setGameWon(false);
    };

    const handleCardClick = (index) => {
        if (flipped.length === 2 || matched.includes(index) || flipped.includes(index)) {
            return;
        }

        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(moves + 1);
            if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
                setMatched([...matched, newFlipped[0], newFlipped[1]]);
                setFlipped([]);
            } else {
                setTimeout(() => setFlipped([]), 1000);
            }
        }
    };

    return (
        <section>
            <h1 className="bounce">🧠 Memory Game</h1>
            <p style={{ marginBottom: '24px' }}>
                Match pairs of cards! Click on cards to flip them and find matching pairs.
            </p>

            <div style={{ marginBottom: '24px', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ 
                    background: 'rgba(131, 56, 236, 0.2)', 
                    padding: '12px 24px', 
                    border: '2px solid #8338ec',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: '0', fontSize: '12px' }}>Moves</p>
                    <p style={{ margin: '0', fontSize: '32px', color: '#ffbe0b', fontWeight: 'bold' }}>{moves}</p>
                </div>

                <div style={{ 
                    background: 'rgba(131, 56, 236, 0.2)', 
                    padding: '12px 24px', 
                    border: '2px solid #8338ec',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: '0', fontSize: '12px' }}>Matched</p>
                    <p style={{ margin: '0', fontSize: '32px', color: '#ffbe0b', fontWeight: 'bold' }}>{matched.length / 2}</p>
                </div>

                <button onClick={initializeGame}>New Game</button>
            </div>

            {gameWon && (
                <div style={{
                    background: 'rgba(51, 211, 153, 0.2)',
                    border: '3px solid #33d39f',
                    padding: '24px',
                    marginBottom: '24px',
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: '#33d39f', margin: '0 0 8px 0' }}>🎉 You Won!</h2>
                    <p>Completed in {moves} moves!</p>
                </div>
            )}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                maxWidth: '400px'
            }}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(index)}
                        style={{
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '32px',
                            background: matched.includes(index) ? 'rgba(51, 211, 153, 0.3)' : 
                                        flipped.includes(index) ? '#8338ec' : '#3a86ff',
                            border: '3px solid #ffbe0b',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            fontWeight: 'bold'
                        }}
                    >
                        {(flipped.includes(index) || matched.includes(index)) ? card : '?'}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MemoryGame;

