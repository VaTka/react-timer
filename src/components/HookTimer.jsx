import React from "react";
import '../App.css';
import {useEffect, useState} from "react";

const HookTimer = () => {

    const [time, setTime] = useState(0)
    const [timeOn, setTimeOn] = useState(false)

    useEffect(() => {
        let interval = null;

        if (timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timeOn])

    return (
        <div>
            <div className="timer">
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="btn">
                <button onClick={() => setTimeOn(true)}>Старт</button>
                <button onClick={() => setTimeOn(false)}>Пауза</button>
                <button onClick={() => setTime(0)}>Стоп</button>
            </div>
        </div>
    )

}

export default HookTimer;
