import React, { Component } from 'react'
import Waypoint from 'react-waypoint';
import throttle from 'lodash.throttle';
import classNames from 'classnames';
import './Bubble.css'

const BOTTOM_OFFSET_MOBILE = 0
const BOTTOM_OFFSET_DESKTOP = 370

class Bubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: false,
      mobile: window.innerWidth < 1024,
    }

    this._onResize = this._onResize.bind(this)
    window.addEventListener('resize', this._onResize)
  }

  _onResize() {
    this.setState({
      mobile: window.innerWidth < 1024,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize)
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
        {!this.props.notBob && <div className="Bubble__avatar" />}
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
          bottomOffset={this.state.mobile ? BOTTOM_OFFSET_MOBILE : BOTTOM_OFFSET_DESKTOP}
        />
      </div>
    )
  }
}


export default Bubble
