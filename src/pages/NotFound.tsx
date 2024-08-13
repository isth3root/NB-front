// ========== PACKAGES =========== \\
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
                <h1>404 - Page Not Found</h1>
                <p className='mt-2'>Go Back to <Link to={"/"} className='text-blue-500 hover:underline hover:bg-blue-400 hover:text-white px-1 py-1 rounded-md'>Home</Link> page</p>
        </div>
    );
};

export default NotFound;
