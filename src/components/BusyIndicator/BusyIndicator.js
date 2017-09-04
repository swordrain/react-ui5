import React, { Component } from 'react'
import './BusyIndicator.css'

const BusyIndicator = ({size="1rem"})=> {
  const style = {width: size, height: size, margin: size}
  return (
    <div className="container" style={{margin: size}}>
      <div style={style} className="item" />
      <div style={style} className="item" />
      <div style={style} className="item" />
    </div>
  )
}
export default BusyIndicator
