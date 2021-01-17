import { StateObjectInterface } from '../../Core/Abstract/State/StateObjectInterface'
import { Point } from '../../Core/CustomTypes/Point'
import Color from '../../Core/CustomTypes/Color'
import {
  OneDimensionSizeState,
  PositionState,
} from '../../Core/Abstract/State/BaseStates'

export default class CircleState
  implements StateObjectInterface, CircleStateParams {
  public color: Color
  public size: number
  public position: Point

  constructor({
    color,
    size,
    position,
  }: Omit<CircleStateParams, 'position'> &
    Partial<Pick<CircleStateParams, 'position'>>) {
    this.color = color
    this.size = size
    this.position = { ...position }
  }

  clone(): CircleState {
    return new CircleState(this)
  }
}

export interface CircleStateParams
  extends OneDimensionSizeState,
    PositionState {
  color: Color
}
