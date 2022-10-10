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
                      <li className='m-1 hover:text-slate-50 hover:font-normal' >Features</li>
                      <li className='m-1 hover:text-slate-50 hover:font-normal'>Templates</li>
                      <li className='m-1 hover:text-slate-50 hover:font-normal'>Integrations</li>
                      <li className='m-1 hover:text-slate-50 hover:font-normal'>Customers</li>
                      <li className='m-1 hover:text-slate-50 hover:font-normal'>Enterprise</li>
                      <li className='m-1 hover:text-slate-50 hover:font-normal'>Pricing</li>
                  </ul>
                </div>
               
                 <div className='m-3'>
                    <ul className='flex flex-row items-center justify-between text-zinc-400 font-light text-[0.5rem]'>
                        <li className='m-1 hover:text-slate-50 hover:font-normal '>Contact</li>
                        <li className='m-1 hover:text-slate-50 hover:font-normal '>Login</li>
                        <li className='m-1 w-10 h-4 bg-white font-medium text-slate-900 hover:text-white hover:bg-black hover:font-medium rounded border border-white '>Sign Up</li>
                    </ul>
                 </div>

             

             

            
                
            
            </header>
        </div>
    )
}

export default Header
