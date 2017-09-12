import React, {Component} from 'react'
import SegmentedButton from './SegmentedButton'
import './SegmentedButtonGroup.css'

export default class SegmentedButtonGroup extends Component{

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

  render() {
    const {name, width="100%"} = this.props
    return (
      <div style={{width}} className="segment-button-group">
      {
        this.props.children.map((item, index) => {
          const isFirst = index === 0
          const isLast = index === this.props.children.length - 1
          const props = Object.assign({}, item.props)
          props.onChange = this._onChange
          props.name = name
          props.groupValue = this.state.groupValue
          props.style = { width: `${100/this.props.children.length}%`}
          props.isFirst = isFirst
          props.isLast = isLast
          return (
            <SegmentedButton {...props}/>

          )
        })
      }


      </div>

    )
  }
}
