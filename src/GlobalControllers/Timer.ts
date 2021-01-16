import { GlobalControllerInterface } from '../Core/Abstract/Controller/GlobalControllerInterface'

export default class Timer implements GlobalControllerInterface {
  private lastFrame: number = Date.now()
  private expectedFps: number = 16
  private deltaTime: number = this.expectedFps
  private static instance: Timer = null

  public static getInstance(): Timer {
    if (Timer.instance == null) {
      Timer.instance = new Timer()
    }
    return Timer.instance
  }

  onCreate(): void {}
  onDestroy(): void {}
  update(): void {
    const now = Date.now()
    this.deltaTime = now - this.lastFrame
    this.lastFrame = now
  }

  getDeltaTime(): number {
    return this.deltaTime
  }

  getExpectedFps(): number {
    return this.expectedFps
  }

  getTime(): number {
    return this.lastFrame
  }
}
