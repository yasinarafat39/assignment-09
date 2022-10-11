import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizPage = () => {

    const quizData = useLoaderData();
    console.log(quizData)
    const { id, logo, name, questions, total } = quizData.data;

    return (
        <div>
            This is Quiz Page.
        </div>
    );
};

export default QuizPage;