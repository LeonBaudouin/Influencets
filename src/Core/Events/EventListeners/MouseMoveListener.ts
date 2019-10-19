import { SimpleEventListener, ListenEvent, NativeEventListener } from "./SimpleEventListener";
import { Point } from "../../CustomTypes/Point";

export class MouseMoveListener extends NativeEventListener {

    protected static instance: MouseMoveListener;
    protected static value: Point = {x: 0, y: 0};

    public static getInstance(): ListenEvent {
        if(MouseMoveListener.instance == null)
            MouseMoveListener.instance = new MouseMoveListener()

        return MouseMoveListener.instance;
    }

    private constructor() {
        super("mousemove");
    }

    public getValue() {
        return MouseMoveListener.value;
    }

    public UpdateValue(e: MouseEvent) {
        MouseMoveListener.value = {x: e.clientX, y: e.clientY}
    }

}
