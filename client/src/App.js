import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar fixed="top" />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
