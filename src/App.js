import React from 'react';
import './App.css';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Contact
        nameavatar="https://randomuser.me/api/portraits/women/92.jpg"
        name="Natalie"
        status={true}
      />
      <Contact
        nameavatar="https://randomuser.me/api/portraits/women/58.jpg"
        name="Tamara"
        status={false}
      />
      <Contact
        nameavatar="https://randomuser.me/api/portraits/men/30.jpg"
        name="Paul"
        status={true}
      />
    </div>
  );
}

export default App;
