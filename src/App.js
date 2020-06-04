import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import unsplash from "./api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit =  async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
     
    });
    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar callSubmit={this.onSearchSubmit} />
        <h1>result {this.state.images.length}</h1>
      </div>
    );
  }
}

export default App;
