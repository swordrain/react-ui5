import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './SearchField.css'
import Button from  '../Button/Button'

// const SearchField = ({value="",placeholder="",selectOnFocus=true, enable=true, width="100%"})=>{
//   return (<input style={{width}} value={value} placeholder={placeholder} />)
// }
// export default SearchField

export default class SearchField extends Component{

  constructor(...props){
    super(...props)
    this.state = {
      value: this.props.value || ""
    }
    this._onChange = this._onChange.bind(this)
    this._onSearch = this._onSearch.bind(this)
    this._onClear = this._onClear.bind(this)
    this._onKeyDown = this._onKeyDown.bind(this)
    this._onKeyUp = this._onKeyUp.bind(this)
  }

  _onChange(e) {
    this.setState({
      value: e.target.value
    })
  }


  _onSearch(){
    this.props.onSearch(this.state.value)
  }
  _onClear(){
    this.setState({
      value: ""
    })
  }
  _onKeyDown(e) {
    if(e.which === 27){
      this.setState({
        value: ""
      })
    }
  }
  _onKeyUp(e){
    if(e.which === 13){
      this._onSearch()
    }
  }

  render(){
    const {width="100%", placeholder="", enable=true} = this.props
    const clearBtn = this.state.value.length > 0? <Button type="transparent" icon="sys-cancel" onPress={this._onClear} /> : null
    const searchBtn = this.state.value.length > 0? <Button ref="srhBtn" type="transparent" icon="search" onPress={this._onSearch} /> : null
    return (
      <div style={{width}} className="search-field-container" onKeyDown={this._onKeyDown} onKeyUp={this._onKeyUp}>
      <input className="searchField"  onChange={this._onChange} disabled={!enable} value={this.state.value} placeholder={placeholder} />
      {clearBtn}
      {searchBtn}
      </div>
    )
  }
}
