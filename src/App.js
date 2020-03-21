import React from 'react';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact
        nameavatar="https://randomuser.me/api/portraits/women/92.jpg"
        firstName="Natalie"
        lastName="Potato"
        age={307}
        status={true}
      />
      <Contact
        nameavatar="https://randomuser.me/api/portraits/women/58.jpg"
        firstName="Tamara"
        lastName="Noodle"
        age={508}
        status={false}
      />
      <Contact
        nameavatar="https://randomuser.me/api/portraits/men/30.jpg"
        firstName="Paul"
        lastName="Ramen"
        age={100}
        status={true}
      />
    </div>
  );
}

export default App;
