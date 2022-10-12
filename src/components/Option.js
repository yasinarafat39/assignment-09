import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { CountCorrectAns } from '../Main';

const Option = ({ option, correctAnswer}) => {
    

    const countCorrectAns = useContext(CountCorrectAns);
    const [countAns, setCountAns] = countCorrectAns;

    const countCorrect = () => {
        setCountAns(countAns + 1);
    }

    const handleCorrectAns = (option) => {
        // console.log(option);
        if(correctAnswer === option){
            toast.success('Correct Answer', {position: 'top-center', autoClose: 500});
            countCorrect()
        }
        else{
            toast.error('False Answer', {position: 'top-center', autoClose: 500})
        }
    }

    return (
        <button onClick={() => handleCorrectAns(option)} className='flex items-center text border transition border-cyan-200 text-cyan-500 hover:text-white hover:bg-cyan-200 p-4 rounded'>
            <input type="radio" name="name" id="quiz" /> &nbsp; &nbsp;
            <label htmlFor=" "> {option}</label>

        </button>
    );
};

export default Option;