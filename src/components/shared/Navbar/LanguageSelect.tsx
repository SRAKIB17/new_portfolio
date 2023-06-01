import React from 'react';

const LanguageSelect = () => {
    const showLanguageMenu = () => {
        const t = document.getElementById('LanguageSelect')
        t.style.height = '100px'

    }
    return (
        <li className='languageHover '>
            <button
                className="btn bg-primary-gradient mx-2.5 h-11  "
                onClick={() => {
                    showLanguageMenu()
                }}
            >
                <svg height={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="currentColor" strokeWidth="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,23 C15,23 16,18 16,12 C16,6 15,1 12,1 C9,1 8,6 8,12 C8,18 9,23 12,23 Z M2,16 L22,16 M2,8 L22,8" />
                </svg>
            </button>

            <div className='bg-white text-black h-0 overflow-hidden absolute transition-[1s]' id='LanguageSelect'>
                <button className='px-2 py-2 w-full hover:bg-gray-200 flex items-center gap-1' >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" width={24}>
                            <path fill="#006a4e" d="M0 0h20v12H0z" />
                            <circle cx="9" cy="6" r="4" fill="#f42a41" />
                        </svg>
                    </span>
                    বাংলা
                </button>
                <button className=' px-2 py-2 w-full hover:bg-gray-200 flex items-center gap-1'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            viewBox="0 0 7410 3900">
                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
                            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff"
                                stroke-width="300" />
                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                            <g fill="#fff">
                                <g id="d">
                                    <g id="c">
                                        <g id="e">
                                            <g id="b">
                                                <path id="a"
                                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                                                <use href="#a" y="420" />
                                                <use href="#a" y="840" />
                                                <use href="#a" y="1260" />
                                            </g>
                                            <use href="#a" y="1680" />
                                        </g>
                                        <use href="#b" x="247" y="210" />
                                    </g>
                                    <use href="#c" x="494" />
                                </g>
                                <use href="#d" x="988" />
                                <use href="#c" x="1976" />
                                <use href="#e" x="2470" />
                            </g>
                        </svg>
                    </span>
                    English
                </button>
            </div>
        </li>
    );
};

export default LanguageSelect;