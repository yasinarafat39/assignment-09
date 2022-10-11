import React from 'react';

const Option = ({ option }) => {
    return (
        <button className='flex items-center text border transition border-cyan-200 text-cyan-500 hover:text-white hover:bg-cyan-200 p-4 rounded'>
            <input type="radio" name="name" id="" /> &nbsp; &nbsp;
            {option}
        </button>
    );
};

export default Option;