let defaultState = false

const introduction = (state = defaultState, action) => {
  const { type } = action

  switch (type) {
    case 'TOGGLE_ACTIVE':
      return !state
    default:
      return state
  }
}

export default introduction