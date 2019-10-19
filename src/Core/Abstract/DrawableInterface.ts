export interface DrawableInterface {
    Draw(ctx: CanvasRenderingContext2D) : void;
    Update() : void;
    isPaused() : boolean;
    pause() : void;
    resume() : void;
    isVisible() : boolean;
    hide() : void;
    show() : void;
    isActive(): boolean;
    desactivate(): void;
    activate(): void;
}
