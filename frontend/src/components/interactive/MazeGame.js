import React, { useState, useEffect, useRef } from 'react';

function MazeGame() {
    const canvasRef = useRef(null);
    const [playerPos, setPlayerPos] = useState({ x: 1, y: 1 });
    const [goalPos, setGoalPos] = useState({ x: 8, y: 8 });
    const [maze, setMaze] = useState([]);
    const [won, setWon] = useState(false);
    const [moves, setMoves] = useState(0);

    const GRID_SIZE = 10;
    const CELL_SIZE = 40;

    // Generate simple maze
    useEffect(() => {
        generateMaze();
    }, []);

    // Check if player reached goal
    useEffect(() => {
        if (playerPos.x === goalPos.x && playerPos.y === goalPos.y) {
            setWon(true);
        }
    }, [playerPos, goalPos]);

    // Draw maze
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0a0e27';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw walls
        ctx.fillStyle = '#8338ec';
        for (let y = 0; y < GRID_SIZE; y++) {
            for (let x = 0; x < GRID_SIZE; x++) {
                if (maze[y] && maze[y][x] === 1) {
                    ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
                }
            }
        }

        // Draw goal
        ctx.fillStyle = '#ffbe0b';
        ctx.fillRect(goalPos.x * CELL_SIZE, goalPos.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        // Draw player
        ctx.fillStyle = '#ff006e';
        ctx.fillRect(playerPos.x * CELL_SIZE, playerPos.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);

        // Draw grid
        ctx.strokeStyle = 'rgba(51, 134, 255, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= GRID_SIZE; i++) {
            ctx.beginPath();
            ctx.moveTo(i * CELL_SIZE, 0);
            ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, i * CELL_SIZE);
            ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE);
            ctx.stroke();
        }
    }, [playerPos, goalPos, maze]);

    const generateMaze = () => {
        const newMaze = [];
        for (let y = 0; y < GRID_SIZE; y++) {
            newMaze[y] = [];
            for (let x = 0; x < GRID_SIZE; x++) {
                // Create random walls avoiding player start and goal
                if ((x === 0 || x === GRID_SIZE - 1 || y === 0 || y === GRID_SIZE - 1) ||
                    (Math.random() > 0.7 && !(x === 1 && y === 1) && !(x === 8 && y === 8))) {
                    newMaze[y][x] = 1;
                } else {
                    newMaze[y][x] = 0;
                }
            }
        }
        setMaze(newMaze);
    };

    const canMove = (x, y) => {
        if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) return false;
        if (maze[y] && maze[y][x] === 1) return false;
        return true;
    };

    const movePlayer = (dx, dy) => {
        const newX = playerPos.x + dx;
        const newY = playerPos.y + dy;

        if (canMove(newX, newY)) {
            setPlayerPos({ x: newX, y: newY });
            setMoves(moves + 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    e.preventDefault();
                    movePlayer(0, -1);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    movePlayer(0, 1);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    movePlayer(-1, 0);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    movePlayer(1, 0);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [playerPos, maze]);

    const resetGame = () => {
        setPlayerPos({ x: 1, y: 1 });
        setGoalPos({ x: 8, y: 8 });
        setWon(false);
        setMoves(0);
        generateMaze();
    };

    return (
        <section>
            <h1 className="bounce">🎯 Maze Game</h1>
            <p style={{ marginBottom: '24px' }}>
                Use arrow keys to navigate the maze! Reach the yellow square to win. Avoid the purple walls!
            </p>

            <div style={{ marginBottom: '24px', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{
                    background: 'rgba(131, 56, 236, 0.2)',
                    padding: '12px 24px',
                    border: '2px solid #8338ec',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: '0', fontSize: '12px' }}>Moves</p>
                    <p style={{ margin: '0', fontSize: '28px', color: '#ffbe0b', fontWeight: 'bold' }}>{moves}</p>
                </div>

                <button onClick={resetGame}>New Maze</button>
            </div>

            {won && (
                <div style={{
                    background: 'rgba(51, 211, 153, 0.2)',
                    border: '3px solid #33d39f',
                    padding: '16px',
                    marginBottom: '24px',
                    textAlign: 'center'
                }}>
                    <h2 style={{ color: '#33d39f', margin: '0 0 8px 0' }}>🎉 You Escaped!</h2>
                    <p>Completed in {moves} moves!</p>
                </div>
            )}

            <div style={{ border: '3px solid #8338ec', display: 'inline-block' }}>
                <canvas
                    ref={canvasRef}
                    width={GRID_SIZE * CELL_SIZE}
                    height={GRID_SIZE * CELL_SIZE}
                    style={{ display: 'block' }}
                />
            </div>

            <div style={{
                marginTop: '24px',
                background: 'rgba(51, 211, 153, 0.2)',
                border: '3px dashed #33d39f',
                padding: '16px'
            }}>
                <p style={{ margin: '0', color: '#33d39f', fontSize: '12px' }}>
                    🔴 Red = Player | 🟡 Yellow = Goal | 🟣 Purple = Walls
                </p>
            </div>
        </section>
    );
}

export default MazeGame;

