import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribed: false}

  sub = () => {
    const {subscribed} = this.state
    this.setState(prevState => ({subscribed: true}))
  }

  subb = () => {
    const {subscribed} = this.state
    this.setState(prevState => ({subscribed: false}))
  }

  render() {
    const {subscribed} = this.state
    return (
      <div className="bg">
        <h1 className="hd">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {subscribed ? (
          <button type="button" onClick={this.subb} className="btn">
            Subscribed
          </button>
        ) : (
          <button type="button" onClick={this.sub} className="btn">
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
