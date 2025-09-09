import React, { useState, useEffect, useRef } from 'react';
import { processCommand, getWelcomeMessage } from '../../utils/terminalCommand';
import './Terminal.css';

const Terminal = ({ onNavigateToAbout }) => {
  // State management - like your server's memory
  const [history, setHistory] = useState([]); // Command history
  const [currentInput, setCurrentInput] = useState(''); // Current command being typed
  const [commandHistory, setCommandHistory] = useState([]); // For up/down arrow navigation
  const [historyIndex, setHistoryIndex] = useState(-1); // Current position in command history

  // Refs for DOM manipulation
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  // Simple glitch effect function
  const triggerGlitch = () => {
    if (terminalRef.current) {
      terminalRef.current.classList.add('glitch');
      setTimeout(() => {
        terminalRef.current.classList.remove('glitch');
      }, 300);
    }
  };

  // Initialize terminal with welcome message - like server startup
  useEffect(() => {
    const welcomeOutput = getWelcomeMessage();
    setHistory([{
      type: 'output',
      content: welcomeOutput.content,
      timestamp: new Date()
    }]);

    // Focus on input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Auto-scroll to bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Handle command submission - like processing HTTP requests
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentInput.trim()) return;

    // Add command to history
    const newCommand = {
      type: 'command',
      content: currentInput,
      timestamp: new Date()
    };

    // Process the command - like calling your route handler
    const output = processCommand(currentInput);

    // Handle special commands
    if (output.type === 'clear') {
      setHistory([]);
      setCurrentInput('');
      return;
    }

    // Handle navigation commands
    if (output.type === 'navigate' && output.target === 'about') {
      if (onNavigateToAbout) {
        onNavigateToAbout();
      }
      return;
    }

    // Handle special effects for easter eggs
    if (currentInput.toLowerCase() === 'matrix' || currentInput.toLowerCase() === 'hack') {
      // Trigger glitch effect
      triggerGlitch();
    }

    // Add command and output to history
    const newOutput = {
      type: 'output',
      content: output.content,
      outputType: output.type,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, newCommand, newOutput]);

    // Update command history for navigation
    setCommandHistory(prev => [...prev, currentInput]);
    setHistoryIndex(-1);
    setCurrentInput('');
  };

  // Handle keyboard navigation (up/down arrows for command history)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  // Keep focus on input - like keeping server alive
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Render terminal prompt
  const renderPrompt = () => (
    <span className="terminal-prompt">
      <span className="user">user</span>
      <span className="at">@</span>
      <span className="host">portfolio</span>
      <span className="path">:~$</span>
    </span>
  );

  // Render history item
  const renderHistoryItem = (item, index) => {
    if (item.type === 'command') {
      return (
        <div key={index} className="terminal-line command-line">
          {renderPrompt()}
          <span className="command-text">{item.content}</span>
        </div>
      );
    } else {
      return (
        <div key={index} className={`terminal-line output-line ${item.outputType || ''}`}>
          {item.content.map((line, lineIndex) => (
            <div key={lineIndex} className="output-line-text">
              {line}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="terminal-container" onClick={handleTerminalClick}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button close"></span>
          <span className="terminal-button minimize"></span>
          <span className="terminal-button maximize"></span>
        </div>
        <div className="terminal-title">Portfolio Terminal v1.0</div>
      </div>

      <div className="terminal-body" ref={terminalRef}>
        <div className="terminal-content">
          {/* Render command history */}
          {history.map((item, index) => renderHistoryItem(item, index))}

          {/* Current input line */}
          <form onSubmit={handleSubmit} className="terminal-input-form">
            <div className="terminal-line input-line">
              {renderPrompt()}
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                autoComplete="off"
                autoFocus
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
