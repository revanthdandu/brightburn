import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__image">
        <img src="/bgimg2.png" />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
