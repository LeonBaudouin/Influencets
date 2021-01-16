import { Size } from "./CustomTypes/Size";
import { DrawableInterface } from "./Abstract/Drawable/DrawableInterface";
import { GlobalControllerInterface } from "./Abstract/Controller/GlobalControllerInterface";

export class Canvas {

    static instance : Canvas;
    drawnObjects : DrawableInterface[];
    globalController: GlobalControllerInterface[];
    htmlElement : HTMLCanvasElement;
    context : CanvasRenderingContext2D;

    constructor(
        drawnObjects : DrawableInterface[],
        htmlElement : HTMLCanvasElement,
        context : CanvasRenderingContext2D,
        globalController : GlobalControllerInterface[] = []
    ) {
        Canvas.instance = this; 
        this.drawnObjects = drawnObjects;
        this.globalController = globalController;
        this.htmlElement = htmlElement;
        this.context = context;
        this.Resize();
    }

    private Resize(): void {
      this.htmlElement.width = window.innerWidth;
      this.htmlElement.height = window.innerHeight;
    }

    public Loop() : void {
        this.globalController.forEach(controller => {
            controller.Update()
        })

        this.drawnObjects.forEach(element => {
            element.Update();
        });

        this.drawnObjects.forEach(element => {
            element.Draw(this.context);
        });
    }

    public static getSize() : Size {
        return <Size>Canvas.instance.htmlElement;
    }

    public static getContext() : CanvasRenderingContext2D {
        return Canvas.instance.context;
    }
    
}
