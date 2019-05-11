import * as React from 'react'

class ModelDetails extends React.Component {
  
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