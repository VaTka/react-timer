import React from 'react'
import './App.css';
import ButtonGroup from './components/buttonGroup';
import Timer from './components/Timer'
import HookTimer from './components/HookTimer'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <h1>C использованием React + Redux</h1>
                <Timer/>
                <ButtonGroup/>
                <h1>C использованием React + React Hooks</h1>
                <HookTimer/>
            </div>

        </div>
    );
}

export default App;
