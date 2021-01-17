import { AbstractRenderer } from '../../Core/Abstract/Renderer/AbstractRenderer'
import RectangleState from './RectangleState'

export default class RectangleRenderer extends AbstractRenderer {
  transformContext(
    { position, color }: RectangleState,
    ctx: CanvasRenderingContext2D,
  ): void {
    ctx.fillStyle = color.toString()
    ctx.translate(position.x, position.y)
  }

  draw({ size }: RectangleState, ctx: CanvasRenderingContext2D): void {
    ctx.fillRect(-size.width / 2, -size.height / 2, size.width, size.height)
  }
}
