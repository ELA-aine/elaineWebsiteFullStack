import React from 'react';
import Header from './components/header';
import Intro from './components/Intro';
import CardGrid from './components/CardGrid';

function App() {
    return (
        <div className="container">
            <Header />
            <div calssName="row">
                <Intro />
                <CardGrid /> 
            </div>
        </div>
    );
}

export default App;
