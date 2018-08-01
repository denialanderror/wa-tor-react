import React from 'react'
import './controls.css'

const FormControl = ({ label, current, onChange }) => (
  <div className="control-container">
    <div className="control-text">{label}</div>
    <i class="fas fa-arrow-circle-left fa-lg arrow" onClick={() => onChange(current - 1)} />
    <input type="text" value={current} class="control-value" />
    <i class="fas fa-arrow-circle-right fa-lg arrow" onClick={() => onChange(current + 1)} />
  </div>
)

const UpdateButton = ({ update }) => (
  <button className="control-button" onClick={update}>
    Update
  </button>
)

const PlayButton = ({ play }) => (
  <button className="control-button" onClick={play}>
    Play
  </button>
)

export { FormControl, UpdateButton, PlayButton }
