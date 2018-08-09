import React, { Component } from "react";
import { psstGreet, greet, howManyGreets } from "./eth";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Greeter Smart Contract</h1>
        </header>
        <p className="App-intro">
          <button
            type="button"
            onClick={() =>
              greet()
                .then(result => {
									console.log(result);
                  alert(result);
                })
                .catch(error => alert(error))
            }
          >
            Greet
          </button>
          <button
            type="button"
            onClick={() =>
              psstGreet()
                .then(result => {
                  alert(result);
                })
                .catch(error => alert(error))
            }
          >
            Psst Greet
          </button>
          <button
            type="button"
            onClick={() => {
              howManyGreets()
                .then(result => {
                  console.log(result);
                  this.setState({ count: result });
                })
                .catch(error => alert(error));
            }}
          >
            How many greets? {this.state.count ? this.state.count : ""}
          </button>
        </p>
      </div>
    );
  }
}

export default App;
