
import React, { Component } from 'react'
import './Link.css'

const Link = ({href="#", target="_blank", text="", onPress, enabled=true, emphasized=false}) => {

  let className = "link"

  if(!enabled){
    className += " link-disabled"
  }
  if(emphasized){
    className += " link-emphasized"
  }

  return(
    <a href={onPress?"javascript:void":href} target={target} className={className} onClick={(e)=>{if(!enabled){e.preventDefault() } else { onPress() }}}>{text}</a>
  )

}

export default Link
