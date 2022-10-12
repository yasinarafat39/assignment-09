import React from 'react';

const Option = ({ option, correctAnswer}) => {

    const handleCorrectAns = (option) => {
        // console.log(option);
        if(correctAnswer === option){
            
        }
    }

    return (
        <button onClick={() => handleCorrectAns(option)} className='flex items-center text border transition border-cyan-200 text-cyan-500 hover:text-white hover:bg-cyan-200 p-4 rounded'>
            <input type="radio" name="name" id="quiz" /> &nbsp; &nbsp;
            <label for=" "> {option}</label>

        </button>
    );
};

export default Option;