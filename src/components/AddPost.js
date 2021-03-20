import React, { useState } from 'react'

import { connect } from 'react-redux'
import AddPostPopup from './AddPostPopup'
import { toggleActiveAddPost } from '../actions'


const AddPost = ({activePost, dispatchToggleActiveAddPost}) => {
  

  const popupPost = () => {
      if(activePost) {
        return(
          <>
            <AddPostPopup/>
          </>
        )
      } else {<></>}
    }  

  return (
  <>
    <section className="section">
    <button className="button" onClick = {() => dispatchToggleActiveAddPost()}> Add Post</button>
    {popupPost()}
    </section>

  
  </>

  )

}




const mapStateToProps = (state) => ({
  activePost: state.activePost
})

const mapDispatchToProps = (dispatch) => ({
  dispatchToggleActiveAddPost: (status) => {dispatch(toggleActiveAddPost(status))}
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)