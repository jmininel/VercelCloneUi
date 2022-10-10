import React from 'react'

function Content() {
    return (
        <div className='flex flex-col justify-center items-center text-white'>
           
            <div className='tracking-tighter text-6xl flex flex-col items-center justify-center font-extrabold'>
              <span className=' bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-green-400  '>Develop.</span>
              <span className=' bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-rose-600 '>Preview.</span>
              <span className=' bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400  '>Ship.</span>
            </div>


            <div className='flex items-center justify-center m-4 mt-5'>
                <button className='m-4 h-6 w-28 bg-white text-zinc-900 text-xs rounded hover:bg-black hover:text-white border border-white'>Start Deploying</button>
                <button className='m-4 h-6 w-28 bg-black text-white text-xs rounded '>Get a Demo</button>
            </div>

             <div className='flex text-center font-thin text-[12px] mt-5 m-5 '>
             <p >Vercel combines the best developer experience with
                an obsessive focus on end-user performance.
                Our platform enables frontend teams to do their best work.
             </p>
             </div>
        </div>
    )
}

export default Content
