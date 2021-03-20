import React, { useState } from "react"
import { connect } from "react-redux"
import { addPosts, toggleActiveAddPost } from "../actions"

const AddPostPopup = ({dispatchAddPosts, dispatchToggleActiveAddPost}) => {

  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const closeWindow = () => {
    dispatchToggleActiveAddPost()
  }

  const saveChanges = () => {
    dispatchToggleActiveAddPost()
    dispatchAddPosts({title, image, description})
    
  }

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
          <h4> Title </h4>
          <input className="input" type="text" value = {title} onChange = {(e) => setTitle(e.target.value)}></input>
          <h4> Image </h4>
          <input className="input" type="text" value = {image} onChange = {(e) => setImage(e.target.value)}></input>
          <h4> Description </h4>
          <input className="input" type="text" value = {description} onChange = {(e) => setDescription(e.target.value)}></input>
          
        </section>
        
        <footer className="modal-card-foot">
          <button className="button is-success" onClick = {() => {

          if(title !== "" && image !== "" && description !== "") {
            saveChanges()
          } else {
            alert("Empty Fields")
          }
          
          
          }

          
          
          }>Save changes</button>
          <button className="button" onClick = {() => closeWindow()}>Cancel</button>
        </footer>
      </div>
    </div>
  </>)    

  
  
}



const mapDispatchToProps = dispatch => ({
  dispatchAddPosts: (status) => dispatch(addPosts(status)),
  dispatchToggleActiveAddPost: (status) => dispatch(toggleActiveAddPost(status))
})

export default connect(null, mapDispatchToProps)(AddPostPopup)
