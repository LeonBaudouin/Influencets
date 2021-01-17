import {
  RotationState,
  PositionState,
} from '../../Core/Abstract/State/BaseStates'
import { StateObjectInterface } from '../../Core/Abstract/State/StateObjectInterface'
import { Point } from '../../Core/CustomTypes/Point'

type EmptyObjectStateParams = RotationState & { scale: Point } & PositionState

export default class EmptyObjectState
  implements EmptyObjectStateParams, StateObjectInterface {
  public rotation: number
  public scale: Point
  public position: Point

  constructor({
    rotation = 0,
    scale = { x: 1, y: 1 },
    position = { x: 0, y: 0 },
  }: Partial<EmptyObjectStateParams>) {
    this.rotation = rotation
    this.scale = { ...scale }
    this.position = { ...position }
  }

  public clone(): EmptyObjectState {
    return new EmptyObjectState(this)
  }
}
