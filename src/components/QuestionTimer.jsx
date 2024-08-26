import { useEffect, useState } from "react"

let timer;
let interval;
const TIMEOUT = 10000;
export default function QuestionTimer({onTimeOut, answerState}) {
    const [remainingTime, setRemainingTime] = useState(TIMEOUT);
    useEffect(() => {
        timer = setTimeout(onTimeOut, TIMEOUT);

        return () => {
            clearTimeout(timer);
        }
    }, [onTimeOut, TIMEOUT]);

    useEffect(() => {
        interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime-100);
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);

    if (answerState === 'answered') {
        clearTimeout(timer);
        clearInterval(interval);
    }
    return <progress value={remainingTime} max={TIMEOUT}/>
}