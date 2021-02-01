import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
