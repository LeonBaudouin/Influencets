import { StateObjectInterface } from "../State/StateObjectInterface";
import { DrawableInterface } from "../Drawable/DrawableInterface";

export interface RendererInterface {
  render(
    state: StateObjectInterface,
    ctx: CanvasRenderingContext2D,
    children: DrawableInterface[],
  ): void;
}
