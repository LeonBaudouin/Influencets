import { AbstractController } from '../Core/Abstract/Controller/AbstractController'
import { RotationState } from '../Core/Abstract/State/BaseStates'
import { StateObjectInterface } from '../Core/Abstract/State/StateObjectInterface'

export default class RotationOverTime extends AbstractController {
  private speed: number

  constructor({ speed }: { speed: number }) {
    super()
    this.speed = speed
  }

  update(
    state: RotationState & StateObjectInterface,
  ): RotationState & StateObjectInterface {
    state.rotation += this.speed
    return state
  }
}
