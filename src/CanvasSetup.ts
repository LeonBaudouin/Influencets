import { Canvas } from './Core/Canvas'
import Timer from './GlobalControllers/Timer'
import CircleState from './Shapes/Circle/CircleState'
import Color from './Core/CustomTypes/Color'
import CircleRenderer from './Shapes/Circle/CircleRenderer'
import RectangleState from './Shapes/Rectangle/RectangleState'
import RectangleRenderer from './Shapes/Rectangle/RectangleRenderer'
import { NodeDrawable } from './Core/Abstract/Drawable/NodeDrawable'
import EmptyObjectState from './Shapes/EmptyObject/EmptyObjectState'
import EmptyObjectRenderer from './Shapes/EmptyObject/EmptyObjectRenderer'
import RotationOverTime from './Controllers/RotationOverTime'

export function CanvasSetup(): Canvas {
  const htmlCanvas = document.querySelector('canvas')
  const context = htmlCanvas.getContext('2d')
  const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

  const drawnObject = [
    new NodeDrawable({
      state: new RectangleState({
        size: { width: window.innerWidth, height: window.innerHeight },
        position: { ...center },
        color: new Color(255, 255, 255, 0.3),
      }),
      renderer: new RectangleRenderer(),
    }),
    new NodeDrawable({
      state: new EmptyObjectState({
        position: { ...center },
      }),
      renderer: new EmptyObjectRenderer(),
      controllers: [new RotationOverTime({ speed: 0.02 })],
      children: [
        new NodeDrawable({
          state: new CircleState({
            color: new Color(0, 0, 0),
            size: 30,
            position: { x: 100, y: 0 },
          }),
          renderer: new CircleRenderer(),
        }),
        new NodeDrawable({
          state: new CircleState({
            color: new Color(0, 0, 0),
            size: 30,
            position: {
              x: Math.cos((2 * Math.PI) / 3) * 100,
              y: Math.sin((2 * Math.PI) / 3) * 100,
            },
          }),
          renderer: new CircleRenderer(),
        }),
        new NodeDrawable({
          state: new CircleState({
            color: new Color(0, 0, 0),
            size: 30,
            position: {
              x: Math.cos(-(2 * Math.PI) / 3) * 100,
              y: Math.sin(-(2 * Math.PI) / 3) * 100,
            },
          }),
          renderer: new CircleRenderer(),
        }),
      ],
    }),
  ]

  const timer = Timer.getInstance()
  return new Canvas(
    drawnObject,
    {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    htmlCanvas,
    context,
    [timer],
  )
}
