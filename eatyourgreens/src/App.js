import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Banner from "./components/Banner";
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <Main />
        
      </header>
    </div>
  );
}

export default App;
