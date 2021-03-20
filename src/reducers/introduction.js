const defaultImageUrl= "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
let defaultState = {image: defaultImageUrl, description: 'Smiley Face Introduction', isModify: false}

const introduction = (state = defaultState, action) => {
  const { type, image, description, isModify } = action

  switch (type) {
    case 'MODIFY_INTRODUCTION':
      return {image, description, isModify}
    case 'TOGGLE_INTRODUCTION':
      return {...state, isModify: !state.isModify}
    default:
      return state
  }
}

export default introduction