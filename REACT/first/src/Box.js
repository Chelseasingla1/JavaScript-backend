import React from 'react'

export default function Box(props) {
    
// export default function Box(name) {
    let content = "| " + props.content + " |" // able to write in it
  return (
    <div>
        <h1>---------------------------------</h1>
        {/* <h2>{props.content}</h2> */}
        <h2>{content}</h2>
        {props.children}
        {/* props.content = prop.scontds + " .//" // cant write it  */}
        {/* <h2>{name.content}</h2> */}
        <h1>---------------------------------</h1>
    </div>
  )
}
