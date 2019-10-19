export class EventProvider {

    private static eventMap: Map<string,Function[]> = new Map()

    public static listenTo(eventName: string, callback: Function) {
        if (EventProvider.eventMap.has(eventName)) {
            const callbacks = EventProvider.eventMap.get(eventName)
            EventProvider.eventMap.set(eventName, callbacks.concat([callback]))
        } else {
            EventProvider.eventMap.set(eventName, [callback])
        }
    }
    
    public static dispatch(eventName: string, data: any = 'no data') {
        if (EventProvider.eventMap.has(eventName)) {
            EventProvider.eventMap.get(eventName).forEach(cb => {data === 'no data' ? cb() : cb(data)})
        }
    }

}