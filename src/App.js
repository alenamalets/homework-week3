import React from 'react';
import './App.css';
import ModelsList from './components/ModelsList'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class App extends React.Component {
  state = { name : null}

  updateSelection = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  
  render() {  
    console.log(this.state);
    return (
      <div className="App">
        <ModelsList data={data} updateSelection = {this.updateSelection}/>
      </div>
    )
  }
  
}

export default App;


