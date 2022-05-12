import logo from "./logo.svg";
import About from "./components/About.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my react app!</p>
      </header>
      <body className="App-body">
        <About />
      </body>
    </div>
  );
}

export default App;
