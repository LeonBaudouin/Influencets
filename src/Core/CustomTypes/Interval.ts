export function transformRange(value: number, r1: Interval, r2: Interval) : number {
    var scale = (r2.max - r2.min) / (r1.max - r1.min)
    return (value - r1.min) * scale;
}
  
export interface Interval {
    min: number,
    max: number
}
