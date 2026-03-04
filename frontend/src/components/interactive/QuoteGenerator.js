import React, { useState, useEffect } from 'react';

function QuoteGenerator() {
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
        { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { text: "Whether you think you can, or you think you can't - you're right.", author: "Henry Ford" },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "Do what you can, with what you have, with where you are.", author: "Theodore Roosevelt" },
        { text: "Everything you want is on the other side of fear.", author: "George Addair" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "The best revenge is massive success.", author: "Frank Sinatra" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
    ];

    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setDisplayedText('');
        typeoutQuote(quotes[randomIndex].text);
    };

    const typeoutQuote = (text) => {
        setIsTyping(true);
        let index = 0;
        const typeInterval = setInterval(() => {
            if (index <= text.length) {
                setDisplayedText(text.substring(0, index));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(typeInterval);
            }
        }, 30);
    };

    useEffect(() => {
        typeoutQuote(currentQuote.text);
    }, []);

    return (
        <section>
            <h1 className="bounce">💭 Quote Generator</h1>
            <p style={{ marginBottom: '32px' }}>
                Get inspired with random quotes. Click the button to reveal the next quote with a typewriter effect!
            </p>

            <div className="card" style={{
                minHeight: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                background: 'linear-gradient(135deg, rgba(131, 56, 236, 0.2) 0%, rgba(58, 134, 255, 0.2) 100%)',
                border: '4px solid #ffbe0b',
                padding: '32px',
                marginBottom: '32px'
            }}>
                <p style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#ffbe0b',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                    minHeight: '120px'
                }}>
                    "{displayedText}{isTyping ? '_' : ''}"
                </p>

                <p style={{
                    fontSize: '16px',
                    color: '#8338ec',
                    fontStyle: 'italic'
                }}>
                    — {currentQuote.author}
                </p>
            </div>

            <div style={{ textAlign: 'center' }}>
                <button 
                    onClick={getRandomQuote}
                    style={{ padding: '16px 32px', fontSize: '16px' }}
                >
                    ✨ Get Next Quote
                </button>
            </div>

            <div style={{
                marginTop: '32px',
                background: 'rgba(51, 211, 153, 0.2)',
                border: '3px dashed #33d39f',
                padding: '24px',
                textAlign: 'center'
            }}>
                <p style={{ margin: '0', color: '#33d39f' }}>
                    💡 Each quote appears with a typewriter effect. Perfect for daily inspiration!
                </p>
            </div>
        </section>
    );
}

export default QuoteGenerator;

