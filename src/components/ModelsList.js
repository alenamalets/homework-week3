import * as React from 'react'

export default function ModelsList(props) {

  return (
    <select onChange={props.updateSelection}>
      <option value=''>-- pick a model --</option>
      {Object.keys(props.data).map(key =>
        <option key={key} value={key}>
          {key} ({props.data[key].year})
        </option>
      )} 
    </select>
  )
}