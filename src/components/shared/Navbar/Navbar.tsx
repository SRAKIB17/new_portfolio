/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useContext, useEffect, useRef } from 'react';
import SideBarMenu from './SideBarMenu';
import SideProfileMenu from './SideProfileMenu';
import style from './Navbar.module.css'
import { LinkNavbar } from './LinkNavbar';
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const path = usePathname()

    const sidebarMenuRef = useRef({ style: { left: '100px' } })

    const sideBarMenuShowHandle = () => {
        sidebarMenuRef.current.style.left = '0px'
    }

    return (
        <header >
            <div className="px-8  container flex items-center justify-between py-4 sm:py-5 mx-auto md:flex-row ">
                {/* <div className="relative flex items-center justify-between">
                    <button
                        className='px-1'
                        onClick={() => sideBarMenuShowHandle()}
                    >
                        fsdl
                    </button>

                </div> */}

                <nav className="flex justify-between w-full " >
                    <img src="https://prog-learn.vercel.app/proglearn_logo.png" alt="" className='object-cover h-9' />
                    <ul className="flex  fhu">
                        {
                            LinkNavbar?.map((_l, index) => {
                                return (
                                    <li className="mb-1 hidden lg:block" key={index}>
                                        <a
                                            className={(path?.includes(_l.link) ? " bg-primary-gradient text-white " : " hover:text-white bg-primary-gradient-hover ") + " btn bg-white text-black  mx-2.5 "}
                                            href={_l?.link}
                                        >
                                            <span className="mr-2 text-xl">
                                                {
                                                    _l?.svg
                                                }
                                            </span>
                                            {
                                                _l.html
                                            }
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </nav >

            </div >
            <SideBarMenu sidebarMenuRef={sidebarMenuRef} />
        </header >
    );
};

export default Navbar;