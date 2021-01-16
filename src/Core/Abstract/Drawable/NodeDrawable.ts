import { RendererInterface } from "../Renderer/RendererInterface";
import { ControllerInterface } from "../Controller/ControllerInterface";
import { StateObjectInterface } from "../State/StateObjectInterface";
import { BaseDrawable } from "./BaseDrawable";
import { DrawableInterface } from "./DrawableInterface";

export class NodeDrawable extends BaseDrawable {
  protected children: DrawableInterface[];

  public constructor(
    defaultState: StateObjectInterface,
    renderer: RendererInterface,
    tags: string[] = [],
    controllers: ControllerInterface[] = [],
    children: DrawableInterface[] = [],
    startPaused = false,
    startVisible = true,
    startActive = true,
  ) {
    super(
      defaultState,
      renderer,
      tags,
      controllers,
      startPaused,
      startVisible,
      startActive,
    );
    this.children = children;
  }

  public onCreate(): void {
    super.onCreate();
    this.children.forEach((c) => c.onCreate());
  }

  public onDestroy(): void {
    super.onDestroy();
    this.children.forEach((c) => c.onDestroy());
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    if (this.isVisible() && this.isActive()) {
      this.renderer.render(this.currentState, ctx, this.children);
    }
  }

  public update(): void {
    super.update();
    if (!this.isPaused() && this.isActive()) {
      this.children.forEach((c) => c.update());
    }
  }
}
