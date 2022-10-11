import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Topics = () => {
    const quizTopicsData = useLoaderData();
    const quizTopics = quizTopicsData.data;
    console.log(quizTopics)
    return (
        <div className='lg:px-16'>

            <section className="">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Test your
                            <span className="text-cyan-500"> Code knowledge</span> with our Quiz Exam
                        </h1>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://img.freepik.com/free-vector/quiz-word-concept_23-2147844150.jpg?size=338&ext=jpg&ga=GA1.2.1300172447.1660665533" alt="" className="object-contain rounded h-50 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>


            <div>
                {

                }
            </div>

        </div>
    );
};

export default Topics;