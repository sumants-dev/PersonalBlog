import React, { useState } from "react"
import { connect } from "react-redux"
import { deletePost, modifyPost, toggleModifyPost} from "../actions"

const ModifyPostPopup = ({post, dispatchToggleModifyPost, dispatchDeletePost, dispatchModifyPost}) => {

  const [id, setId] = useState(post.id)
  const [isModify, setIsModify] = useState(post.isModify)
  const [image, setImage] = useState(post.image)
  const [title, setTitle] = useState(post.title)
  const [description, setDescription] = useState(post.description)

  const closeWindow = () => {
    dispatchToggleModifyPost(id)
    setIsModify(false)
  }

  const saveChanges = () => {
    dispatchToggleModifyPost(id)
    setIsModify(false)
    dispatchModifyPost({id, title, image, description})
    
  }

  if (post.isModify) {
      return(
      <>
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modify Introduction</p>
              <button className="delete" onClick = {() => closeWindow()} aria-label="close"></button>
            </header>

            <section className="modal-card-body">
              <input className="input" type="text" value = {title} onChange = {(e) => setTitle(e.target.value)}></input>
              <input className="input" type="text" value = {image} onChange = {(e) => setImage(e.target.value)}></input>
              <input className="input" type="text" value = {description} onChange = {(e) => setDescription(e.target.value)}></input>
              
            </section>
            
            <footer className="modal-card-foot">
              <button className="button is-success" onClick = {() => saveChanges()}>Save changes</button>
              <button className="button" onClick = {() => closeWindow(id)}>Cancel</button>
            </footer>
          </div>
        </div>
      </>)    
  } else {
    return(
      <>
      </>
    )
  }
  
}


const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post
})

const mapDispatchToProps = dispatch => ({
  dispatchToggleModifyPost: (status) => dispatch(toggleModifyPost(status)),
  dispatchDeletePost: (status) => dispatch(deletePost(status)),
  dispatchModifyPost: (status) => dispatch(modifyPost(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModifyPostPopup)
