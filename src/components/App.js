import React, { useState } from 'react'
import Introduction from './Introduction'
import Posts from './Posts'
import AddPost from './AddPost'

const App = (props) => {

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>

      <h1 className="title is-1"> Personal Blog </h1>

      <Introduction/>
      <AddPost/>
      <Posts/>

      <footer></footer>
     </>
  )

}



export default App