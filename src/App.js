import React, { Component } from "react";
import Main from "./components/Main";
import Contact from "./components/Contact";
import LanguageNav from "./components/LanguageNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "fr"
    };
  }

  handleLanguageChange = event => {
    this.setState({ language: event.target.value });
  };
  render() {
    return (
      <div>
        <LanguageNav handleLanguageChange={this.handleLanguageChange} />
        <Main language={this.state.language} />
        <Contact />
      </div>
    );
  }
}

export default App;
