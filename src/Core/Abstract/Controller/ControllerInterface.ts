import { StateObjectInterface } from "../State/StateObjectInterface";

export interface ControllerInterface {
    Update(currentState: StateObjectInterface, defaultState: StateObjectInterface) : StateObjectInterface;
}
