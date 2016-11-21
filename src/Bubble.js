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
    const content = this.props.text || <img src={this.props.image} />

    return (
      <div
        className={classNames({
          'Bubble': true,
          'Bubble--image': !this.props.text,
          'Bubble--in-viewport': this.state.inViewport,
          'Bubble--not-bob': this.props.notBob
        })}
      >
        <div className="Bubble__avatar" />
        <div className="Bubble__inner">
          {content}
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
