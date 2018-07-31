import React from 'react'
import './controls.css'

const FormControl = ({ label, current, onChange }) => (
  <div className="control-container">
    <div className="control-label">{label}</div>
    <div className="control-arrows">
      <UpArrow onChange={() => onChange(current + 1)} />
      <div className="control-value">{current}</div>
      <DownArrow onChange={() => onChange(current - 1)} />
    </div>
  </div>
)

const UpArrow = ({ onChange }) => (
  <div className="up-arrow" onClick={onChange}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.362 292.361">
      <path d="M286.935,197.287L159.028,69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.287   C1.807,200.904,0,205.186,0,210.134s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.425,12.85,5.425h255.813   c4.949,0,9.233-1.808,12.848-5.425c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.904,286.935,197.287z" />
    </svg>
  </div>
)

const DownArrow = ({ onChange }) => (
  <div className="down-arrow" onClick={onChange}>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 292.362 292.361">
      <path d="M286.935,197.287L159.028,69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.287   C1.807,200.904,0,205.186,0,210.134s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.425,12.85,5.425h255.813   c4.949,0,9.233-1.808,12.848-5.425c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.904,286.935,197.287z" />
    </svg>
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
