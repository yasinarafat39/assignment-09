import React, { useContext } from 'react';
import { QuizTopicsContext } from '../Main';
import Chart from './Chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizTopics = useContext(QuizTopicsContext);
    console.log(quizTopics);
    return (
        <div>
            This is Statistics
            <LineChart width={500} height={300} data={quizTopics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
            </LineChart>
        </div>
    );
};

export default Statistics;