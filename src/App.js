// import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header row">
          <h1>The Online Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>Coded by me :)</footer>
      </div>
    </div>
  );
}

export default App;
