import { DrawableInterface } from "./DrawableInterface";

export interface GeneratorInterface {
    FirstGeneration(): DrawableInterface[]
    Generate(): DrawableInterface[]
    Remove(drawables: DrawableInterface[]): DrawableInterface[]
}
