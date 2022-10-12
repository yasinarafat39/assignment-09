import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import { Header } from './components/Header';
 
export const QuizTopicsContext = createContext([]);

const Main = () => {
    const quizTopicsData = useLoaderData();
  
    return (
        <QuizTopicsContext.Provider value={quizTopicsData.data}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </QuizTopicsContext.Provider>
    );
};

export default Main;