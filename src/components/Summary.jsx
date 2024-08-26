import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTION from "../question";

export default function Summary({userAnswers}) {
    const skippedAnswers = userAnswers.filter((ans) => ans === null);
    const correctAnswers = userAnswers.filter((ans, i) => ans === QUESTION[i].answers[0]);

    const skippedAnsweredShare = Math.round((skippedAnswers.length / userAnswers.length) * 100) ;
    const correctAnsweredShare = Math.round((correctAnswers.length / userAnswers.length) * 100) ;
    const incorrectAnsweredShare = Math.round(100 - skippedAnsweredShare - correctAnsweredShare) ;
    return <div id="summary">
        <img src={quizCompleteImg} alt="Winner Trophy" />
        <h2>Quiz Completed!</h2>

        <div id="summary-stats">
            <p>
                <span className="number">{skippedAnsweredShare}%</span>
                <span className="text">Skipped</span>
            </p>
            <p>
                <span className="number">{correctAnsweredShare}%</span>
                <span className="text">Answered Correctly</span>
            </p>
            <p>
                <span className="number">{incorrectAnsweredShare}%</span>
                <span className="text">Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {QUESTION.map((que, i) => {
                let cssClasses = 'user-answer';
                if (userAnswers[i] === null) {
                    cssClasses += ' skipped';
                }else if(userAnswers[i] === que.answers[0]){
                    cssClasses += ' correct';
                }else{
                    cssClasses += ' wrong';
                }
                return <li>
                    <h3>{i + 1}</h3>
                    <p className="question">{que.text}</p>
                    <p className={cssClasses}>{userAnswers[i] ?? 'Skipped'}</p>
                </li>
            })}
        </ol>
    </div>;
}