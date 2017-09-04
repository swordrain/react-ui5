import React, { Component } from 'react'
import IconTypes from './IconTypes'
import './Icon.css'
const Icon = ({src, color, size="1rem"}) => {
  //const icon = (IconTypes[src]).toString(16)
  const icon = IconTypes[src]
  return (
    <span className="icon" style={{fontSize: size, color}}>{icon}</span>
  )
}

export default Icon

Icon.propTypes = {
  // src="sap-icon://syringe"
	// 		class="size1"
	// 		color="#031E48"
}
