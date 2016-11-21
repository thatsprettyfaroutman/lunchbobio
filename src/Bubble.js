import React, { Component } from 'react'
import Waypoint from 'react-waypoint';
import throttle from 'lodash.throttle';
import classNames from 'classnames';
import './Bubble.css'

class Bubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: false,
    }
  }

  render() {
    return (
      <div
        className={classNames({
          'Bubble': true,
          'Bubble--in-viewport': this.state.inViewport
        })}
      >
        <div className="Bubble__avatar" />
        <div className="Bubble__inner">
          Speechbubble
        </div>
        <Waypoint
          throttleHandler={scrollHandler => throttle(scrollHandler, 20)}
          onEnter={() => {
            this.setState({inViewport: true})
          }}
          onLeave={() => {
            this.setState({inViewport: false})
          }}
          topOffset={-1000}
          bottomOffset={370}
        />
      </div>
    )
  }
}


export default Bubble
