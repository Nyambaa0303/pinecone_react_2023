import React from "react";
import "./App.css";

class Time extends React.Component {
  state = {
    date: "",
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.setState({ date });
  };

  render() {
    return (
      <div className="App">
        <p className="text-secondary text-decoration-underline">
          Current Date (Y-m-d) : {this.state.date}
        </p>
      </div>
    );
  }
}

export default Time;
