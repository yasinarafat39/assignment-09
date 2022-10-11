import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {

    const quizData = useLoaderData();
    console.log(quizData)
    const { id, logo, name, questions, total } = quizData.data;

    return (
        <div className='grid grid-cols-12 gap-5 m-8'>

            <div className='col-span-8 bg-red-900'>
                <h2 className='text-2xl font-bold text-center'>Quiz of {name}</h2>
            </div>


            <div className='col-span-4 bg-yellow-300'>

            </div>
        </div>
    );
};

export default QuizPage;