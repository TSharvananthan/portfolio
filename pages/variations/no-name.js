import Head from 'next/head'

export default function NoName() {
  return (
    <div className="font-['Helvetica'] select-none pl-64">
      <Head>
        <title>Thanussian Sharvananthan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="bg-yellow-400">
        <p className="bg-black text-yellow-400 rounded-b-3xl w-fit pl-6 pr-6">
          <span className="text-6xl font-extrabold">no name</span>
          <span className="text-3xl font-extrabold align-top">®</span>
        </p>

        <p className="pt-64">
          <span className="text-9xl font-extrabold">thanussian</span>
        </p>

        <div className="flex gap-4">
          <a href="https://adcap.vercel.app" target="_blank" rel="noreferrer">
            <svg className="text-black" width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />  <line x1="13" y1="8" x2="15" y2="8" />  <line x1="13" y1="12" x2="15" y2="12" /></svg>
          </a>

          <a href="https://twitter.com/Than_Sharva" target="_blank" rel="noreferrer">
            <svg className="text-black" width="48" height="48" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
          </a>

          <a href="https://www.linkedin.com/in/tsharva" target="_blank" rel="noreferrer">
            <svg className="text-black" width="48" height="48" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
          </a>

          <a href="https://github.com/TSharvananthan" target="_blank" rel="noreferrer">
            <svg className="text-black" width="48" height="48" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>

          <a href="mailto:thanussian@gmail.com" target="_blank" rel="noreferrer">
            <svg className="text-black" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>
          </a>

          <a href="" target="_blank" rel="noreferrer">
            <svg className="text-black" width="48" height="48" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />  <polyline points="14 2 14 8 20 8" />  <line x1="16" y1="13" x2="8" y2="13" />  <line x1="16" y1="17" x2="8" y2="17" />  <polyline points="10 9 9 9 8 9" /></svg>
          </a>
        </div>
      </body>
    </div>
  )
}