import React, { Component } from "react";
import "../styles/App.css";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        {/* <h3 id="timer">{this.state.date.toLocaleTimeString()}</h3> */}
        <h3 id="timer">
          {this.state.date.getHours() % 12 <= 9
            ? "0" + (this.state.date.getHours() % 12)
            : this.state.date.getHours() % 12}
          {`:`}
          {this.state.date.getMinutes() <= 9
            ? "0" + this.state.date.getMinutes()
            : this.state.date.getMinutes()}
          {`:`}
          {this.state.date.getSeconds() <= 9
            ? "0" + this.state.date.getSeconds()
            : this.state.date.getSeconds()}{" "}
          {this.state.date.getHours() < 12 ? "AM" : "PM"}
        </h3>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Clock />
      </>
    );
  }
}

export default App;
