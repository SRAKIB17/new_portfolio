import Navbar from '@/src/components/shared/Navbar/Navbar';
import './globals.css'
import './../src/components/shared/Navbar/Navbar.module.css'


import { openGraphImage } from '@/src/shared/shared-metadata'
import { cookies } from 'next/headers';
import { getDictionary } from '@/src/language/language';


export const metadata = {
  title: "Home",
  openGraph: {
    ...openGraphImage,
    title: 'Home',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang='en'>
      {/* <html lang={cookies().get('lang')?.value ? cookies().get('lang')?.value : 'en'}> */}
      {/* <link rel="preload" href="lib/fonts/source-code-pro-v14-latin-regular.woff2" as="font" type="font/woff2" ></link> */}
      {/* <link href="https://www.hellobonsai.com/software/design" rel="canonical"></link> */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
