/* eslint-disable @next/next/no-img-element */
'use client'
import HowServiceDelivery from "@/src/components/Home/HowServiceDelivery"
import MyIntro from "@/src/components/Home/MyIntro"
import MyWorkProcess from "@/src/components/Home/MyWorkProcess"
import Pricing from "@/src/components/Home/Pricing"
import Testimonial from "@/src/components/Home/Testimonial"
import { getDictionary } from "@/src/language/language"
import { createContext } from "react"
import ContactMessage from "./ContactMessage"
export default async function Home() {
  // console.log(await getDictionary('bn'))
  return (
    <main className="container dark:bg-[#111111] ">
      <div data-aos="fade" className="aos-init aos-animate">
        <div className="py-12 px-4 sm:px-5 md:px-10 lg:px-20">
          <h2 className="after-effect text-4xl font-medium after:left-40 mb-[40px] mt-12 lg:mt-0">
            Contact
          </h2>

          <div className="lg:flex gap-x-20">
            <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6">

              <div className="flex flex-wrap p-[30px] text-black border-[#A6A6A6] gap-2 rounded-xl hover:shadow-md hover:translate-y-1 transition-all hover:scale-105 "
                style={{ background: 'rgb(252, 244, 255)' }}>
                <span className="w-8 mt-2">
                  <img alt="icon"
                    src="/asset/images/contact/phone-call.webp"
                    className="text-4xl "
                    loading="lazy"
                    style={{ color: 'transparent' }} />
                </span>
                <div className="space-y-2">
                  <p className="text-xl font-semibold ">
                    Phone :
                  </p>
                  <p>
                    <a
                      href="tel:+452 666 386"
                      className="text-gray-500 hover:text-[#FA5252] duration-300 transition">
                      +8801873989651
                    </a>
                  </p>
                </div>
              </div>


              <div
                className="flex flex-wrap p-[30px] border-[#A6A6A6] gap-2 rounded-xl  hover:shadow-md hover:translate-y-1 transition-all hover:scale-105"
                style={{ background: 'rgb(238, 251, 255)' }}>
                <span className="w-8 mt-2">
                  <img alt="icon"
                    src="/asset/images/contact/email.webp" width={30}
                    height={20}
                    decoding="async"
                    data-nimg={1}
                    className="text-4xl "
                    loading="lazy"
                  />
                </span>
                <div className="space-y-2 text-black">
                  <p className="text-xl font-semibold ">
                    Email :
                  </p>
                  <p>
                    <a
                      href="mailto:rakibulssc5@gmail.com"
                      className="text-gray-500 hover:text-[#FA5252] duration-300 transition"
                    >
                      rakibulssc5@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap p-[30px] border-[#A6A6A6] gap-2 rounded-xl hover:shadow-md hover:translate-y-1 transition-all hover:scale-105"
                style={{ background: 'rgb(242, 244, 255)' }}>
                <span className="w-8 mt-2">
                  <img alt="icon"
                    src="/asset/images/contact/map.webp"
                    width={30}
                    height={20}
                    decoding="async"
                    loading="lazy"
                  />
                </span>
                <div className="space-y-2 text-black">
                  <p className="text-xl font-semibold ">
                    Address :
                  </p>
                  <address>
                    <p className="text-gray-500 ">
                      Newashi, Nageswari
                    </p>
                    <p className="text-gray-500 ">
                      Kurigram, Bangladesh
                    </p>
                  </address>
                </div>
              </div>
            </div>

            <ContactMessage />
          </div>
        </div>

      </div>
    </main>

  )
}
