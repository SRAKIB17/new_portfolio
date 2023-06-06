/* eslint-disable @next/next/no-img-element */
'use client'
import HowServiceDelivery from "@/src/components/Home/HowServiceDelivery"
import MyIntro from "@/src/components/Home/MyIntro"
import MyWorkProcess from "@/src/components/Home/MyWorkProcess"
import Pricing from "@/src/components/Home/Pricing"
import Testimonial from "@/src/components/Home/Testimonial"


const social = [
  {
    svg: <svg stroke="currentColor"
      fill="currentColor"
      strokeWidth={0} viewBox="0 0 320 512" height="20" width="20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>,
    html: "facebook",
    color: '#1773EA'
  },
  {
    svg: <svg stroke="currentColor" fill="#1C9CEA"
      strokeWidth={0} viewBox="0 0 512 512" height="20" width="20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>,
    html: "twitter"
  },
  {
    svg: <svg stroke="currentColor"
      fill="#0072b1" strokeWidth={0} viewBox="0 0 448 512" height="20" width="20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>,
    html: "linkedin"
  },
]

export default async function Home() {
  return (
    <main className="h-full flex justify-center items-center">
      {/* <MyIntro /> */}

      <div className="flex flex-col items-center justify-center relative py-20">
        <img alt="hero image"
          src="https://lh3.googleusercontent.com/drive-viewer/AFGJ81p37yjmoN-1c_qGlByZVAcDKzdpM5PK1wmcPJI4gGxH3TzwJXM6MtOuJADxNU22CPij1j1727NX_YndMlHhdK5KKNNg9g=w1238-h962" width={250} height={250}
          decoding="async" data-nimg={1} className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"
          style={{ color: 'transparent' }} />

        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">
          Rakibul Islam
        </h3>
        <div className="pt-3">
          {/* <embed src=" https://prog-learn.vercel.app/typewriter.svg?line=Web Developer;MERN Stack Developer;Node.js Developer;Full-Stack Developer;Front-End Developer;Back-End Developer;JavaScript Developer;React Developer;Python Developer&colors=orange;yellow;purple;blue;cyan;teal;green;orchid;turquoise&font_size=16" type="" /> */}
          <embed src="/typewriter.svg" type="" className="w-44 block" />
        </div>

        <div className="flex space-x-3">
          {
            social?.map((_s, index) => {
              return (
                <a href="https://www.facebook.com/" target="_blank" key={index}
                  rel="noopener noreferrer"
                  className=" hover:text-white bg-primary-gradient-hover text-[#1773EA] p-3 bg-white rounded-[4px]"
                >
                  <span className="">
                    {
                      _s.svg
                    }
                  </span>
                </a>
              )
            })
          }
        </div>


        <a
          href="/images/cv.pdf"
          download
          className="btn bg-primary-gradient mt-5" style={{ borderRadius: "9999px" }}
        >
          <img
            src="/asset/images/download.png" alt="icon" className="mr-2" />
          Download CV
        </a>
      </div>

      {/* <Testimonial /> */}

      {/* <Pricing /> */}
    </main >

  )
}

