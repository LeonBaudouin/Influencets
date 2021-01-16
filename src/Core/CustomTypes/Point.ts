export interface Point {
  x: number
  y: number
}

export namespace Point {
  export function getDistance(p1: Point, p2: Point): number {
    const a = p1.x - p2.x
    const b = p1.y - p2.y
    return Math.sqrt(a * a + b * b)
  }

  export function getAngle(p1: Point, p2: Point): number {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x)
  }
}
