import React, { useState } from 'react'

import { connect } from 'react-redux'

import { toggleModifyIntroduction, modifyIntroduction } from '../actions'
import ModifyIntroPopup  from './ModifyIntroPopup'

const Introduction = ({dispatchToggleModifyIntro, introduction }) => {


  return(
    <>
      <span></span>
      <div className="columns is-centered">
        <figure className="image is-256x256">
          <img src={introduction.image}/>
        </figure>
      </div>
      <div className="columns is-centered">
        <p>{introduction.description}</p>
        <br></br>
      </div>       
          
      <div className="columns is-centered">
          <button className = "button is-primary" onClick = {() => dispatchToggleModifyIntro()}>Modify</button>
          <br></br>        
      </div>

      {<ModifyIntroPopup/>}
    </>
  )
}


const mapDispatchToProps = dispatch => ({
  dispatchToggleModifyIntro: () => dispatch(toggleModifyIntroduction()),
  dispatchModifyIntroduction: (status) => dispatch(modifyIntroduction(status))
})

const mapStateToProps = state => ({
  introduction: state.introduction
})

export default connect(mapStateToProps, mapDispatchToProps)(Introduction)