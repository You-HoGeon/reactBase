import React from 'react';
import './style.scss';
import imgReact from '~assets/react.png';

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
  <div className="container-intro">
    <img src={imgReact} alt="Intro" className="logo" />
    <h1 className="header">React Base</h1>
    <h2 className="description">Design your react app.</h2>
  </div>
);

export default Intro;
