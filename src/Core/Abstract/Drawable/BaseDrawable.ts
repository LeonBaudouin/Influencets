import { RendererInterface } from "../Renderer/RendererInterface";
import { ControllerInterface } from "../Controller/ControllerInterface";
import { StateObjectInterface } from "../State/StateObjectInterface";
import { AbstractDrawableObject } from "./AbstractDrawableObject";

export class BaseDrawable extends AbstractDrawableObject {
  protected renderer: RendererInterface;
  protected controllers: ControllerInterface[];
  protected currentState: StateObjectInterface;
  protected defaultState: StateObjectInterface;

  public constructor(
    defaultState: StateObjectInterface,
    renderer: RendererInterface,
    tags: string[] = [],
    controllers: ControllerInterface[] = [],
    startPaused = false,
    startVisible = true,
    startActive = true,
  ) {
    super(tags, startPaused, startVisible, startActive);
    this.defaultState = defaultState.clone();
    this.currentState = defaultState.clone();
    this.renderer = renderer;
    this.controllers = controllers;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    if (this.isVisible() && this.isActive()) {
      this.renderer.render(this.currentState, ctx, []);
    }
  }

  public onCreate(): void {
    this.controllers.forEach((c) => c.onCreate(this.currentState));
  }

  public onDestroy(): void {
    this.controllers.forEach((c) => c.onDestroy());
    // Taggable Object has a map object with ref of all tagged objects
    // To avoid remaining refs in this object we need to remove this
    // drawable from the map onDestroy
    this.removeAllToTagMap()
  }

  public update(): void {
    if (!this.isPaused() && this.isActive()) {
      this.currentState = this.controllers.reduce(
        (a, c) => c.update(a),
        this.currentState,
      );
    }
  }

  public getState(): StateObjectInterface {
    return this.currentState;
  }

  public getControllers(): ControllerInterface[] {
    return this.controllers;
  }
}
