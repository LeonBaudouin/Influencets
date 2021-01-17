import { RendererInterface } from '../Renderer/RendererInterface'
import { ControllerInterface } from '../Controller/ControllerInterface'
import { StateObjectInterface } from '../State/StateObjectInterface'
import { AbstractDrawableObject } from './AbstractDrawableObject'

export type BaseDrawableOptions = {
  state: StateObjectInterface
  renderer: RendererInterface
  tags?: string | string[]
  controllers?: ControllerInterface[]
  isPaused?: boolean
  isVisible?: boolean
  isActive?: boolean
}

export class BaseDrawable extends AbstractDrawableObject {
  protected renderer: RendererInterface
  protected controllers: ControllerInterface[]
  protected state: StateObjectInterface

  public constructor({
    state,
    renderer,
    tags = [],
    controllers = [],
    isPaused = false,
    isVisible = true,
    isActive = true,
  }: BaseDrawableOptions) {
    super(Array.isArray(tags) ? tags : [tags], isPaused, isVisible, isActive)
    this.state = state.clone()
    this.renderer = renderer
    this.controllers = controllers
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    if (this.isVisible() && this.isActive()) {
      this.renderer.render(this.state, ctx, [])
    }
  }

  public onCreate(): void {
    this.controllers.forEach((c) => c.onCreate(this.state))
  }

  public onDestroy(): void {
    this.controllers.forEach((c) => c.onDestroy())
    // Taggable Object has a map object with ref of all tagged objects
    // To avoid remaining refs in this object we need to remove this
    // drawable from the map onDestroy
    this.removeAllToTagMap()
  }

  public update(): void {
    if (!this.isPaused() && this.isActive()) {
      this.state = this.controllers.reduce((a, c) => c.update(a), this.state)
    }
  }

  public getState(): StateObjectInterface {
    return this.state
  }

  public getControllers(): ControllerInterface[] {
    return this.controllers
  }
}
