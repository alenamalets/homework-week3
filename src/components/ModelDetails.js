import * as React from 'react'
import PropTypes from 'prop-types'

class ModelDetails extends React.Component {
 
  static propTypes = {
    models: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      origin: PropTypes.string.isRequired
      
    })).isRequired,
  }
  
  render() {
    const models = this.props.models
    return ( 
      <div> 
        { models.map(model =>  
          <ul key={model.name}> 
            <li>Name: {model.name} </li>
            <li>Manufacturer: {model.manufacturer}</li>
            <li>Year: {model.year}</li>
            <li>Origin: {model.origin}</li> 
          </ul> 
        ) }
      </div>
    )
  }
  
}
export default ModelDetails