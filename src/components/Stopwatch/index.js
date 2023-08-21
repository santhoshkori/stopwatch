import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0, minutes: 0}

  increasesecondscount = () => {
    const {seconds} = this.state
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
    console.log(seconds)
    if (seconds === 60) {
      this.setState({seconds: 0})
      this.setState(prevState => ({minutes: prevState.minutes + 1}))
    }
  }

  onStart = () => {
    setInterval(this.increasesecondscount, 1000)
  }

  render() {
    const {seconds} = this.state
    return (
      <div className="bgcontainer">
        <div className="cardcontainer">
          <div className="stopwatchiconcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>
            <span>00</span>:<span>{seconds}</span>
          </h1>
          <div className="buttonscontainer">
            <button
              className="startbutton"
              type="button"
              onClick={this.onStart}
            >
              Start
            </button>
            <button className="stopbutton" type="button">
              Stop
            </button>
            <button className="resetbutton" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
