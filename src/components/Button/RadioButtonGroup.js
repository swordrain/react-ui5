import React, {Component} from 'react'
import RadioButton from './RadioButton'

export default class RadioButtonGroup extends Component{

  constructor(props){
    super(props)
    this.state = {
      groupValue : this.props.value
    }
    this._onChange = this._onChange.bind(this)
  }
  _onChange(value) {
    this.setState({
      groupValue: value
    })
    this.props.onChange(this.state.groupValue)
  }

  render(){
    const {name} = this.props
    return (
      <div>
      {
        this.props.children.map(item => {
          const props = Object.assign({}, item.props)
          props.onChange = this._onChange
          props.name = name
          props.groupValue = this.state.groupValue
          return (
            <RadioButton {...props}/>

          )
        })
      }


      </div>

    )
  }
}
