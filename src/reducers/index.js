import { combineReducers } from 'redux'

import posts from './posts'
import introduction from './introduction'
import activePost from './activePost'

export default combineReducers({
  posts,
  introduction,
  activePost
})

