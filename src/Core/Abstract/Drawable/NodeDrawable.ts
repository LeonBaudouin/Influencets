import { BaseDrawable, BaseDrawableOptions } from './BaseDrawable'
import { DrawableInterface } from './DrawableInterface'

export type NodeDrawableOptions = BaseDrawableOptions & {
  children?: DrawableInterface[]
}

export class NodeDrawable extends BaseDrawable {
  protected children: DrawableInterface[]

  public constructor({ children = [], ...options }: NodeDrawableOptions) {
    super(options)
    this.children = children
  }

  public onCreate(): void {
    super.onCreate()
    this.children.forEach((c) => c.onCreate())
  }

  public onDestroy(): void {
    super.onDestroy()
    this.children.forEach((c) => c.onDestroy())
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    if (this.isVisible() && this.isActive()) {
      this.renderer.render(this.state, ctx, this.children)
    }
  }

  public update(): void {
    super.update()
    if (!this.isPaused() && this.isActive()) {
      this.children.forEach((c) => c.update())
    }
  }
}
