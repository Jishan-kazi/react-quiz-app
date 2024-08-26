import { useCallback, useState } from "react";
import QUESTION from "../question";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
export default function Quiz() {
    const [answerState, setAnswerState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    
    let activeQuestionIndex = answerState==='' ? userAnswers.length : userAnswers.length-1;

    let quizIsComplete = activeQuestionIndex === QUESTION.length;

    const handleUserAnswer = useCallback(function handleUserAnswer(answer) {
            // if not answered & timer expired then just update answer array
            setUserAnswers((prevUserAnswers) => {
                return [...prevUserAnswers, answer];
            });
            if (answer !=null) {
                setAnswerState('answered');
    
                setTimeout(() => {
                    if (answer === QUESTION[activeQuestionIndex].answers[0]) {
                        setAnswerState('correct');
                    }else{
                        setAnswerState('wrong');
                    }
    
                    setTimeout(()=> {
                        setAnswerState('');
                    }, 2000);
                }, 1000);
            }
            
        }, []);

    const handleSkipAnswer = useCallback(() => {
        handleUserAnswer(null);  
    }, [handleUserAnswer]);

    if (quizIsComplete) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question 
                key={activeQuestionIndex} 
                onSkipAnswer={handleSkipAnswer} 
                questionText={QUESTION[activeQuestionIndex].text} 
                answers={QUESTION[activeQuestionIndex].answers} 
                selectedAnswer={userAnswers[userAnswers.length-1]} 
                answerState={answerState} 
                onSelectAnswer={handleUserAnswer} 
            />
        </div>
    );
}