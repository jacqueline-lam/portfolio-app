import React, { Component } from 'react';
import HomeAnimation from './HomeAnimation';

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <HomeAnimation />
        <div className="title-block">
          <h1 className="title"> JACQUELINE LAM </h1>
          <h3 className="title">Full-stack Software Engineer</h3>
        </div>
      </div>
    )
  }
}

export default Home