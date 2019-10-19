import { StateObjectInterface } from "../../Core/Abstract/StateObjectInterface";
import { OneDimensionSizeState, PositionState, AngleState } from "../../Core/Abstract/BaseStates";
import Color from "../../Core/CustomTypes/Color";
import { Point } from "../../Core/CustomTypes/Point";

export default class TriangleState implements StateObjectInterface, TriangleStateParams {
    color: Color;
    size: number;
    position: Point;
    angle: number;

    constructor({color, size, position, angle}: TriangleStateParams) {
        this.color = color;
        this.size = size;
        this.position = {...position};
        this.angle = angle;
    }

    Clone(): TriangleState {
        return new TriangleState(this);
    }
}

export interface TriangleStateParams extends OneDimensionSizeState, PositionState, AngleState {
    color: Color
}
