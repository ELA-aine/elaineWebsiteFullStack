import React, { useRef, useState, useEffect } from 'react';

function DrawingCanvas() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#ff006e');
    const [pixelSize, setPixelSize] = useState(8);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = Math.min(600, window.innerWidth - 40);
        canvas.height = 400;

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0a0e27';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    const drawPixel = (x, y) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        
        const canvasX = Math.floor((x - rect.left) / pixelSize) * pixelSize;
        const canvasY = Math.floor((y - rect.top) / pixelSize) * pixelSize;

        ctx.fillStyle = color;
        ctx.fillRect(canvasX, canvasY, pixelSize, pixelSize);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) return;
        drawPixel(e.clientX, e.clientY);
    };

    const handleClear = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#0a0e27';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'pixel-art.png';
        link.click();
    };

    return (
        <section>
            <h1 className="bounce">🎨 Pixel Canvas</h1>
            <p style={{ marginBottom: '24px' }}>
                Draw on this pixel grid! Use your mouse to paint, change colors, and create pixel art.
            </p>

            <div style={{ marginBottom: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <div>
                    <label style={{ marginRight: '8px' }}>Color:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        style={{ cursor: 'pointer', width: '50px', height: '40px', border: '2px solid #8338ec' }}
                    />
                </div>

                <div>
                    <label style={{ marginRight: '8px' }}>Pixel Size:</label>
                    <select 
                        value={pixelSize} 
                        onChange={(e) => setPixelSize(Number(e.target.value))}
                    >
                        <option value={4}>4px</option>
                        <option value={8}>8px</option>
                        <option value={12}>12px</option>
                        <option value={16}>16px</option>
                    </select>
                </div>

                <button onClick={handleClear}>Clear Canvas</button>
                <button onClick={handleDownload}>Download Art</button>
            </div>

            <div style={{ border: '3px solid #8338ec', display: 'inline-block' }}>
                <canvas
                    ref={canvasRef}
                    onMouseDown={() => setIsDrawing(true)}
                    onMouseUp={() => setIsDrawing(false)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => setIsDrawing(false)}
                    style={{ cursor: 'crosshair', display: 'block' }}
                />
            </div>
        </section>
    );
}

export default DrawingCanvas;

