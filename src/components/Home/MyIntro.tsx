/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';

const MyIntro = () => {

    return (
        <section className="px-2 py-32 md:px-0 relative mb-40">
            <div className="container  items-center max-w-6xl px-4 sm:px-8 mx-auto xl:px-5 relative z-50">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div
                            className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1
                                className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-4xl lg:text-5xl ">
                                <span className="block xl:flex">
                                    Hi, need any help?
                                </span>
                            </h1>
                            <p className="mx-auto text-base-100 sm:max-w-md md:max-w-3xl text-justify leading-6">
                                Where dreams come to life through code! As a developer, I am dedicated to creating innovative solutions that exceed expectations. Get ready to embark on a journey of exceptional design, flawless functionality and seamless user experience. Let{"'"}s collaborate and make your vision a digital reality. Together, we will create something extraordinary!
                            </p>

                            {/* <div className="  gap-4 sm:space-x-4 w-full">
                                <form method="get" className="box-shadow rounded-full overflow-hidden w-full  justify-between items-center flex" >
                                    <input type="text" className=" p-2 focus:border-none focus:outline-none bg-transparent pl-6 h-12 " maxLength={256} name="email" data-name="email" placeholder="Enter your email" id="email-5" style={{ width: 'calc(100% - 128px)' }} />
                                    <input type="submit" value="Reach me" data-wait="Please wait..." className="bg-primary text-center px-6 h-12 w-36 font-medium text-lg" />
                                </form>
                            </div> */}
                            <div className="flex flex-wrap gap-4 w-fit sm:space-x-4 sm:w-full">
                                <button
                                    className="flex w-40 items-center px-6 py-3 mb-3 text-lg  bg-primary rounded-md sm:mb-0 hover:bg-primary-focus sm:w-fit">
                                    Get started
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                                <a href="#_"
                                    className="w-40 flex items-center px-6 py-3 mb-3 text-lg text-gray-500 bg-gray-100 rounded-md sm:mb-0 hover:bg-gray-200 hover:text-gray-600 sm:w-fit">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                            <img
                                src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MyIntro;