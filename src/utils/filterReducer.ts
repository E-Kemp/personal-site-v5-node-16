export const filterReducer = (state: string[], action: string) => {
  console.log(action)
  const index = state.indexOf(action)
  if (state.length === 0) {
    return [action]
  }
  if (index === -1) {
    return [...state, action]
  } else {
    const newState = [...state]
    newState.splice(index, 1)
    return newState
  }
}
