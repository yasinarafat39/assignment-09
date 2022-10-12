import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Option from './Option';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { correctAnswer, id, options, question } = quiz;



    const [visible, setVisible] = useState(false);

    const handleVisibility = (options) => {
        if (visible === false) {
            alert('Visibility True');
        }else{
            alert('Visibility False')
        }
        setVisible(!visible);

    }


    return (
        <div>
            <div className='shadow-md p-5 mb-14 relative'>
                {
                    visible ? <FontAwesomeIcon onClick={() => handleVisibility(options)} className='text-cyan-500 absolute top-0 right-0 mr-4 mb-3 cursor-pointer' icon={faEye} /> : <FontAwesomeIcon onClick={() => handleVisibility(options)} className='text-cyan-500 absolute top-0 right-0 mr-4 mb-3 cursor-pointer' icon={faEyeSlash} />
                }
                <h2 className='text-center text-xl text-cyan-500 '>Quiz : {question}</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-4 mt-6'>
                    {
                        options.map(option => <Option
                            key={option.index}
                            option={option}
                            correctAnswer={correctAnswer}
                        ></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;