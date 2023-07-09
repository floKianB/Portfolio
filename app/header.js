'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu'

function Header() {
    const [section, useSection] = useState('/');
    const { push } = useRouter();
    useEffect(() => {
        push('/');
    }, []);

    return (
        <>
            {/* Left side */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 min-h-screen">
                {/* Personal info */}
                <span className="grid gap-16">
                    <span>
                        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'><a href='/'>Kian Baban</a></h1>
                        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Front-End Web Developer</h2>
                        <p className='mt-4 max-w-xs leading-normal'>I build accessible, inclusive products and digital experiences for the web.</p>
                    </span>
                  {/* Navigator */}
                    <nav className='nav hidden lg:block'>
                        <ul className="mt-16 w-max">
                            <li>
                                <Link className='group flex items-center py-3 active' href='#aboutme' onClick={() => useSection('#aboutme')}>
                                    <span className={section !== '#aboutme' ? "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" : "nav-indicator mr-4 h-px w-16 bg-slate-200"}></span>
                                    <span className={section !== '#aboutme' ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200" : "w-16 text-slate-200"}>About</span>
                                </Link>
                            </li>   
                            <li>
                                <Link class="group flex items-center py-3" href="#experiences" onClick={() => useSection('#experiences')}>
                                    <span className={section !== '#experiences' ? "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" : "nav-indicator mr-4 h-px w-16 bg-slate-200"}></span>
                                    <span className={section !== '#experiences' ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200" : "w-16 text-slate-200"}>Experience</span>
                                </Link>
                            </li>                            
                            <li>
                                <Link class="group flex items-center py-3" href="#projects" onClick={() => useSection('#projects')}>
                                    <span className= {section !== '#projects' ? "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" : "nav-indicator mr-4 h-px w-16 bg-slate-200"}></span>
                                    <span className= {section !== '#projects' ? "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200" : "w-16 text-slate-200"}>Projects</span>
                                </Link>
                            </li>                       
                        </ul>
                    </nav>
                </span>

                {/* Social Media */}
                <div className='flex-column space-y-7'>
                    <ul className='mt-8 flex-column space-y-4 items-center max-w-min'>
                        <li className='text-xs'>
                            <a href="" className='block text-slate-400 hover:text-slate-100 -translate-x-2/4'>
                                <LuGithub size={30}/>
                            </a>
                        </li>
                        <li className='text-xs'>
                            <a href="" className='block text-slate-400 hover:text-slate-100 -translate-x-2/4'>
                                <LuInstagram size={30}/>
                            </a>
                        </li>
                        <li className='text-xs'>
                            <a href="" className='block text-slate-400 hover:text-slate-100 -translate-x-2/4'>
                                <LuLinkedin size={30}/>
                            </a>
                        </li>
                        <li className='text-xs'>
                            <a href="" className='block text-slate-400 hover:text-slate-100 -translate-x-2/4'>
                                <LuTwitter size={30}/>
                            </a>
                        </li>
                    </ul>
                    <hr className='absolute w-16 origin-left border-slate-400 rotate-90 border'/>
                </div>
                

            </header>
        </>
    )}

export default Header