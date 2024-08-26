import { useRef } from "react";
export default function Answer({answers, selectedAnswer, answerState, onSelect}) {
    const shuffleAnswers = useRef();

    if (!shuffleAnswers.current) {
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }

    return <ul id="answers">
        {shuffleAnswers.current.map(answer => {
            let isSelected = selectedAnswer === answer;
            let cssClasses = '';
            if (answerState === 'answered' && isSelected) {
                cssClasses = 'selected';
            } 

            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                cssClasses = answerState;
            }
            return (
                <li key={answer} className="answer">
                    <button className={cssClasses} onClick={() => onSelect(answer)}>{answer}</button>
                </li>
            );
        })}
    </ul>
}