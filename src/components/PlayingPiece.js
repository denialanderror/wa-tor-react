import React from 'react'
import { FISH, SHARK } from '../const'
import Shark from './Shark'
import Fish from './Fish'
import './PlayingPiece.css'

const PlayingPiece = ({ entity }) => <div className="container">{display(entity)}</div>

const display = entity => {
  if (!entity) {
    return <VacantSpace />
  }
  switch (entity.type) {
    case SHARK:
      return <Shark entity={entity} />
    case FISH:
      return <Fish entity={entity} />
    default:
      return <VacantSpace />
  }
}

const VacantSpace = () => <div className="sea" />

export default PlayingPiece
