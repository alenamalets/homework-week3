import * as React from 'react'
import ModelDetails from './ModelDetails'

class ModelDetailsContainer extends React.Component {
  render() {
    const models = this.props.models
    if (!models) return null
    return <ModelDetails models={models}/>
  }
}


  export default ModelDetailsContainer