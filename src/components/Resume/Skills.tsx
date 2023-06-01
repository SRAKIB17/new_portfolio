import React from 'react';
import SkillProgressLineSVG from './SkillProgressLineSVG';

const skills = [
    {
        skill: "HTML",
        color: "#FF6464",
        parentage: 10
    },
    {
        skill: "CSS",
        color: "#9272D4",
        parentage: 90
    },
    {
        skill: "Javascript",
        color: "#5185D4",
        parentage: 90
    },
    {
        skill: "TypeScript",
        color: "#5185D4",
        parentage: 90
    },
    {
        skill: "NextJS",
        color: "#CA56F2",
        parentage: 90
    },
    {
        skill: "React",
        color: "#CA56F2",
        parentage: 90
    },
    {
        skill: "Bootstrap",
        color: "#CA56F2",
        parentage: 90
    },
    {
        skill: "Tailwind",
        color: "#CA56F2",
        parentage: 50
    },
    {
        skill: "Express",
        color: "#CA56F2",
        parentage: 50
    },
    {
        skill: "NodeJs",
        color: "#CA56F2",
        parentage: 50
    },
    {
        skill: "MySql",
        color: "#CA56F2",
        parentage: 50
    },
    {
        skill: "MySql",
        color: "#CA56F2",
        parentage: 50
    },
    {
        skill: "MongoDB",
        color: "#CA56F2",
        parentage: 50
    },
    {
        skill: "SQL",
        color: "#CA56F2",
        parentage: 50
    },
    {
        skill: "Python",
        color: "#CA56F2",
        parentage: 50
    },
]

const knowledges = [
    'Digital Design',
    'Marketing',
    'Social Media',
    'Print',
    'Time Management',
    'Flexibility',
    'Print',
    'Time Management',
    'Flexibility',
    'Print',
]
const Skills = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1">
                <h4 className="text-4xl font-medium mb-6">
                    Working Skills
                </h4>
                {
                    skills?.map((sk, index) => {
                        return (
                            <div className=" mb-7" key={index}>
                                <div className="flex justify-between py-1">
                                    <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
                                        {
                                            sk.skill
                                        }
                                    </span>
                                    <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
                                        {sk.parentage}%
                                    </span>
                                </div>
                                <SkillProgressLineSVG
                                    color={sk.color}
                                    parentage={sk.parentage}
                                />
                            </div>
                        )
                    })
                }

            </div>
            <div className="col-span-1">
                <h4 className="text-4xl dark:text-white font-medium mb-8">
                    Knowledges
                </h4>
                <div className="flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap">
                    {
                        knowledges?.map((know, index) => {
                            return (
                                <button key={index} className="rounded-[4px] cursor-default text-[15px] bg-[#ffffff30] py-1 px-3">
                                    {
                                        know
                                    }
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;