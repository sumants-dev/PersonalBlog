import React, { useState } from 'react'
import { connect } from 'react-redux'

import { modifyIntroduction, toggleModifyIntroduction } from '../actions'

const ModifyIntroPopup = ({introModify, dispatchToggleModifyIntro, dispatchModifyIntroduction }) => {
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const saveChanges = () => {
    dispatchToggleModifyIntro()
    dispatchModifyIntroduction({image, description})
  }


  if (introModify) {
      return(
      <>
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modify Introduction</p>
              <button className="delete" onClick = {() => dispatchToggleModifyIntro()} aria-label="close"></button>
            </header>

            <section className="modal-card-body">
              <input className="input" type="text" value = {image} onChange = {(e) => setImage(e.target.value)}></input>
              <input className="input" type="text" value = {description} onChange = {(e) => setDescription(e.target.value)}></input>
              
            </section>
            
            <footer className="modal-card-foot">
              <button className="button is-success" onClick = {() => saveChanges()}>Save changes</button>
              <button className="button" onClick = {() => dispatchToggleModifyIntro()}>Cancel</button>
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





const mapStateToProps = (state) => ({
  introModify: state.introduction.isModify
})


const mapDispatchToProps = dispatch => ({
  dispatchToggleModifyIntro: () => dispatch(toggleModifyIntroduction()),
  dispatchModifyIntroduction: (status) => dispatch(modifyIntroduction(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModifyIntroPopup)

