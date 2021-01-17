import { AbstractRenderer } from '../../Core/Abstract/Renderer/AbstractRenderer'
import { StateObjectInterface } from '../../Core/Abstract/State/StateObjectInterface'
import EmptyObjectState from './EmptyObjectState'

export default class EmptyObjectRenderer extends AbstractRenderer {
  transformContext(
    { position, scale, rotation }: EmptyObjectState,
    ctx: CanvasRenderingContext2D,
  ): void {
    ctx.scale(scale.x, scale.y)
    ctx.translate(position.x, position.y)
    ctx.rotate(rotation)
  }

  draw(): void {}
}
