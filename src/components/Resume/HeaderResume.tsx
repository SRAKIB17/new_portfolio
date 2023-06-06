import React from 'react';

const data = {
    education: [
        {
            duration: '2022 - present',
            degree: 'Computer Science and Engineering',
            institute: 'Mymenshingh Engineering College',
        },
        // {
        //     duration: '2019 - Present',
        //     degree: 'Sr. Software Tester',
        //     institute: 'Google Inc.',
        // },
        // {
        //     duration: '2021',
        //     degree: 'Best Developer',
        //     institute: 'University Of Melbourne, NA',
        // },
    ],
    experience: [
        {
            duration: '2022 - 2023',
            position: 'Full-stack developer',
            company: 'Collabtalent LLC.',
        },
        // {
        //     duration: '2019 - Present',
        //     position: 'Sr. Software Tester',
        //     company: 'Google Inc.',
        // },
        // {
        //     duration: '2021',
        //     position: 'Best Developer',
        //     company: 'University Of Melbourne, NA',
        // },
    ],
    awards: [
        {
            duration: '2021 - 2023',
            degree: 'Ph.D in Horriblensess',
            institute: 'ABC University, Los Angeles, CA',
        },
        {
            duration: '2019 - Present',
            degree: 'Sr. Software Tester',
            institute: 'Google Inc.',
        },
        {
            duration: '2021',
            degree: 'Best Developer',
            institute: 'University Of Melbourne, NA',
        },
    ],

}

const HeaderResume = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
            <div>
                <div className="flex items-center space-x-2 mb-4">
                    <div className="text-6xl text-[#F95054]">
                        <svg stroke="currentColor"
                            fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path
                                d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z" />
                        </svg>
                    </div>
                    <h4 className="text-4xl  font-medium">Education</h4>
                </div>

                {
                    data?.education?.map((edu, index) => {
                        const bg = index % 2 ? 'rgb(255, 244, 244)' : 'rgb(255, 241, 251)'
                        return (
                            <div
                                className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg text-black border-[#212425] border-2 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105"
                                style={{ background: bg }}
                                key={index}
                            >
                                <span className="text-xs text-gray-600">
                                    {
                                        edu.duration
                                    }
                                </span>
                                <h3 className="text-xl font-medium">
                                    {
                                        edu.degree
                                    }
                                </h3>
                                <p className="">
                                    {
                                        edu.institute
                                    }
                                </p>
                            </div>
                        )
                    })
                }

            </div>

            <div>
                <div className="flex items-center space-x-2 mb-4">
                    <div className="text-6xl text-[#F95054]">
                        <svg stroke="currentColor"
                            fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em"
                            width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z" />
                            <path
                                d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                        </svg>
                    </div>
                    <h4 className="text-4xl  font-medium">
                        Experience
                    </h4>
                </div>
                {
                    data?.experience?.map((exp, index) => {
                        const bg = index % 2 ? 'rgb(238, 245, 250)' : 'rgb(242, 244, 255)'

                        return (
                            <div
                                className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg text-black border-[#212425] border-2 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105"
                                style={{ background: bg }}
                                key={index}
                            >
                                <span className="text-xs text-gray-600">
                                    {
                                        exp.duration
                                    }
                                </span>
                                <h3 className="text-xl font-medium">
                                    {
                                        exp.position
                                    }
                                </h3>
                                <p className="">
                                    {
                                        exp.company
                                    }
                                </p>
                            </div>
                        )
                    })
                }
            </div>

            <div>
                <div className="flex items-center space-x-2 mb-4">
                    <div className="text-6xl text-[#F95054]">
                        <svg stroke="currentColor"
                            fill="currentColor" strokeWidth={0} viewBox="0 0 384 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" />
                        </svg></div>
                    <h4 className="text-4xl  font-medium">
                        Awards
                    </h4>
                </div>

                {
                    data?.awards?.map((awr, index) => {
                        const bg = index % 2 ? "rgb(252, 244, 255)" : 'rgb(252, 249, 242)';

                        return (
                            <div
                                className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg text-black border-[#212425] border-2 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105"
                                style={{ background: bg }}
                                key={index}
                            >
                                <span className="text-xs text-gray-600">
                                    {
                                        awr.duration
                                    }
                                </span>
                                <h3 className="text-xl font-medium">
                                    {
                                        awr.degree
                                    }
                                </h3>
                                <p className="">
                                    {
                                        awr.institute
                                    }
                                </p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default HeaderResume;