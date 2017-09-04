import React, { Component } from 'react'
import Icon from '../Icon/Icon'
import './Button.css'

export default class Button extends Component{

  render() {
    const {type, text, hasBorder, enabled, onPress, icon, iconFirst} = this.props
    let className = `button button-${type.toLowerCase()}`
    if(!enabled){
      className += ' button-disabled'
    }

    return (
      <button className={className} onClick={onPress}>
        {(icon&&iconFirst)?<Icon src={icon} size="0.8rem" />:null}
        {text}
        {(icon&&!iconFirst)?<Icon src={icon} size="0.8rem"/>:null}
      </button>

    )

  }


}
Button.defaultProps={
  enabled: true,
  onPress: ()=>{},
  iconFirst: true
}

Button.propTypes = {
  //hasBorder
  //type
  //text
  //enabled
  //icon
  //iconFirst
  //onPress
}
