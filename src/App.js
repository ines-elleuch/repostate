import React, { Component } from "react";
import Card from "./Card";
import image from "./myprofile/imageProfile.jpg";
import Time from "./Time";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        image: image,
        fullName: "Ines",
        bio: "I'm a student in GMC",
        profession: "Bioengineer",
      },
      Show: true,
    };
  }

  myFunction = () => {
    this.setState({ Show: !this.state.Show });
  };

  render() {
    return (
      <div>
        {this.state.Show ? (
          <Card className="carte" info={this.state.person} />
        ) : null}
        <button onClick={() => this.myFunction()}>My Profile</button>
        <Time />
      </div>
    );
  }
}
