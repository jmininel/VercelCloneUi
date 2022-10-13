import React from 'react'

function Header() {
    return (
        <div className='border border-green-600'>
            <header className='flex flex-row items-center justify-between'>
               <div className='m-3'>
                 <img className='w-24 ' src="src\assets\logo.svg" alt="" />
               </div>

               <div className='m-3 ' >
                      <ul className='flex flex-row items-center justify-between text-zinc-400 font-light text-[0.5rem]'>
                      <li className='m-1 hover:text-slate-50 text-xl' >Features</li>
                      <li className='m-1 hover:text-slate-50 text-xl'>Templates</li>
                      <li className='m-1 hover:text-slate-50 text-xl'>Integrations</li>
                      <li className='m-1 hover:text-slate-50 text-xl'>Customers</li>
                      <li className='m-1 hover:text-slate-50 text-xl'>Enterprise</li>
                      <li className='m-1 hover:text-slate-50 text-xl'>Pricing</li>
                  </ul>
                </div>
               
                 <div className='m-3'>
                    <ul className='flex flex-row items-center justify-between text-zinc-400 font-light text-[0.5rem]'>
                        <li className='m-1 hover:text-slate-50 text-xl '>Contact</li>
                        <li className='m-1 hover:text-slate-50 text-xl '>Login</li>
                        <li className='m-1 px-2 py-1 bg-white text-xl font-bold text-slate-900 hover:text-white hover:bg-black  rounded border border-white '>Sign Up</li>
                    </ul>
                 </div>

             

             

            
                
            
            </header>
        </div>
    )
}

export default Header
