import React, { useState } from 'react'

import { connect } from 'react-redux'
import Post from './Post'
import ModifyPostPopup from './ModifyPostPopup'
const Posts = ({posts}) => {



  const getPosts = (postChunk) => {
    
    return (
      postChunk.map((post, index) => {
      return(
        <>
        <div className ="column is-one-third">
          <Post post={post} key = {index}></Post>
        </div>            
        <ModifyPostPopup post={post} key = {index}/>
        </>
      )
    }))
  }

  const genPosts = () => {
    let array = []
    let cols = 3

    for (let i = 0; i < posts.length; i += cols){
      array.push(posts.slice(i, i + cols))
    }


    return(array.map(postChunk => {
      return(
      <>
      <div className="columns">
        {getPosts(postChunk)}
      </div>
      </>)
    }))
  }
  
  return(
    <>
      {genPosts()}
    </>
  )

}




const mapStateToProps = (state) => ({
  posts: state.posts
})



export default connect(mapStateToProps)(Posts)