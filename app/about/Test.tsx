/* eslint-disable @next/next/no-img-element */
import React from 'react';
const personalInfo = [
    {
        svg: <svg
            stroke="currentColor" fill="currentColor" strokeWidth={0}
            viewBox="0 0 320 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
        </svg>,
        title: "Phone",
        html: '+8801873989651'
    },
    {
        svg: <svg
            stroke="currentColor" fill="currentColor" strokeWidth={0}
            viewBox="0 0 384 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
        </svg>,
        title: 'Location',
        html: 'Hong kong china'
    },
    {
        svg: <svg
            stroke="currentColor" fill="currentColor" strokeWidth={0}
            viewBox="0 0 512 512" height="1em" width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z" />
        </svg>,
        title: 'Email',
        html: 'rakibulssc5@gmail.com'
    },

]
const Test = () => {
    return (
        <div>
            <div className="container lg:rounded-2xl px-4 sm:px-5 md:px-10 lg:px-20">
                <div data-aos="fade" className="aos-init aos-animate">
                    <div className="py-12">
                        <h2 className="text-4xl after:left-52 mt-12 lg:mt-0 ">
                            About Me
                        </h2>
                        <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
                            <div className="col-span-12 md:col-span-4">
                                <img alt="routePath"
                                    width={300}
                                    height={400}
                                    decoding="async"
                                    className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
                                    src='https://lh3.googleusercontent.com/drive-viewer/AFGJ81p37yjmoN-1c_qGlByZVAcDKzdpM5PK1wmcPJI4gGxH3TzwJXM6MtOuJADxNU22CPij1j1727NX_YndMlHhdK5KKNNg9g=w1238-h962'
                                    loading="lazy" style={{ color: 'transparent' }} />

                            </div>
                            <div className="col-span-12 md:col-span-8 space-y-2.5">
                                <div className=" md:mr-12 xl:mr-16">
                                    <h3 className="text-4xl font-medium  mb-2.5 ">Who am i?</h3>
                                    <p className="text-gray-lite dark:text-color-910 leading-7">Im Creative
                                        Director and
                                        UI/UX Designer from Sydney, Australia, working in web development and print
                                        media. I
                                        enjoy turning complex problems into simple, beautiful and intuitive designs.
                                    </p>
                                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">My aim is to
                                        bring
                                        across your message and identity in the most creative way. I created web
                                        design for
                                        many famous brand companies.</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-medium my-5 ">Personal Info</h3>

                                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {
                                            personalInfo?.map((_link, index) => {
                                                return (
                                                    <div className="flex" key={index} >
                                                        <span
                                                            className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 "
                                                        >
                                                            {
                                                                _link?.svg
                                                            }
                                                        </span>
                                                        <div className="space-y-1">
                                                            <p className="text-xs text-gray-lite dark:text-color-910">
                                                                {
                                                                    _link?.title
                                                                }
                                                            </p>
                                                            <h6 className="font-medium ">
                                                                <a
                                                                    className="hover:text-[#FA5252] duration-300 transition"
                                                                    href="tel:+1234567890">
                                                                    {
                                                                        _link.html
                                                                    }
                                                                </a>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="pb-12 ">

                        <h3 className="text-[35px]  font-medium pb-5">
                            What I do!
                        </h3>

                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">

                            <div className='text-black p-4 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105' style={{ background: 'rgb(252, 244, 255)' }}><img alt="icon"
                                srcSet="/images/icons/icon-1.svg 1x, /images/icons/icon-1.svg 2x"
                                src="/images/icons/icon-1.svg" width={40} height={40} decoding="async"
                                data-nimg={1} className="w-10 h-10 object-contain block" loading="lazy"
                                style={{ color: 'transparent' }} />
                                <div className="space-y-2 break-all">
                                    <h3 className=" text-xl font-semibold">Ui/Ux Design</h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                        Lorem ipsum dolor
                                        sit amet,
                                        consectetuer adipiscing elit, sed diam euismod volutpat.
                                    </p>
                                </div>
                            </div>

                            <div className='text-black p-4 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105' style={{ background: 'rgb(254, 250, 240)' }}>
                                <img alt="icon"
                                    srcSet="/images/icons/icon-2.svg 1x, /images/icons/icon-2.svg 2x"
                                    src="/images/icons/icon-2.svg" width={40} height={40} decoding="async"
                                    data-nimg={1} className="w-10 h-10 object-contain block" loading="lazy"
                                    style={{ color: 'transparent' }} />

                                <div className="space-y-2 break-all">
                                    <h3 className=" text-xl font-semibold">App Development</h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                        Lorem ipsum dolor
                                        sit amet,
                                        consectetuer adipiscing elit, sed diam euismod volutpat.
                                    </p>
                                </div>
                            </div>

                            <div className='text-black p-4 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105' style={{ background: 'rgb(252, 244, 255)' }}><img alt="icon"
                                srcSet="/images/icons/icon-3.svg 1x, /images/icons/icon-3.svg 2x"
                                src="/images/icons/icon-3.svg" width={40} height={40} decoding="async"
                                data-nimg={1} className="w-10 h-10 object-contain block" loading="lazy"
                                style={{ color: 'transparent' }} />
                                <div className="space-y-2 break-all">
                                    <h3 className=" text-xl font-semibold">Photography</h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor
                                        sit amet,
                                        consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                </div>
                            </div>
                            <div className='text-black p-4 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105' style={{ background: 'rgb(255, 244, 244)' }}><img alt="icon"
                                srcSet="/images/icons/icon-4.svg 1x, /images/icons/icon-4.svg 2x"
                                src="/images/icons/icon-4.svg" width={40} height={40} decoding="async"
                                data-nimg={1} className="w-10 h-10 object-contain block" loading="lazy"
                                style={{ color: 'transparent' }} />
                                <div className="space-y-2 break-all">
                                    <h3 className=" text-xl font-semibold">Photography</h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor
                                        sit amet,
                                        consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                </div>
                            </div>
                            <div className='text-black p-4 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105' style={{ background: 'rgb(255, 240, 248)' }}><img alt="icon"
                                srcSet="/images/icons/icon-5.svg 1x, /images/icons/icon-5.svg 2x"
                                src="/images/icons/icon-5.svg" width={40} height={40} decoding="async"
                                data-nimg={1} className="w-10 h-10 object-contain block" loading="lazy"
                                style={{ color: 'transparent' }} />
                                <div className="space-y-2 break-all">
                                    <h3 className=" text-xl font-semibold">Managment</h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor
                                        sit amet,
                                        consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                </div>
                            </div>
                            <div className='text-black p-4 hover:shadow-md hover:translate-y-1 transition-all hover:scale-105' style={{ background: 'rgb(243, 250, 255)' }}><img alt="icon"
                                srcSet="/images/icons/icon-6.svg 1x, /images/icons/icon-6.svg 2x"
                                src="/images/icons/icon-6.svg" width={40} height={40} decoding="async"
                                data-nimg={1} className="w-10 h-10 object-contain block" loading="lazy"
                                style={{ color: 'transparent' }} />
                                <div className="space-y-2 break-all">
                                    <h3 className=" text-xl font-semibold">Web Development</h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">Lorem ipsum dolor
                                        sit amet,
                                        consectetuer adipiscing elit, sed diam euismod volutpat.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* **************************************************************************************************************************** */}




                </div>
            </div>
        </div>
    );
};

export default Test;