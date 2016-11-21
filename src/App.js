import React, { Component } from 'react'
import './App.css'
import Bubble from './Bubble'


class App extends Component {
  render() {

    const bubbles = []
    for (let i = 0; i < 20; i++) {
      bubbles.push(
        <Bubble key={i} />
      )
    }

    return (
      <div className="App">
        <div className="Header" />
        <div className="CallToAction">
          <div className="CallToAction__inner">
            <p>Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Ita multo sanguine profuso in laetitia et in victoria est mortuus.</p>
            <a className="CallToAction__button" href="https://m.me/lunchbobthebot">Start conversation</a>
            <p>Scroll down to see how it works</p>
            <div className="Arrow" />
          </div>
        </div>
        <div className="Bubbles">
          {bubbles}
        </div>
        <div className="StickyBob" />
      </div>
    );
  }
}

export default App;
