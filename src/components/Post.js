import React, { useState } from 'react'

import { connect } from 'react-redux'

import { deletePost, toggleModifyPost } from '../actions'

import ModifyPostPopup from './ModifyPostPopup'

const Post = ({post, dispatchDeletePost, dispatchToggleModifyPost}) => {

  return (
  <>
    <div className="card mb-medium">
      <header className="card-header">
        <p className="card-header-title">
          {post.title}
        </p>
      </header>
      <div className="card-content">
        <figure className="image is-4by3">
          <img src={post.image}></img>
        </figure>
      
      </div>
      <div className="content">
        {post.description}
      </div>

      <footer className="card-footer">
        <button className="card-footer-item" onClick={() => dispatchToggleModifyPost(post.id)}>Modify</button>
        <button className="card-footer-item" onClick={() => dispatchDeletePost(post.id)}>Delete</button>
      </footer>
    </div>
  
  </>

  )

}



const mapDispatchToProps = dispatch => ({

  dispatchToggleModifyPost: (status) => dispatch(toggleModifyPost(status)),
  dispatchDeletePost: (status) => dispatch(deletePost(status))
})

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)