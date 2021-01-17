import { AbstractRenderer } from '../../Core/Abstract/Renderer/AbstractRenderer'
import CircleState from './CircleState'

export default class CircleRenderer extends AbstractRenderer {
  transformContext(
    { color, position }: CircleState,
    ctx: CanvasRenderingContext2D,
  ): void {
    ctx.translate(position.x, position.y)
    ctx.fillStyle = color.toString()
  }

  draw({ size }: CircleState, ctx: CanvasRenderingContext2D): void {
    ctx.beginPath()
    ctx.arc(0, 0, size, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }
}
