import Head from 'next/head'
import Image from 'next/image'

import { BookIcon, TwitterIcon, LinkedinIcon, GithubIcon, EmailIcon, ResumeIcon } from '../public/helpers/icons.js';

import Tilt from 'react-tilt'

export default function Home() {
  return (
    <div className="select-none">

      <Head>
        <title>Thanussian Sharvananthan</title>
        <meta name="description" content="The personal portfolio of Thanussian Sharvananthan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="grid place-items-center h-screen">
        <div>
          <div className="w-full text-center">
            <Tilt options={{ max: 30 }}>
              <Image className="text-center" src="/images/pingu.png" height={350} width={350} alt="NOOT NOOT"/>
            </Tilt>
          </div>

          <p className="text-8xl text-center font-extrabold my-6 text-white">Thanussian Sharvananthan</p>
          <p className="text-3xl text-center font-extrabold my-4 text-white">I Like To Build Stuff :)</p>

          <div class="border-t border-2 border-white my-8"></div>

          <div className="flex justify-around">
            <a href=""> <BookIcon /> </a>
            <a href="https://twitter.com/Than_Sharva" target="_blank"> <TwitterIcon /> </a>
            <a href="https://www.linkedin.com/in/tsharva" target="_blank"> <LinkedinIcon /> </a>
            <a href="https://github.com/TSharvananthan" target="_blank"> <GithubIcon /> </a>
            <a href="mailto:thanussian@gmail.com" target="_blank"> <EmailIcon /> </a>
            <a href="" target="_blank"> <ResumeIcon /> </a>
          </div>
        </div>
      </div>

    </div>
  )
}
