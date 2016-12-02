import React, { Component } from 'react'
import './App.css'
import Bubble from './Bubble'

import bubbleSendLocation from './bubble__send-location.svg'
import bubbleSendLocation2 from './bubble__send-location-2.svg'
import bubbleFoodPlace from './foodplace.png'

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
        text="And then, just say 'lunch'"
      />,
      <Bubble
        notBob={true}
        key={uniqueId()}
        text="lunch"
      />,
      <Bubble
        key={uniqueId()}
        text="Awesome! I just found 70 places that serve lunch within 1,0km from your location."
      />,
      <Bubble
        key={uniqueId()}
        text="How about this:"
      />,
      <Bubble
        key={uniqueId()}
        image={bubbleFoodPlace}
      />,
      <Bubble
        notBob={true}
        key={uniqueId()}
        text="👍"
      />,
      <Bubble
        key={uniqueId()}
        text="Awesome! Hope you enjoy!"
      />,
    ]

    return (
      <div className="App">
        <div className="Header" />
        <div className="StickyBob" />
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
        <div className="CallToAction CallToAction--spaceAfter">
          <div className="CallToAction__inner">
            <p>Experiamur igitur, inquit, etsi habet haec Stoicorum ratio difficilius quiddam et obscurius. Ita multo sanguine profuso in laetitia et in victoria est mortuus.</p>
            <a className="CallToAction__button" href="https://m.me/lunchbobthebot">Start conversation</a>
            <p className="CallToAction__footer">Made with&nbsp;🍆&nbsp;&nbsp;<a href="https://www.wunderdog.fi/">@wunderdogsw</a></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
