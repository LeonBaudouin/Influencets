import CircleState, { CircleStateParams } from './CircleState'
import { PhysicState } from '../../Core/Abstract/State/BaseStates'
import { Point } from '../../Core/CustomTypes/Point'

export default class PhysicCircleState
  extends CircleState
  implements PhysicState {
  public velocity: Point
  public acceleration: Point

  constructor(params: PhysicState & CircleStateParams) {
    super(params)
    this.velocity = { ...params.velocity }
    this.acceleration = { ...params.acceleration }
  }

  public clone(): PhysicCircleState {
    return new PhysicCircleState(this)
  }
}
