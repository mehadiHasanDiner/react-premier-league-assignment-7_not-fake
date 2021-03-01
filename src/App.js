import logo from './logo.svg';
import logo2 from './image/logo2.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import playerData from './data/data.json';
import Player from './components/Players/Player';


function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() =>{
    setPlayers(playerData);
    // const names = playerData.map(player =>player.name);
  },[])

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
        <div className="mt-4 col col-lg">
        <div> 
        <h3>Number of Total Cricketers : {players.length}</h3>
        
          {
            players.map(player =><Player info ={player} key ={player.id}>  </Player>)
          }
        

        </div>
        <div> </div>
        </div>
      </header>
    </div>
  );
}

export default App;
