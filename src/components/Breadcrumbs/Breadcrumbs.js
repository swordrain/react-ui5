import React, { Component } from 'react'
import './Breadcrumbs.css'
import Text from '../Text/Text'

const Breadcrumbs = ({currentLocationText, children}) => {
  return (
    <ul className="breadcrumbs-ul">
      {
        children.map((item) => {
          return <li className="breadcrumbs-li">{item}<span className="breadcrumbs-seperation">/</span></li>
        })
      }
      <li className="breadcrumbs-li">
        <Text text="currentLocation" />
      </li>
    </ul>

  )
}

export default Breadcrumbs
