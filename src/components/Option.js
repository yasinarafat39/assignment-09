import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='flex justify-center items-center text border transition border-cyan-200 text-cyan-500 hover:text-white hover:bg-cyan-200 p-4 rounded'>
            <input type="checkbox" name="" id="" /> &nbsp; &nbsp;
            {option}
        </div>
    );
};

export default Option;