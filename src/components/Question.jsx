import QuestionTimer from "./QuestionTimer.jsx";
import Answer from "./Answer.jsx";

export default function Question({onSkipAnswer, questionText, answers, selectedAnswer, answerState, onSelectAnswer}) {
    return <div id="question">
        <QuestionTimer onTimeOut={onSkipAnswer} answerState={answerState} />
        <h2>{questionText}</h2>
        <Answer answers={answers} selectedAnswer={selectedAnswer} answerState={answerState} onSelect={onSelectAnswer} />
    </div>
}