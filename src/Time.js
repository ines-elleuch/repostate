import React, { Component } from "react";

export default class Time extends Component {
  constructor() {
    super();
    this.state = {
      mytime: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        mytime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.mytime}</h1>
      </div>
    );
  }
}

// import React, { Component } from "react";

// class Time extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date().toLocaleString(),
//     };
//   }
//   componentDidMount() {
//     this.intervalID = setInterval(() => this.tick(), 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }
//   tick() {
//     this.setState({
//       time: new Date().toLocaleString(),
//     });
//   }
//   render() {
//     return <p className="App-clock">The time is {this.state.time}.</p>;
//   }
// }

// export default Time;
