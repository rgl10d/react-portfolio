import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
