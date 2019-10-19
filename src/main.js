import { CanvasSetup } from "./CanvasSetup"
const canvas = CanvasSetup();

raf();

function raf() {
  requestAnimationFrame(raf);
  canvas.Loop();
}
