import { StateObjectInterface } from '../State/StateObjectInterface'

export interface ControllerInterface {
  update(currentState: StateObjectInterface): StateObjectInterface

  onCreate(defaultState: StateObjectInterface): void
  onDestroy(): void
}
