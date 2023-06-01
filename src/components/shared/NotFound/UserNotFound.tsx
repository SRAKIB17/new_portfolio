import React from 'react';
import style from './UserNotFound.module.css'
const UserNotFound = () => {
    return (
        <div>
            <div className={style.main}>

                <div className={style.fof}>

                    <h1>Error 404</h1>

                </div>
                <div className={style.error}>
                    <h2 className='flex items-center'>
                        <span>
                            <svg width="48" height="48" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >

                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
                                    <g fill="currentColor">
                                        <path d="M16.5,29 C23.4035597,29 29,23.4035597 29,16.5 C29,9.59644029 23.4035597,4 16.5,4 C9.59644029,4 4,9.59644029 4,16.5 C4,23.4035597 9.59644029,29 16.5,29 Z M16.4813232,21 C13,21 11,23 11,23 L11,22 C11,22 13,20 16.4813232,20 C19.9626465,20 22,22 22,22 L22,23 C22,23 19.9626465,21 16.4813232,21 Z M20.6215213,9.96709541 L20.0623284,10.796133 L23.3784787,13.0329046 L23.9376716,12.203867 L20.6215213,9.96709541 Z M9.0623284,12.203867 L9.62152131,13.0329046 L12.9376716,10.796133 L12.3784787,9.96709541 L9.0623284,12.203867 Z M12,15 C12.5522848,15 13,14.5522848 13,14 C13,13.4477152 12.5522848,13 12,13 C11.4477152,13 11,13.4477152 11,14 C11,14.5522848 11.4477152,15 12,15 Z M21,15 C21.5522848,15 22,14.5522848 22,14 C22,13.4477152 21.5522848,13 21,13 C20.4477152,13 20,13.4477152 20,14 C20,14.5522848 20.4477152,15 21,15 Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span>
                            Could not find user
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default UserNotFound;