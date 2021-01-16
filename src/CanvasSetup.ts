import { Canvas } from "./Core/Canvas";
import Timer from "./GlobalControllers/Timer";
import CircleState from "./Shapes/Circle/CircleState";
import Color from "./Core/CustomTypes/Color";
import CircleRenderer from "./Shapes/Circle/CircleRenderer";
import PositionOverTime from "./Controllers/PositionOverTime";
import RectangleState from "./Shapes/Rectangle/RectangleState";
import RectangleRenderer from "./Shapes/Rectangle/RectangleRenderer";
import { BaseDrawable } from "./Core/Abstract/Drawable/BaseDrawable";

const sin = (time: number, amount: number, offset: number) => Math.sin(time * 0.03 + offset * Math.PI * 2) * amount
const cos = (time: number, amount: number, offset: number) => Math.cos(time * 0.03 + offset * Math.PI * 2) * amount

export function CanvasSetup() {

    const htmlCanvas = document.querySelector('canvas');
    const context = htmlCanvas.getContext('2d');
    const center = {x: window.innerWidth / 2, y: window.innerHeight / 2}

    const drawnObject = [
        new BaseDrawable(
            new RectangleState({
                color: new Color(255, 255, 255, 0.5),
                size: {width: window.innerWidth, height: window.innerHeight},
                position: {...center},
            }),
            new RectangleRenderer()
        ),
        new BaseDrawable(
            new CircleState({
                color: new Color(0, 0, 0),
                size: 20,
                position: {...center}
            }),
            new CircleRenderer(),
            ['rotating-shape'],
            [
                new PositionOverTime({
                    amount: 100,
                    offset: 0,
                    XFunc: cos,
                    YFunc: sin
                })
            ]
        ),
        new BaseDrawable(
            new CircleState({
                color: new Color(0, 0, 0),
                size: 20,
                position: {...center}
            }),
            new CircleRenderer(),
            ['rotating-shape'],
            [
                new PositionOverTime({
                    amount: 100,
                    offset: 1/3,
                    XFunc: cos,
                    YFunc: sin
                })
            ]
        ),
        new BaseDrawable(
            new CircleState({
                color: new Color(0, 0, 0),
                size: 20,
                position: {...center}
            }),
            new CircleRenderer(),
            ['rotating-shape'],
            [
                new PositionOverTime({
                    amount: 100,
                    offset: 2/3,
                    XFunc: cos,
                    YFunc: sin
                })
            ]
        )
    ]

    const timer = Timer.getInstance();
    return new Canvas(drawnObject, {
        width: window.innerWidth, height: window.innerHeight
    }, htmlCanvas, context, [timer]);
}
