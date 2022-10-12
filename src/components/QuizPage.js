import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CountCorrectAns } from '../Main';
import Quiz from './Quiz';

const QuizPage = () => {

    const quizData = useLoaderData();
    const { id, logo, name, questions, total } = quizData.data;

    const countCorrectAns = useContext(CountCorrectAns);
    const [countAns, setCountAns] = countCorrectAns;
    

    let message;

    if(countAns >= 3){
        message = <p className='text-center mt-8'><small><span className='text-rose-400 text-xl font-bold'>Congratulation!</span> <br /> <span className='font-semibold'>You have pass 3 correct answer.</span></small></p>;
    }

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


            <div className={`col-span-4 pb-8 rounded-md ${countAns >= 3 ? 'bg-yellow-100' : 'bg-cyan-100'}`}>
                    <p className='text-center font-semibold text-2xl p-5 mt-12'>Your Correct Ans: {countAns}</p>
                    {
                        message
                    }
            </div>
        </div>
    );
};

export default QuizPage;