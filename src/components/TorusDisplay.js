import React, { Component, Fragment } from 'react'
import './TorusDisplay.css'

import { createTorus, shark, fish } from '../logic/generate'
import simulate from '../logic/simulate'
import PlayingPiece from './PlayingPiece'
import { FISH } from '../const'

class TorusDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      torus: { array: [] },
      sharkSpawningAge: 3,
      sharkLifeforce: 5,
      fishSpawningAge: 3
    }
  }

  componentDidMount() {
    this.create()
  }

  play() {
    this.setState({ torus: simulate(this.state.torus) })
  }

  create() {
    const torus = createTorus(10, 10)
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
      [target.name]: target.value
    })
  }

  render() {
    const { array } = this.state.torus
    return (
      <Fragment>
        <div className="grid">
          {array.map((entity, index) => (
            <div key={index} className="item" onClick={() => this.changeTile(entity, index)}>
              <PlayingPiece entity={entity} />
            </div>
          ))}
        </div>

        <form>
          <label>
            Shark Spawning Age:
            <input
              name="sharkSpawningAge"
              type="text"
              value={this.state.sharkSpawningAge}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Shark Starting Lifeforce:
            <input
              name="sharkLifeforce"
              type="text"
              value={this.state.sharkLifeforce}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Fish Spawning Age:
            <input
              name="fishSpawningAge"
              type="text"
              value={this.state.fishSpawningAge}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <button onClick={() => this.create()}>CREATE</button>
        <button onClick={() => this.play()}>PLAY</button>
      </Fragment>
    )
  }
}

export default TorusDisplay
