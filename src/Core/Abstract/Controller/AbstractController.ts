import { ControllerInterface } from './ControllerInterface'
import { StateObjectInterface } from '../State/StateObjectInterface'

export abstract class AbstractController implements ControllerInterface {
  update(currentState: StateObjectInterface): StateObjectInterface {
    return currentState
  }

  onCreate(defaultState: StateObjectInterface): void {}
  onDestroy(): void {}
}
