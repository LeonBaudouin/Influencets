import { StateObjectInterface } from "./StateObjectInterface";

export interface ControllerInterface {
    Update(currentState: StateObjectInterface, defaultState: StateObjectInterface) : StateObjectInterface;
}
