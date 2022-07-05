import React from 'react'
import Button from './Button'
import {
    start,
    pause,
    setMillisecondsToZero,
    setMinutesToZero,
    setSecondsToZero,
    reset,
} from "./../actions/action"
import {useDispatch, useSelector} from "react-redux"

function ButtonGroup() {
    const dispatch = useDispatch()
    const running = useSelector(state => state.isRunning)
    const isPause = useSelector(state => state.isPause)
    let {minutes, seconds, milliseconds} = useSelector(state => state)

    const handleStart = () => {
        dispatch(start())
    }

    const handleStop = () => {
        dispatch(pause())
    }

    const handleReset = () => {
        if (!running) {
            dispatch(setMillisecondsToZero())
            dispatch(setSecondsToZero())
            dispatch(setMinutesToZero())
            dispatch(reset())
        }
    }

    return (
        <div className="btn">
            <Button handleClick={handleStart}>Старт</Button>
            <Button handleClick={handleStop}>Пауза</Button>
            <Button handleClick={handleReset}>Стоп</Button>
        </div>
    )
}

export default ButtonGroup
