import React, { useState, useEffect } from 'react';

function ClickCounter() {
    const [clicks, setClicks] = useState(0);
    const [level, setLevel] = useState(1);
    const [clickValue, setClickValue] = useState(1);
    const [autoClicker, setAutoClicker] = useState(false);
    const [autoClickerLevel, setAutoClickerLevel] = useState(0);
    const [multiplier, setMultiplier] = useState(1);

    // Auto clicker functionality
    useEffect(() => {
        if (!autoClicker) return;

        const interval = setInterval(() => {
            setClicks(prev => prev + (5 * autoClickerLevel));
        }, 1000);

        return () => clearInterval(interval);
    }, [autoClicker, autoClickerLevel]);

    // Update level and click value based on clicks
    useEffect(() => {
        const newLevel = Math.floor(clicks / 100) + 1;
        setLevel(newLevel);
        setClickValue(1 + Math.floor(clicks / 50));
    }, [clicks]);

    const handleClick = () => {
        setClicks(prev => prev + clickValue * multiplier);
    };

    const buyUpgrade = (type) => {
        const cost = 50 * (type === 'click' ? 1 : type === 'auto' ? 20 : 100);
        if (clicks >= cost) {
            setClicks(prev => prev - cost);
            if (type === 'click') {
                setClickValue(prev => prev + 2);
            } else if (type === 'auto') {
                setAutoClicker(true);
                setAutoClickerLevel(prev => prev + 1);
            } else if (type === 'multi') {
                setMultiplier(prev => prev + 0.5);
            }
        }
    };

    const reset = () => {
        setClicks(0);
        setLevel(1);
        setClickValue(1);
        setAutoClicker(false);
        setAutoClickerLevel(0);
        setMultiplier(1);
    };

    return (
        <section>
            <h1 className="bounce">🖱️ Click Counter</h1>
            <p style={{ marginBottom: '32px' }}>
                Click the pixel character to earn points! Buy upgrades to increase your earnings and unlock new features.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '800px' }}>
                {/* Game Area */}
                <div className="card" style={{
                    gridColumn: '1 / -1',
                    textAlign: 'center',
                    padding: '32px'
                }}>
                    <p style={{ fontSize: '12px', color: '#ffbe0b', marginBottom: '8px' }}>
                        LEVEL {level} • MULTIPLIER {multiplier.toFixed(1)}x
                    </p>
                    <div
                        onClick={handleClick}
                        style={{
                            width: '120px',
                            height: '120px',
                            margin: '0 auto 24px',
                            background: 'linear-gradient(135deg, #ff006e, #8338ec)',
                            border: '4px solid #ffbe0b',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '64px',
                            cursor: 'pointer',
                            transition: 'all 0.1s',
                            userSelect: 'none'
                        }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.transform = 'scale(0.95)';
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        👾
                    </div>

                    <p style={{ fontSize: '12px', color: '#8338ec', marginBottom: '8px' }}>
                        +{clickValue * multiplier} points per click
                    </p>

                    <div style={{
                        background: 'rgba(255, 190, 11, 0.2)',
                        padding: '16px',
                        border: '2px solid #ffbe0b',
                        marginBottom: '16px'
                    }}>
                        <p style={{ margin: '0', fontSize: '12px', color: '#ffbe0b' }}>TOTAL POINTS</p>
                        <p style={{ margin: '8px 0 0 0', fontSize: '40px', fontWeight: 'bold', color: '#ffbe0b' }}>
                            {clicks}
                        </p>
                    </div>

                    {autoClickerLevel > 0 && (
                        <p style={{ fontSize: '12px', color: '#33d39f' }}>
                            🤖 Auto-clicking: +{5 * autoClickerLevel} per second
                        </p>
                    )}
                </div>

                {/* Upgrades */}
                <div className="card">
                    <h3>💪 Click Power</h3>
                    <p style={{ fontSize: '12px', color: '#ffbe0b', marginBottom: '12px' }}>
                        Cost: 50 points
                    </p>
                    <button
                        onClick={() => buyUpgrade('click')}
                        disabled={clicks < 50}
                        style={{
                            width: '100%',
                            opacity: clicks < 50 ? 0.5 : 1,
                            cursor: clicks < 50 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Buy Upgrade
                    </button>
                </div>

                <div className="card">
                    <h3>🤖 Auto Clicker</h3>
                    <p style={{ fontSize: '12px', color: '#ffbe0b', marginBottom: '12px' }}>
                        Cost: 1,000 points
                    </p>
                    <button
                        onClick={() => buyUpgrade('auto')}
                        disabled={clicks < 1000}
                        style={{
                            width: '100%',
                            opacity: clicks < 1000 ? 0.5 : 1,
                            cursor: clicks < 1000 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Buy Auto-Clicker
                    </button>
                </div>

                <div className="card">
                    <h3>⚡ Multiplier</h3>
                    <p style={{ fontSize: '12px', color: '#ffbe0b', marginBottom: '12px' }}>
                        Cost: 5,000 points
                    </p>
                    <button
                        onClick={() => buyUpgrade('multi')}
                        disabled={clicks < 5000}
                        style={{
                            width: '100%',
                            opacity: clicks < 5000 ? 0.5 : 1,
                            cursor: clicks < 5000 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Buy Multiplier
                    </button>
                </div>

                <div className="card">
                    <h3>🔄 Reset</h3>
                    <p style={{ fontSize: '12px', color: '#ff006e' }}>
                        Start fresh
                    </p>
                    <button
                        onClick={reset}
                        style={{
                            width: '100%',
                            background: '#ff006e',
                            borderColor: '#ffbe0b'
                        }}
                    >
                        Reset Game
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ClickCounter;

