import { DrawableInterface } from './DrawableInterface'
import { GeneratorInterface } from './GeneratorInterface'
import { AbstractDrawableObject } from './AbstractDrawableObject'

// --------------------------
// Old object, should refacto
// but not now
// --------------------------

export abstract class BaseGenerator extends AbstractDrawableObject {
  private generator: GeneratorInterface
  private drawables: DrawableInterface[] = []

  constructor(
    generator: GeneratorInterface,
    tags: string[] = [],
    startPaused: boolean = false,
    startVisible: boolean = true,
  ) {
    super(tags, startPaused, startVisible)
    this.generator = generator
    this.drawables = generator.firstGeneration()
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (this.isVisible() && this.isActive()) {
      this.drawables.forEach((drawable) => {
        drawable.draw(ctx)
      })
    }
  }

  update(): void {
    if (!this.isPaused() && this.isActive()) {
      this.drawables = this.generator.remove(this.drawables)
      const generated = this.generator.generate()
      this.drawables.push(...generated)
    }
    this.drawables.forEach((drawable) => {
      drawable.update()
    })
  }
}
