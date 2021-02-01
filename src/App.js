import Home from "./containers/Home/Home";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
