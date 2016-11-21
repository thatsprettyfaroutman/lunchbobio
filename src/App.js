import React, { Component } from 'react'
import './App.css'
import Bubble from './Bubble'

import bubbleSendLocation from './bubble__send-location.svg'
import bubbleSendLocation2 from './bubble__send-location-2.svg'

const uniqueId = function() {
  let id = 0
  return () => id++
}()

class App extends Component {
  render() {

    const bubbles = [
      <Bubble
        key={uniqueId()}
        text="Let’s start by setting your location so I can find good lunch places around you."
      />,
      <Bubble
        key={uniqueId()}
        image={bubbleSendLocation}
      />,
      <Bubble
        notBob={true}
        key={uniqueId()}
        image={bubbleSendLocation2}
      />,
      <Bubble
        key={uniqueId()}
        text="Then just say 'lunch'"
      />,
      <Bubble
        notBob={true}
        key={uniqueId()}
        text="lunch"
      />
    ]
    // for (let i = 0; i < 20; i++) {
    //   bubbles.push(
    //     <Bubble key={i} />
    //   )
    // }

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
