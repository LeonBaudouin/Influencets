import { StateObjectInterface } from "./StateObjectInterface";

export interface RendererInterface {
    Render(state: StateObjectInterface, ctx: CanvasRenderingContext2D) : void;
}
