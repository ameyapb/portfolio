import React from 'react';
import Terminal from './components/TerminalComponent/Terminal';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Background layer */}
      <div className="background-layer">
        <div className="matrix-rain"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <header className="app-header">
          <div className="header-glow"></div>
          <h1 className="app-title">
            <span className="title-bracket">[</span>
            <span className="title-text">PORTFOLIO.EXE</span>
            <span className="title-bracket">]</span>
          </h1>
          <p className="app-subtitle">
            Interactive Developer Portfolio • Terminal Interface
          </p>
        </header>

        {/* Terminal component */}
        <main className="terminal-section">
          <Terminal />
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>
            <span className="footer-symbol">►</span>
            Press any key to interact with the terminal
            <span className="footer-symbol">◄</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
