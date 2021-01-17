import { RendererInterface } from './RendererInterface'
import { StateObjectInterface } from '../State/StateObjectInterface'
import { DrawableInterface } from '../Drawable/DrawableInterface'

export abstract class AbstractRenderer implements RendererInterface {
  // TO DO
  // Save/Restore context only if the state
  // contains props that might change it
  render(
    state: StateObjectInterface,
    ctx: CanvasRenderingContext2D,
    children: DrawableInterface[],
  ): void {
    ctx.save()
    this.transformContext(state, ctx)
    this.draw(state, ctx)
    children.forEach((c) => c.draw(ctx))
    ctx.restore()
  }

  abstract transformContext(
    state: StateObjectInterface,
    ctx: CanvasRenderingContext2D,
  ): void

  abstract draw(
    state: StateObjectInterface,
    ctx: CanvasRenderingContext2D,
  ): void
}
