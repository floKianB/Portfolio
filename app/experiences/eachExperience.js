import React from 'react'

function EachExperience({date, position, at, loc, description, skills}) {
    const Skill = ({SkillName}) => {
        return(
            <li class="mr-1.5 mt-2">
                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{SkillName}</div>
            </li>
        );
    }
    return (
        <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">{date}</header>
            <div class="z-10 sm:col-span-6">
                <h3 class="font-medium leading-snug text-slate-200">
                    <div>
                        <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://upstatement.com" target="_blank" rel="noreferrer" aria-label="Lead Engineer at Upstatement">
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>{position} · <span class="inline-block">{at} </span> </span>
                        </a>
                    </div>
                    <div>
                        <div class="text-slate-300 mt-1" aria-hidden="true">{loc}</div>
                    </div>
                </h3>
                <p class="mt-2 text-sm leading-normal text-slate-400">{description}</p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {skills.map((eachSkill)=><Skill SkillName={eachSkill} />)}
                </ul>
            </div>
        </div>
    )
}

export default EachExperience