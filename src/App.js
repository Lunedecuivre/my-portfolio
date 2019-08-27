import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Accueil from "./Accueil";
import Aboutme from "./Aboutme";
import Projects from "./Projects";
import Contact from "./Contact";
import Loading from "./Loading";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App({ location }) {
  return (
    <div>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={0} classNames="fade">
              <Switch location={location}>
                <Route path="/" exact component={Accueil} />
                <Route path="/aboutme" component={Aboutme} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                <Route path="/loading" component={Loading} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
