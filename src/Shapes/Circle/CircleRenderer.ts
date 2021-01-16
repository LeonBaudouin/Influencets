import { RendererInterface } from "../../Core/Abstract/Renderer/RendererInterface";
import CircleState from "./CircleState";

export default class CircleRenderer implements RendererInterface {

    render({color, position, size}: CircleState, ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = color.toString();
        ctx.beginPath();
        ctx.arc(position.x, position.y, size, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

}
