import { RendererInterface } from "../../Core/Abstract/Renderer/RendererInterface";
import TriangleState from "./TriangleState";

export default class TriangleRenderer implements RendererInterface {
    render({color, angle, position, size}: TriangleState, ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = color.toString();
        ctx.beginPath();
        ctx.moveTo(position.x + Math.cos(Math.PI / 3 * 2 * 0 + angle) * size * 2, position.y + Math.sin(Math.PI / 3 * 2 * 0 + angle) * size * 2);
        ctx.lineTo(position.x + Math.cos(Math.PI / 3 * 2 * 1 + angle) * size * 2, position.y + Math.sin(Math.PI / 3 * 2 * 1 + angle) * size * 2);
        ctx.lineTo(position.x + Math.cos(Math.PI / 3 * 2 * 2 + angle) * size * 2, position.y + Math.sin(Math.PI / 3 * 2 * 2 + angle) * size * 2);
        ctx.lineTo(position.x + Math.cos(Math.PI / 3 * 2 * 0 + angle) * size * 2, position.y + Math.sin(Math.PI / 3 * 2 * 0 + angle) * size * 2);
        ctx.fill();
    }
    
}
