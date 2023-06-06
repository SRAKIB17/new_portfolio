'use client'

import HeaderResume from "@/src/components/Resume/HeaderResume"
import Skills from "@/src/components/Resume/Skills"
import '../../src/components/Resume/skills.css'
export default async function Home() {
  // console.log(await getDictionary('bn'))
  return (
    <div className="container sm:px-5 md:px-10 lg:px-20 ">
      <div className="py-12 px-4">
        <h2 className="after:left-44 mb-[40px] mt-12 lg:mt-0 text-5xl">
          Resume
        </h2>
        <HeaderResume />
        <Skills />
      </div>
    </div>

  )
}
