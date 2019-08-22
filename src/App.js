import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from "./Accueil";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
