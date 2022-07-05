const initState = {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    isRunning: false,
    isPause: false,
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "START":
            return {...state, isRunning: !state.isRunning};

        case "SET_MILLISECONDS":
            return {...state, milliseconds: state.milliseconds + 1};

        case "SET_SECONDS":
            return {...state, seconds: state.seconds + 1};

        case "SET_MINUTES":
            return {...state, minutes: state.minutes + 1};

        case "SET_MILLISECONDS_TO_ZERO":
            return {...state, milliseconds: 0};

        case "SET_SECONDS_TO_ZERO":
            return {...state, seconds: 0};

        case "SET_MINUTES_TO_ZERO":
            return {...state, minutes: 0};

        case "PAUSE":
            return {...state, isRunning: !state.isRunning};

        case "RESET": {
            return initState;
        }

        default:
            return state;
    }
};
