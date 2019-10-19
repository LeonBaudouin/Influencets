import { TaggableObject } from "./TaggableObject";
import { DrawableInterface } from "./DrawableInterface";

export abstract class AbstractDrawableObject extends TaggableObject implements DrawableInterface {
    
    protected _isPaused: boolean
    protected _isVisible: boolean
    protected _isActive: boolean

    constructor(tags: string[] = [], startPaused = false, startVisible = true, startActive = true) {
        super(tags)
        this._isPaused = startPaused
        this._isVisible = startVisible
        this._isActive = startActive
    }
    
    abstract Draw(ctx: CanvasRenderingContext2D): void
    
    Update(): void {}

    isPaused(): boolean {
        return this._isPaused
    }

    pause(): void {
        this._isPaused = true
    }

    resume(): void {
        this._isPaused = false
    }

    isVisible(): boolean {
        return this._isVisible
    }

    hide(): void {
        this._isVisible = false
    }

    show(): void {
        this._isVisible = true
    }

    isActive(): boolean {
        return this._isActive
    }

    desactivate(): void {
        this._isActive = false
    }

    activate(): void {
        this._isActive = true
    }
    

}