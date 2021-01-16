import { ControllerInterface } from "../Core/Abstract/Controller/ControllerInterface";
import { PhysicState } from "../Core/Abstract/State/BaseStates";
import { StateObjectInterface } from "../Core/Abstract/State/StateObjectInterface";
import Timer from "../GlobalControllers/Timer";

type PhysicStateType = PhysicState & StateObjectInterface;

export default class PhysicUpdate implements ControllerInterface {

    private inertia: number;
    private timer: Timer;

    constructor({inertia} : {inertia: number}) {
        this.inertia = inertia;
        this.timer = Timer.getInstance();
    }

    Update(
        currentState: PhysicStateType,
        defaultState: PhysicStateType
    ): PhysicStateType {
        const deltaTime = this.timer.getDeltaTime();
        const expectedFps = this.timer.getExpectedFps();

        const newState = <PhysicStateType>currentState.Clone();
        newState.acceleration = {x: 0, y: 0};
        const newVelocity = {
            x: currentState.velocity.x + currentState.acceleration.x * (deltaTime / expectedFps) / (1 - this.inertia),
            y: currentState.velocity.y + currentState.acceleration.y * (deltaTime / expectedFps) / (1 - this.inertia)
        }
        newState.velocity.x = Math.abs(newVelocity.x) > 3 ? currentState.velocity.x : newVelocity.x;
        newState.velocity.y = Math.abs(newVelocity.y) > 3 ? currentState.velocity.y : newVelocity.y;
        newState.position.x += currentState.velocity.x * (deltaTime / expectedFps);
        newState.position.y += currentState.velocity.y * (deltaTime / expectedFps);
        return newState;
    }
    
}

