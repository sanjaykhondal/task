// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/card/Cards';


const App = () => {
  const [theme, setTheme] = useState('');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme)
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    setTheme(theme)
  }, [])

  return (
    <div className={`App ${theme}-theme`}>
     
      <h1 style={{ textAlign: 'center' }}>Quotes</h1>
      <div style={{ textAlign: 'center' }}>
        <label htmlFor="theme-select">Select Theme: </label>
        <select id="theme-select" value={theme} onChange={(e) => handleThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
      </div>
      <Cards />
     
    </div>
  );
};

export default App;
