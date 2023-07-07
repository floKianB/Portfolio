import React from 'react'
import Image from 'next/image'
import blog from '../../public/src/photos/blog.png'


function Projects() {
    return (
        <>
            <ul className="group/list">
                <li className="mb-12">
                    <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div class="z-10 sm:order-2 sm:col-span-6">
                            <h3>
                                <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank" rel="noreferrer" aria-label="Build a Spotify Connected App">
                                    <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>Build a Spotify Connected <span class="inline-block">App</span></span>
                                
                                </a>
                            </h3>
                            <p class="mt-2 text-sm leading-normal text-slate-400">Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p></div><Image alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{color: "transparent"}} src={blog}/></div>
                </li>
            </ul>
        </>
    )
}

export default Projects