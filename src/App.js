import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import race from "./race";

class Winner extends Component {
    render() {
        const horse = this.props.horse;

        return horse ? (
            <div>
                <h2>Winner is: <strong>{horse.name}</strong></h2>
                <img src={horse.image} alt="winner" style={{maxWidth: 400}}/>
            </div>
        ) : '';
    }
}

class App extends Component {

  state = {
      winner: null

  };

  horses = [
      {name: 'StormWind', url: 'horses/stormwind.json'},
      {name: 'Jasmine', url: 'horses/jasmine.json'},
      {name: 'Scotty', url: 'horses/scotty.json'},
      {name: 'Puffy', url: 'horses/puffy.json'}
  ];


  async startRace() {
      this.setState({
        winner: await race(this.horses)
    });
  }

  render() {

      const winner = this.state.winner;

      return (
          <div className='container-fluid'>

              <h1>Horse Racing App</h1>

              <button className='btn btn-primary' onClick={this.startRace.bind(this)}>Start race</button>
              <Winner horse={winner}/>
          </div>
      );
  }
}

export default App;
