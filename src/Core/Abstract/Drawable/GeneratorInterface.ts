import { DrawableInterface } from "./DrawableInterface";

export interface GeneratorInterface {
  firstGeneration(): DrawableInterface[];
  generate(): DrawableInterface[];
  remove(drawables: DrawableInterface[]): DrawableInterface[];
}
