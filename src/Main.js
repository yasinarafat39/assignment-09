import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import { Header } from './components/Header';

export const QuizTopicsContext = createContext([]);
export const CountCorrectAns = createContext()


const Main = () => {
    const quizTopicsData = useLoaderData();
    const [countAns, setCountAns] = useState(0);
    return (
        <CountCorrectAns.Provider value={[countAns, setCountAns]}>
            <QuizTopicsContext.Provider value={quizTopicsData.data}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </QuizTopicsContext.Provider>
        </CountCorrectAns.Provider>
    );
};

export default Main;