import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to ="/">Home</Link>
          <Link to ="/otherpage">otherpage</Link>
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn Reactrr
          </a>
        </header>
        <div>
           <Route exact path="/" component = {Fib}/>
           <Route exact path="/otherpage" component = {OtherPage}/>
         </div>
      </div>
    </Router>
  );
}

export default App;
