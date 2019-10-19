# Influence.ts

This project was originally a boiler plate for Canvas 2D. It began to grow, so I put it there.

## Get started

Each objects have a state object that describe the object's properties and a renderer that draw the object on the canvas with the informations provided by the state. An object can have controllers that update the state of the object.

```
new BaseDrawable(
    // State
    new CircleState({
        color: new Color(0, 0, 0),
        size: 20,
        position: {...center}
    }),
    // Renderer
    new CircleRenderer(),
    // Tags
    ['rotating-shape'],
    // Controllers
    [
        new PositionOverTime({
            amount: 100,
            offset: 0,
            XFunc: cos,
            YFunc: sin
        })
    ]
),
```

Setup your objects in `CanvasSetup.ts`.
Create new shapes states and renderers in `Shapes` directory.
Create object controllers in `Controller` directory and global controllers in `GlobalController` directory.

Dev server with `npm start`

Build with `npm run build`
