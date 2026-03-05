import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Music from './pages/Music';
import About from './pages/About';
import Interactive from './pages/Interactive';

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/photography" element={<Photography />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/interactive" element={<Interactive />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
