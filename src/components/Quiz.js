import React from 'react';
import Option from './Option';

const Quiz = ({quiz}) => {

    console.log(quiz);
    const {correctAnswer, id, options, question} = quiz;

    return (
        <div>
            <div className='shadow-md p-5 mb-14'>
                <h2 className='text-center text-xl text-cyan-500 '>Quiz : {question}</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-4 mt-6'>
                    {
                        options.map(option => <Option key={option.index} option={option}></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;