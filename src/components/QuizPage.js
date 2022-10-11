import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const QuizPage = () => {

    const quizData = useLoaderData();
    console.log(quizData)
    const { id, logo, name, questions, total } = quizData.data;

    return (
        <div className='lg:grid grid-cols-12 gap-5 m-8'>

            <div className='col-span-8'>
                <h2 className='text-2xl font-bold text-center text-cyan-500'>Quiz of {name}</h2>
                

                <div>
                    {
                        questions.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                        ></Quiz>)
                    }
                </div>
            </div>


            <div className='col-span-4 bg-yellow-300'>

            </div>
        </div>
    );
};

export default QuizPage;