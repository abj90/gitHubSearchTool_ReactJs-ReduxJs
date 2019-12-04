import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/home/home";
import ReposList from "./views/repositories/reposList";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/userRepos" exact component={ReposList} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
