import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const QuizPage = () => {

    const quizData = useLoaderData();
    console.log(quizData)
    const { id, logo, name, questions, total } = quizData.data;

    return (
        <div className='sm:flex flex-col-reverse lg:grid grid-cols-12 gap-5 m-8'>

            <div className='col-span-8'>
                <h2 className='text-3xl font-bold text-center text-cyan-500'>Quiz of {name}</h2>
                <p className='my-4 text-xl font-bold text-center text-cyan-500'>Total Quiz: {total}</p>

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
                    <p className='text-center text-2xl p-5'>Hello yellow</p>
            </div>
        </div>
    );
};

export default QuizPage;