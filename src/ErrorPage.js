import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className='flex justify-center items-center h-screen'>
            {
                error && (
                    <div className='text-center bg-cyan-100 p-24 rounded-lg shadow-lg'>
                        <h2 className='text-2xl'>{error.statusText || error.message}</h2>
                        <h1 className='text-8xl'>{error.status}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default ErrorPage;   