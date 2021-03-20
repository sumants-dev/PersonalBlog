

const defaultImageUrl= "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"
const defaultState = [{id: 0, title: "Test Post 1", image: defaultImageUrl, description: "Modify Me", isModify: false}, {id: 1, title: "Test Post 2", image: defaultImageUrl, description: "Modify Me", isModify: false},
{id: 2, title: "Test Post 3", image: defaultImageUrl, description: "Modify Me", isModify: false}]

const posts = (state = defaultState, action) => {
  const { type, id, title, image, description, isModify } = action

  switch (type) {
    case "ADD_POST":
      return [
        ...state, 
        { id, title, image, description, isModify }
      ]
    case "MODIFY_POST":
      return state.map(post => {
        if (post.id === id) {
          return { id, title, image, description, isModify }
        }

        return post
      })
    case "DELETE_POST":
      return state.filter(post => post.id !== id)
    case "TOGGLE_ISMODIFY_POST":
      return state.map(post => {
        if (post.id === id) {
          return { ...post, isModify: !post.isModify }
        }
        return post
      })
    default:
      return state
  }
}

export default posts