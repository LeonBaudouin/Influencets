import { StateObjectInterface } from "../State/StateObjectInterface";

export interface RendererInterface {
    Render(state: StateObjectInterface, ctx: CanvasRenderingContext2D) : void;
}
