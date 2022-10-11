import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const SingleTopic = ({ singleTopic }) => {
    const { id, name, logo, total } = singleTopic;
    return (
        <div>

            <div className='p-2 bg-white shadow-lg rounded mb-36'>
                <img src={logo} className='bg-cyan-100 rounded' alt="logo" />
                <h2 className='text-2xl text-center mt-4 font-semibold'>{name}</h2>
                <button className='w-full mt-3 p-1 rounded transition text-gray-800 bg-cyan-200 hover:bg-cyan-500'>
                    <small>Start Practice &nbsp;
                        <FontAwesomeIcon icon={faArrowRight} /></small>
                </button>
            </div>

        </div>
    );
};

export default SingleTopic;