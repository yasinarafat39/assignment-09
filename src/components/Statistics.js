import React, { useContext } from 'react';
import { QuizTopicsContext } from '../Main';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

const Statistics = () => {
    const quizTopics = useContext(QuizTopicsContext);
    console.log(quizTopics);
    return (
        <div>
            <h2 className='text-center text-2xl font-bold my-8 text-cyan-500'>This Chart describe total amount of Quiz.</h2>
            <div className='text-center mx-auto'>
                <LineChart width={500} height={300} data={quizTopics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Line type="monotone" dataKey="total" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;