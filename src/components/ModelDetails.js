import * as React from 'react'
import PropTypes from 'prop-types'

class ModelDetails extends React.Component {
    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    // }
  
  render() {
    const models = this.props.models
    return ( 
        <div> 
              { models.map(model =>  
              <ul key={model.name}> 
                  <li>Name: {model.name} </li>
                  <li>Manufacturer: {model.model.manufacturer}</li>
                  <li>Year: {model.model.year}</li>
                  <li>Origin: {model.model.origin}</li> 
              </ul> 
              ) }
       </div>
      )
  }
  
}
export default ModelDetails