import React from 'react';
import './Intro.scss';
import imgReact from './react.png';

class Intro extends React.Component {
  constructor() {
    super();
    this.state = { title: 'test' };
  }

  render() {
    const { title } = this.state;
    return (
      <div id="App">
        Hello Worlds
        <img src={imgReact} alt="Intro" />
        {title}
      </div>
    );
  }
}

export default Intro;
