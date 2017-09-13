import React, { Component } from 'react'
import './StepInput.css'
import Icon from '../Icon/Icon'

export default class StepInput extends Component{

  constructor(props){
    super(props)
    const {displayValuePrecision=0} = this.props
    this.state = {
      value: (this.props.defaultValue || 0).toFixed(displayValuePrecision),
      error: false
    }
    this._onClickMinus = this._onClickMinus.bind(this)
    this._onClickPlus = this._onClickPlus.bind(this)
    this._onChange = this._onChange.bind(this)
    this._onBlur = this._onBlur.bind(this)
  }

  _onClickMinus(){
    const {step=1, min, displayValuePrecision=0, onChange=()=>{}} = this.props
    if(min === undefined || Number(this.state.value) - step >= min){
      this.setState({
        value : (Number(this.state.value) - step).toFixed(displayValuePrecision)
      }, ()=>{
        onChange(Number(this.state.value))
      })
    }
  }

  _onClickPlus(){
    const {step=1, max, displayValuePrecision=0, onChange=()=>{}} = this.props
    if(max === undefined || Number(this.state.value) + step <= max){
      this.setState({
        value : (Number(this.state.value) + step).toFixed(displayValuePrecision)
      }, ()=>{
        onChange(Number(this.state.value))
      })
    }
  }

  _onChange(e) {

    const value = e.target.value
    const self = this

    this.setState({
      value
    })
  }
  _onBlur() {
    const {displayValuePrecision=0, onChange=()=>{}, min, max} = this.props
      const number = Number(this.refs.stepInput.value)
      if(Number.isNaN(number)){
        this.setState({
          error: true
        })
      } else {
        if(!((min !== undefined && number < min) || (max !== undefined && number > max))){
          this.setState({
            value: number.toFixed(displayValuePrecision),
            error: false
          }, ()=>{
            onChange(Number(this.state.value))
          })
        } else {
          this.setState({
            error: true
          })
        }
      }
    }

  componentDidMount() {
    this.refs.stepInput.addEventListener('blur', this._onBlur)
  }

  componentWillUnmount(){
    this.refs.stepInput.removeEventListener('blur', this._onBlur)
  }


  render(){
    const {width='120px', enabled=true, editable=false} = this.props
    return(
    <div className={`step-input-container ${enabled?'':'step-input-container-disabled'} ${this.state.error?'step-input-container-error':''}`} style={{width}}>
      <div className={`step-input-operation ${this.state.error?'step-input-operation-error':''}`} onClick={this._onClickMinus}>
        <Icon src="less" size="0.8rem" />
      </div>
      <input ref='stepInput' className="step-input-input" onChange={this._onChange} readOnly={!editable} value={this.state.value} />
      <div className={`step-input-operation ${this.state.error?'step-input-operation-error':''}`} onClick={this._onClickPlus}>
        <Icon src="add" size="0.8rem" />
      </div>
    </div>)
  }
}

//displayValuePrecision
//min
//max
//step
//enabled
//editable
//onChange
//width
//defultValue
