import React from 'react'

function UserProfile({name,age,loc,bio}) {
  return (
    <>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <h1>Location:{loc}</h1>
        <h1>Bio:{bio}</h1>
    </>
  )
}

export default UserProfile