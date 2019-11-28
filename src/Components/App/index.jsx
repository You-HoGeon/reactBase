import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { title: 'test' };
  }

  render() {
    const { title } = this.state;
    return (
      <div id="App">
        Hello Worlds
        {title}
      </div>
    );
  }
}

export default App;
