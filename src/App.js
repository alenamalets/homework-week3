import React from 'react';
import './App.css';
import ModelsList from './components/ModelsList'
import {addModel} from './actions/models'
import { connect } from 'react-redux'

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
  state = {
     name : null
  }

  updateSelection = (event) => {
    // this.setState({
    //   name: event.target.value
    // })  
   
    
    this.props.addModel(data[event.target.value])
  }


  render() {  
    return (
      <div className="App">
        <ModelsList name={this.state.name} data={data} updateSelection = {this.updateSelection}/>
        <button onClick=''> Add </button>
      </div>
    )
  } 
}

const mapStateToProps = (state) => ({
  models: state
})

export default connect(mapStateToProps, {addModel})(App)



