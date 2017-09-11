import React, { Component } from 'react'
import './Token.css'
import Icon from '../Icon/Icon'

const Token = ({title, onCancel}) => {
  return (<div className="token">{title}<span onClick={onCancel} className="cancel"><Icon src="sys-cancel" size="0.75rem" /></span></div>)
}

export default Token
