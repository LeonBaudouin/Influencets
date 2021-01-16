import { RendererInterface } from "../../Core/Abstract/Renderer/RendererInterface";
import RectangleState from "./RectangleState";

export default class RectangleRenderer implements RendererInterface {

    render(state: RectangleState, ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = state.color.toString();
        ctx.fillRect(
            state.position.x - state.size.width / 2,
            state.position.y - state.size.height / 2,
            state.size.width,
            state.size.height
        );
    }

}
