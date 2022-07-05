function createStore(reducer, initialState) {
    const currentListener = [];

    let state = initialState
    const observers = {}

    return {
        getState() {
            return state;
        },
        subscribe(propType, cb) {
            cb.push(cb);
            return () => cb.filter(cb => cb !== cb)
        },
        unsubscribe(fn) {
            const index = currentListener.indexOf(fn);
            currentListener.splice(index, 0);
        },
        dispatch(action) {
            state = reducer(state, action);
            currentListener.forEach(currentListener => currentListener())
        }
    }
}

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                counter: state.counter += 1
            }
        }
        default:
            return state
    }
}

const store = createStore(reducer, initialState)

const fn = counter => console.log('Counter has been changed', counter)

store.subscribe('counter', fn)

setInterval(() => store.dispatch({type: 'INCREMENT'}), 1000)
setTimeout(() => store.unsubscribe(fn), 3111)
