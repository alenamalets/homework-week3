export const ADD_MODEL = 'ADD_MODEL'

export function addModel(name, model) {
  return {
    type: ADD_MODEL,
    payload: {...model, name }
  }
}