import {Link} from 'react-router-dom'

export function Navbar(){

    return(

        <>
        <header className=" m-1 p-3 bg-orange-50 text-emerald-500">
            <nav className=" flex justify-between">
                <div>
            
                      <span role="img" aria-label="Excel Work" className=" text-4xl">📊</span> <span className=" size-3 font-bold text-2xl" ><span className=" text-red-600 text-4xl text-ellipsis">S</span>heet<span className=" text-3xl text-yellow-400">X</span>Sleuth</span>
                </div>
                <div>
                   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"> Login</button>
                     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Register </button>
                    
                </div>
            </nav>
        </header>
        
        
        </>
    )
}