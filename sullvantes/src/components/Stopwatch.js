import React, { Component } from 'react';
import './Stopwatch.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      elapsedTime: 0,
      startTime: new Date().toLocaleString(),
    };
    this.intervalID = null;
    this.localTimes = '12/13/23::200576';
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    
    if (!this.state.isRunning) {
      this.setState({
        isRunning: true,
        startTime: this.state.startTime ?? new Date().toLocaleString()
      });
      this.intervalID = setInterval(this.tick, 10); // Update every 10 milliseconds
    }
  };

  stopTimer = () => {
    if (this.state.isRunning) {
      clearInterval(this.intervalID);
      this.setState({
        isRunning: false,
      });
    }
  };

  resetTimer = () => {
    this.stopTimer();
    this.addFeedTime();
    this.setState({
      elapsedTime: 0,
      startTime: new Date().toLocaleString(),
    });
  };

  tick = () => {
    this.setState((prevState) => ({ 
      elapsedTime: prevState.elapsedTime + 10, // Increment by 10 milliseconds
    }));
  };

  formatTime(milliseconds) {
    const totalMilliseconds = milliseconds;
    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const centiseconds = Math.floor((totalMilliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  }

  formatStartTime = (d) => d ?? '';

  showFeedTime = (lt) => (<div><tr><td>{lt.split('::')[0]}</td><td>{lt.split('::')[1]}ms</td></tr></div>);

  showFeedTimes = (lts) => {
    console.log(lts);
    return 
        <div>
            <h3>Feed Times</h3>
                <table class="table-sm">
                    <th><td>Date</td><td>Duration</td></th>
                    {lts.split(';').forEach(lt => this.showFeedTime(lt))}
        </table>
        </div>
    }
  addFeedTime = () => {
    const {startTime, elapsedTime} = this.state;
    this.localTimes += `;${startTime}::${elapsedTime}`;
    localStorage.setItem('feeding-times', this.localTimes);
    }


  render() {
    return (
      <div class="row">
      <div className="stopwatch"class="col-6">
        <div className="stopwatch-time">{this.formatTime(this.state.elapsedTime)}</div>
        <div className="stopwatch-start">{this.formatStartTime(this.state.startTime)}</div>
        <div className="stopwatch-controls">
          {!this.state.isRunning ? (
            <button onClick={this.startTimer}>Start</button>
          ) : (
            <button onClick={this.stopTimer}>Stop</button>
          )}
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
      <div class="col-6">
        {this.showFeedTimes(this.localTimes)}
      </div> </div>
    );
  }
}

export default Stopwatch;
