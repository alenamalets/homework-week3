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

class App extends React.Component {
  state={
    name: null,
    value:null
  }
 
  updateSelection = (event) => { 
    this.setState({
      name:event.target.value, 
      value:data[event.target.value]
    })
  }

  addDetails = (event) => {
    if(this.state.value){
      if(!this.props.models.find(a => a.name === this.state.name)){
        this.props.addModel(this.state.name, this.state.value)
      }
      
    }
    event.preventDefault();
  }

  render() {  
    return (
      <div className="App">
        <form onSubmit={this.addDetails}>
        <ModelsList  data={data} updateSelection = {this.updateSelection}/>
        <input type='submit' value='Add' />
        <ModelDetails models={this.props.models} />
        </form>
      </div>
    )
  } 
}

const mapStateToProps = (state) => ({
  models: state
})

export default connect(mapStateToProps, {addModel})(App)



