import React, {Component} from 'react'
import './Select.css'
import Icon from '../Icon/Icon'
//enable
//onChange
//items
//value
//width
export default class Select extends Component {

  constructor(props){
    super(props)
    this.state = {
      showItems: false,
      value: this.props.value
    }
    this._toggle = this._toggle.bind(this)
    this._onClickDocument = this._onClickDocument.bind(this)
  }

  _toggle(){
    this.setState({
      showItems: !this.state.showItems
    })
  }
  _onSelect(value){
    this.setState({
      value
    })
    if(this.state.value !== value){
      this.props.onChange(value)
    }
  }

  _onClickDocument(e){
    if(document.getElementsByTagName("html")[0] === e.target && this.state.showItems){
      this.setState({
        showItems: false
      })
    }
  }

  componentDidMount(){
    document.addEventListener('click', this._onClickDocument)
  }
  componentWillUnmount(){
    document.removeEventListener('click', this._onClickDocument)
  }

  render() {
    const {width='100%', items={}, onChange} = this.props
    return (
      <div className="select-container" style={{width}} onClick={this._toggle}>

        {this.state.showItems?<div className="select-items" style={{width}}>
          <ul>
            {Object.keys(items).map(key => {
              return <li key={key} onClick={this._onSelect.bind(this, key)}>
                {items[key]}
              </li>
            })}
          </ul>
          </div>:null}
          {items[this.state.value]}
          <div className="select-indicator" style={{backgroundColor: this.state.showItems?'#427cac':'white', color: this.state.showItems?'white':'#bfbfbf'}}>
            <Icon src="navigation-down-arrow" size="0.8rem"/>
          </div>
      </div>
    )

  }


}
