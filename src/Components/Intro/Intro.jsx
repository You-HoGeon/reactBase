import React from 'react';
import './Intro.scss';
import imgReact from './react.png';

/* class Intro extends React.Component {
  constructor() {
    super();
    this.state = { title: 'test' };
  }

  render() {
    const { title } = this.state;
    return (
      <div id="App">
        <img src={imgReact} alt="Intro" />
        {title}
      </div>
    );
  }
} */

const Intro = () => (
  <div id="intro">
    <img src={imgReact} alt="Intro" id="img_intro" />
    <h1 id="header_intro">React Base</h1>
    <h2 id="description_intro">Design your react app.</h2>
  </div>
);

export default Intro;
