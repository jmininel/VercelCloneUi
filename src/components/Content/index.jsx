import React from 'react'

function Content() {
    return (
        <section class="bg-black flex flex-col items-center justify-center">
        <span class="mt-40 items-center justify-center text-[5.5rem] font-bold leading-none tracking-tighter">
          <span class="animate-gradient block before:absolute before:z-[1] before:text-white before:content-['Develop.']"></span>
          <span class="relative select-none bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text p-[0.05rem] text-transparent ">Develop.</span>
        </span>
      
        <h1 class="flex items-center justify-center text-[5.5rem] font-bold leading-none tracking-tighter">
          <span class="animate-gradient relative select-none bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text p-[0.05rem] text-transparent before:absolute before:z-0 before:text-transparent before:content-['Preview.']">Preview.</span>
        </h1>
      
        <h1 class="flex items-center justify-center text-[5.5rem] font-bold leading-none tracking-tighter">
          <span class="animate-gradient relative block select-none bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] bg-clip-text p-[0.05rem] text-transparent before:absolute before:z-0 before:text-transparent before:content-['Ship.']">Ship.</span>
        </h1>
      
        <span class="mt-40 mb-80 selection:bg-[#f81ce5] selection:text-white text-white">Vercel combines the best developer experience with
                      an obsessive focus on end-user performance.
                      Our platform enables frontend teams to do their best work.</span>
      </section>
    )
}

export default Content
