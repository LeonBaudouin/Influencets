import { Point } from '../../CustomTypes/Point'
import { Size } from '../../CustomTypes/Size'

export interface PositionState {
  position: Point
}

export interface AngleState {
  angle: number
}

export interface OneDimensionSizeState {
  size: number
}

export interface TwoDimensionSizeState {
  size: Size
}

export interface PhysicState extends PositionState {
  velocity: Point
  acceleration: Point
}
