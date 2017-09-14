
import React, { Component } from 'react'
import './StandardTile.css'
import Icon from '../Icon/Icon'

export default class StandardTile extends Component{

  constructor(props){
    super(props)
    this.state = {
      active: false
    }
    this._onMouseDown = this._onMouseDown.bind(this)
    this._onMouseUp = this._onMouseUp.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)
  }

  _onMouseDown(){
    this.setState({
      active: true
    })
  }

  _onMouseUp(){
    this.setState({
      active: false
    })
  }
  _onMouseLeave() {
    if(this.state.active){
      this.setState({
        active: false
      })
    }
  }

  render() {
    const {type="default", icon, title, number, info, infoState="default", numberUnit, onPress=()=>{} } = this.props
    return (
      <div className={`standard-tile-container ${this.state.active?'standard-tile-container-active':''}`} onClick={onPress} onMouseLeave={this._onMouseLeave} onMouseDown={this._onMouseDown} onMouseUp={this._onMouseUp}>
        <div className="standard-tile-top-row">
          <div className={`standard-tile-top-row-icon-wrapper ${this.state.active?'standard-tile-top-row-icon-wrapper-active':''}`}>
            {icon? <Icon src={icon} size='2rem'/>: null}
          </div>
          <div className="standard-tile-top-row-number-wrapper">
            <div className={`standard-tile-top-row-number ${this.state.active?'standard-tile-top-row-number-active':''}`}>
              {number}
            </div>
            <div className={`standard-title-top-row-number-unit ${this.state.active?'standard-title-top-row-number-unit-active':''}`}>
              {numberUnit}
            </div>
          </div>
        </div>
        <div className={`standard-tile-bottom-row  ${this.state.active?'standard-tile-bottom-row-active': 'standard-tile-' + type}`}>
          <div className={`standard-tile-title ${this.state.active?'standard-tile-title-active':''}`}>{title}</div>
          <div className={`standard-tile-info ${this.state.active?'standard-tile-info-active':'standard-tile-info-'+infoState}`}>{info}</div>
        </div>
      </div>

    )
  }
}



//onPress
//Icon
//type
//title
//number
//numberunit
//info
//info-state
