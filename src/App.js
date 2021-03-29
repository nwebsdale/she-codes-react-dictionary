import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header row">
          <h1>
            <i className="fas fa-book main-icon"></i>The Online Dictionary
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
        {/* <footer>Coded by me :)</footer> */}
      </div>
    </div>
  );
}

export default App;
