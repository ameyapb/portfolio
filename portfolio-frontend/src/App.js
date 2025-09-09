import React, { useState } from 'react';
import Terminal from './components/TerminalComponent/Terminal';
import AboutView from './components/AboutView/AboutView';
import './App.css';

function App() {
  // State to manage which view is currently active
  const [currentView, setCurrentView] = useState('terminal'); // 'terminal' or 'about'

  // Navigation handlers
  const handleNavigateToAbout = () => {
    setCurrentView('about');
  };

  const handleBackToTerminal = () => {
    setCurrentView('terminal');
  };

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

        {/* Conditional rendering based on current view */}
        <main className="content-section">
          {currentView === 'terminal' ? (
            <Terminal onNavigateToAbout={handleNavigateToAbout} />
          ) : (
            <AboutView onBackToTerminal={handleBackToTerminal} />
          )}
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>
            <span className="footer-symbol">►</span>
            {currentView === 'terminal'
              ? "Press any key to interact with the terminal"
              : "Use the back button to return to terminal"
            }
            <span className="footer-symbol">◄</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
