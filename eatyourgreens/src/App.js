import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import {Choices} from './components/Choices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner /> 
        <Choices label="Cabbage"/>
        <Choices label="Carrot"/>
        <Choices label="Cucumber"/>
        <Choices label="Onion"/>
        <Choices label="Radish"/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
