// import React, { useState, useEffect } from "react";

import React, { Fragment } from "react";
import dislike from "./dislike-icon.png";
import like from "./like-icon.png";
import sadFace from "./disappointed.png";
import happyFace from "./face-grinning.png";
import animals from "./animals.json";

import "./App.css";

function Header(props) {
  return (
    <header>
      <img src={happyFace} className="App-count-dislike" alt="counter-dislike" />
      <div className="smileCount">{props.happyCounter}</div>
      <img src={sadFace} className="App-count-like" alt="counter-like" />
      <div className="sadCount">{props.sadCounter}</div>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <div>{props.imgAnimals}</div>

      <p>do you like this cute {props.animalName} ?.</p>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <img
        src={dislike}
        onClick={() => props.activatCountDisLikes(1)}
        className="App-dislike"
        alt="dislike"
        // count={this.state.count}
        // activatCountDisLikes={this.activatCountDisLikes.bind(this)}
      />
      <img src={like} onClick={() => props.activatCountLikes(1)} className="App-like" alt="like" />
    </footer>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countLikes: 0,
      countDisLikes: 0,
      images: animals,
      numOfclick: 0,
    };
    console.log(this.state.numOfclick);
    // console.log(this.state.images.animals[0].avatar);

    // This binding is necessary to make `this` work in the callback
    this.activatCountLikes = this.activatCountLikes.bind(this);
    this.activatCountDisLikes = this.activatCountDisLikes.bind(this);
  }
  activatCountDisLikes(value) {
    this.setState((prevState) => ({
      countDisLikes: prevState.countDisLikes + value,
    }));
    this.setState({ numOfclick: this.state.numOfclick + 1 });
    console.log(this.state.numOfclick);
  }

  // this.setState((prevState) => ({ count: prevState.count + value }));

  activatCountLikes(value) {
    this.setState((prevState) => ({
      countLikes: prevState.countLikes + value,
    }));
    // console.log(this.state.numOfclick);
  }

  render() {
    return (
      <>
        <Header happyCounter={this.state.countLikes} sadCounter={this.state.countDisLikes} />

        <Main
          animalName={this.state.images.animals[6].name}
          imgAnimals={
            <img
              src={this.state.images.animals[this.state.numOfclick].avatar}
              height={200}
              alt="napkin and silverware at a restaurant table"
            />
          }
        />
        <Footer
          activatCountDisLikes={this.activatCountDisLikes.bind(this)}
          activatCountLikes={this.activatCountLikes.bind(this)}
        />
      </>
    );
  }
}
export default App;
