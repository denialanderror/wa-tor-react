import React, { Component } from 'react'
import './TorusDisplay.css'

import { createTorus, shark, fish } from '../logic/generate'
import simulate from '../logic/simulate'
import PlayingPiece from './PlayingPiece'
import { FISH } from '../const'
import { UpdateButton, PlayButton, FormControl } from './Controls'

class TorusDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      torus: { array: [] },
      sharkSpawningAge: 4,
      sharkLifeforce: 3,
      fishSpawningAge: 2
    }
  }

  componentDidMount() {
    this.create()
  }

  play() {
    this.setState({ torus: simulate(this.state.torus) })
  }

  create() {
    const torus = createTorus(22, 16)
    this.setState({ ...this.state, torus })
  }

  changeTile(entity, index) {
    const { array } = this.state.torus

    if (entity === undefined) {
      array[index] = fish(this.state.fishSpawningAge)
    } else if (entity.type === FISH) {
      array[index] = shark(this.state.sharkSpawningAge, this.state.sharkLifeforce)
    } else {
      array[index] = undefined
    }

    this.setState({ ...this.state, torus: { ...this.state.torus, array } })
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: Number(target.value)
    })
  }

  handleIncrementDecrement = target => value => {
    this.setState({
      [target]: value
    })
  }

  render() {
    const { array } = this.state.torus
    return (
      <div className="display">
        <div className="torus">
          {array.map((entity, index) => (
            <div key={index} className="item" onClick={() => this.changeTile(entity, index)}>
              <PlayingPiece entity={entity} />
            </div>
          ))}
        </div>

        <div className="control-border">
          <div className="control-button-container">
            <FormControl
              label="Shark Spawning Age"
              current={this.state.sharkSpawningAge}
              onChange={this.handleIncrementDecrement('sharkSpawningAge')}
            />
            <FormControl
              label="Shark Starting Lifeforce"
              current={this.state.sharkLifeforce}
              onChange={this.handleIncrementDecrement('sharkLifeforce')}
            />
            <FormControl
              label="Fish Spawning Age"
              current={this.state.fishSpawningAge}
              onChange={this.handleIncrementDecrement('fishSpawningAge')}
            />
          </div>
          <UpdateButton update={() => this.create()} />
          <PlayButton play={() => this.play()} />
        </div>
      </div>
    )
  }
}

export default TorusDisplay
