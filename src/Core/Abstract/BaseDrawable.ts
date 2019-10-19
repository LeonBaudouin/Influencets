import { RendererInterface } from "./RendererInterface";
import { ControllerInterface } from "./ControllerInterface";
import { StateObjectInterface } from "./StateObjectInterface";
import { AbstractDrawableObject } from "./AbstractDrawableObject";

export default class BaseDrawable extends AbstractDrawableObject {
    
    protected renderer : RendererInterface;
    protected controllers : ControllerInterface[];
    protected currentState : StateObjectInterface;
    protected defaultState : StateObjectInterface;

    public constructor(
        defaultState : StateObjectInterface, 
        renderer: RendererInterface, 
        tags: string[] = [],
        controllers: ControllerInterface[] = [], 
        startPaused = false,
        startVisible = true,
        startActive = true
    ) {
        super(tags, startPaused, startVisible, startActive)
        this.defaultState = defaultState.Clone();
        this.currentState = defaultState.Clone();
        this.renderer = renderer;
        this.controllers = controllers;
    }

    public Draw(ctx: CanvasRenderingContext2D): void {
        if (this.isVisible() && this.isActive()) {
            this.renderer.Render(this.currentState, ctx);
        }
    }

    public Update(): void {
        if (!this.isPaused() && this.isActive()) {
            this.currentState = this.controllers.reduce((a, c) => c.Update(a, this.defaultState), this.currentState)
        }
    }

    public getState(): StateObjectInterface {
        return this.currentState;
    }

    public getControllers(): ControllerInterface[] {
        return this.controllers;
    }
}
