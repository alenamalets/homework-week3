import React from 'react';
import './App.css';
import ModelsList from './components/ModelsList'
import {addModel} from './actions/models'
import { connect } from 'react-redux'
import ModelDetails from './components/ModelDetails';

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

let selectedModel = null;
let selectedName = null;

class App extends React.Component {
  state={name: null}
 
  updateSelection = (event) => { 
    selectedModel = data[event.target.value]
    selectedName = event.target.value
    this.setState({name:event.target.value})

  }

  addDetails = () => {
    if(selectedModel){
      this.props.addModel(selectedName,selectedModel)
    }
    
  }

  render() {  
    return (
      <div className="App">
        <ModelsList  data={data} updateSelection = {this.updateSelection}/>
        <button onClick={this.addDetails}> Add </button>
        <ModelDetails models={this.props.models} />
      </div>
    )
  } 
}

const mapStateToProps = (state) => ({
  models: state
})

export default connect(mapStateToProps, {addModel})(App)



