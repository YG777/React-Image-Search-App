import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar  callSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
