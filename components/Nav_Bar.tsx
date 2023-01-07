import React from 'react'

type Props = {
    content : String,
}

const NavBar = (props: Props) => {
  return (
    <>
      <h1> Nav Bar</h1>
      <h4>{props.content}</h4>
    </>
  )
}

export default NavBar