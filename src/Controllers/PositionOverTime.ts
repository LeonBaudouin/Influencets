import { ControllerInterface } from '../Core/Abstract/Controller/ControllerInterface'
import { StateObjectInterface } from '../Core/Abstract/State/StateObjectInterface'
import { PositionState } from '../Core/Abstract/State/BaseStates'
import { AbstractController } from '../Core/Abstract/Controller/AbstractController'
import { Point } from '../Core/CustomTypes/Point'

type SizeState = StateObjectInterface & PositionState
type PositionOverTimeFunc = (
  time: number,
  amount: number,
  offset: number,
) => number

export default class PositionOverTime extends AbstractController {
  private offset: number
  private amount: number
  private XFunc: PositionOverTimeFunc
  private YFunc: PositionOverTimeFunc
  private time: number = 0
  private defaultPos: Point

  constructor({
    offset,
    amount,
    XFunc,
    YFunc,
  }: {
    offset: number
    amount: number
    XFunc: PositionOverTimeFunc
    YFunc: PositionOverTimeFunc
  }) {
    super()
    this.offset = offset
    this.amount = amount
    this.XFunc = XFunc
    this.YFunc = YFunc
  }

  onCreate(defaultState: SizeState): void {
    this.defaultPos = { ...defaultState.position }
  }

  update(currentState: SizeState): SizeState {
    const newState = <SizeState>currentState.clone()
    newState.position.x =
      this.defaultPos.x + this.XFunc(this.time, this.amount, this.offset)
    newState.position.y =
      this.defaultPos.y + this.YFunc(this.time, this.amount, this.offset)
    this.time++
    return newState
  }
}
