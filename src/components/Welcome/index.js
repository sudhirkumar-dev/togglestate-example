// Write your code here
import {Component} from 'react'

import './index.css'

class WelcomeApp extends Component {
  state = {
    isSubscribed: false,
  }

  buttonText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.buttonText}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default WelcomeApp
