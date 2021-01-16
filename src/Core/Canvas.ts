import { Size } from "./CustomTypes/Size";
import { DrawableInterface } from "./Abstract/Drawable/DrawableInterface";
import { GlobalControllerInterface } from "./Abstract/Controller/GlobalControllerInterface";

export class Canvas {
  static instance: Canvas;
  drawnObjects: DrawableInterface[];
  globalController: GlobalControllerInterface[];
  htmlElement: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(
    drawnObjects: DrawableInterface[],
    size: Size,
    htmlElement: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    globalController: GlobalControllerInterface[] = [],
  ) {
    Canvas.instance = this;
    this.drawnObjects = drawnObjects;
    this.drawnObjects.forEach(o => o.onCreate())
    this.globalController = globalController;
    this.htmlElement = htmlElement;
    this.context = context;
    this.resize(size);
    this.globalController.forEach(c => c.onCreate());
    this.resizeFromElement = this.resizeFromElement.bind(this);
    window.addEventListener("resize", this.resizeFromElement)
  }

  private resizeFromElement(): void {
    this.resize({
      width: this.htmlElement.clientWidth,
      height: this.htmlElement.clientHeight
    })
  }

  private resize(size: Size): void {
    this.htmlElement.width = size.width;
    this.htmlElement.height = size.height;
  }

  public loop(): void {
    this.globalController.forEach((controller) => {
      controller.update();
    });

    this.drawnObjects.forEach((element) => {
      element.update();
    });

    this.drawnObjects.forEach((element) => {
      element.draw(this.context);
    });
  }

  public add(object: DrawableInterface) {
    this.drawnObjects.push(object);
    object.onCreate();
  }

  public destroy() {
    this.drawnObjects.forEach((object) => {
      object.onDestroy();
    });
    this.globalController.forEach((c) => c.onDestroy());
    window.removeEventListener("resize", this.resizeFromElement)
    Canvas.instance = null;
  }

  public static getSize(): Size {
    return Canvas.instance.htmlElement as Size;
  }

  public static getContext(): CanvasRenderingContext2D {
    return Canvas.instance.context;
  }
}
