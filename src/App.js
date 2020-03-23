import React from 'react';
import './App.css';
import Contact from './components/Contact';
import users from './components/ContactList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {
    const ContactLists = users.map(item => {
      return <Contact user={item} />
    })
    return (
      <div className="App">
        {ContactLists}
      </div>
    );
  }
}


export default App;
