import logo from './logo.svg';
import logo2 from './image/logo2.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="container">
      <header className="col-md-auto">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo2} className="App-logo2" alt="logo" />
          <h3>React Premier Cricket League (RPCL) </h3>

        </div>

        <nav>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/budget">Budger</a>
          <a href="/cricketers">Cricketers</a>
        </nav>
        <div className="top-margin d-flex col col-lg">
        <div className="col col-lg-9"> </div>
        <div className="col col-lg-3"> </div>
        </div>
      </header>
    </div>
  );
}

export default App;
