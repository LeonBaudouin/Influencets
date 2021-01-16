export interface DrawableInterface {
  draw(ctx: CanvasRenderingContext2D): void
  update(): void
  isPaused(): boolean
  pause(): void
  resume(): void
  isVisible(): boolean
  hide(): void
  show(): void
  isActive(): boolean
  desactivate(): void
  activate(): void
  onCreate(): void
  onDestroy(): void
}
