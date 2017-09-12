import React, {Component} from 'react'
import './SegmentedButton.css'

const SegmentedButton = ({enable=true, name, value, children, groupValue, onChange, isFirst=false, isLast=false}) => {
  let containerClass = `segmented-button-container`
  containerClass += ` ${value===groupValue?'segmented-button-container-active': ''}`
  containerClass += ` ${enable?'': 'segmented-button-container-disabled'}`
  containerClass += ` ${isFirst?'segmented-button-container-first':''}`
  containerClass += ` ${isLast?'segmented-button-container-last':''}`
  return (
      <label className={containerClass}>
        <input type="radio" name={name} checked={value === groupValue} value={value}   disabled={!enable} onChange={()=>onChange(value)} />
        {children}
      </label>
  )
}

export default SegmentedButton
