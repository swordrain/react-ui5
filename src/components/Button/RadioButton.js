import React, {Component} from 'react'
import './RadioButton.css'


// export default class RadioButton extends Component {
//
//   constructor(props){
//     super(props)
//     this.state = {
//       checked : this.props.defaultChecked
//     }
//     this._onChange = this._onChange.bind(this)
//   }
//   _onChange() {
//
//     this.setState({
//       checked: !this.state.checked
//     })
//   }
//
//   render() {
//
//     const {label, enable="true", name} = this.props
//     const containerClass = `radio-button-container ${enable?'':'radio-button-container-disabled'}`
//     return (
//       <div className={containerClass}>
//           <label >
//             <input type="radio" name={name} checked={this.state.checked}  disabled={!enable} onClick={this._onChange}/>
//             {label}
//           </label>
//         </div>
//
//
//     )
//   }
// }

const RadioButton = ({enable=true, name, value, children, groupValue, onChange }) => {
  const containerClass = `${enable?'radio-button-container':'radio-button-container-disabled'}`
  return (

      <label className={containerClass}>
        <div className={`radio-button-indicator-${value===groupValue?'checked':'unchecked'}`} />
        <input type="radio" name={name} checked={value === groupValue} value={value}   disabled={!enable} onChange={()=>onChange(value)} />
        {children}
      </label>
  )
}

export default RadioButton
