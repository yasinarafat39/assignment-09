import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Header } from './components/Header';
 
export const QuizTopicsContext = createContext([]);

const Main = () => {
    const quizTopicsData = useLoaderData();
  
    return (
        <QuizTopicsContext.Provider value={quizTopicsData.data}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizTopicsContext.Provider>
    );
};

export default Main;