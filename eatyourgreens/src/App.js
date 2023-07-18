import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Banner from "./components/Banner";
import Main from "./components/Main";
import { Option } from './components/Option';

/* class Clicked extends Option {
  constructor(props) {
    super(props);
    this.state = {
      isClicked : false
    }
  }
  changeState() {
    this.setState({
        isClicked:true
    })
  }
  render() {
    return (
      <div>
        <Option isClicked={this.changeState} />
      </div>
    )
  }
} */



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
