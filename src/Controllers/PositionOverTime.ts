import { ControllerInterface } from "../Core/Abstract/ControllerInterface";
import { StateObjectInterface } from "../Core/Abstract/StateObjectInterface";
import { PositionState } from "../Core/Abstract/BaseStates";

type SizeState = StateObjectInterface & PositionState;
type PositionOverTimeFunc = (time: number, amount: number, offset: number) => number

export default class PositionOverTime implements ControllerInterface {
    
    private offset: number;
    private amount: number;
    private XFunc: PositionOverTimeFunc;
    private YFunc: PositionOverTimeFunc;
    private time: number = 0;
    
    constructor({offset, amount, XFunc, YFunc}: {offset: number, amount: number, XFunc: PositionOverTimeFunc, YFunc: PositionOverTimeFunc}) {
        this.offset = offset;
        this.amount = amount;
        this.XFunc = XFunc;
        this.YFunc = YFunc;
    }
    
    Update(currentState: SizeState, defaultState: SizeState): SizeState {
        const newState = <SizeState>currentState.Clone();
        newState.position.x = defaultState.position.x + this.XFunc(this.time, this.amount, this.offset);
        newState.position.y = defaultState.position.y + this.YFunc(this.time, this.amount, this.offset);
        this.time++;
        return newState;
    }
    
}
