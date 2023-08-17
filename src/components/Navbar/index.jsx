// import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../../data/categories'
import { useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handleVisible = (_bool) => {
    // if (visible) {
    //     document.body.style.overflowY = 'hidden'
    // } else {
    //     document.body.style.overflowY = 'auto'
    // }
    setVisible((_prevState) => _bool ?? !_prevState);
  }
  return (
    <header>
        <nav className="py-3 md:px-10 px-5 bg-black text-white grid grid-cols-12 items-center">
            <div className="col-span-2">
                <h3 className="text-2xl font-semibold">
                    <Link to={'/'}>CodeNews</Link>
                </h3>
            </div>
            <div className="col-span-8">
                <ul className="max-md:hidden w-full text-slate-200 overflow-x-auto grid grid-flow-col auto-cols-max gap-8 ul-category text-[15px]">
                    {categories?.map((category, index) => {
                        return (
                            <li key={index}>
                                <Link to={'/'}>{category}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="col-span-2 justify-self-end grid grid-cols-2 gap-5">
                <button onClick={() => handleVisible()} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
                <button className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
        {visible && (
            <div className='w-full min-h-full fixed top-0 left-0 bg-black bg-opacity-50 backdrop-blur-lg z-40 grid pt-10 justify-center md:grid-cols-3'>
                <div className='max-md:hidden' onClick={() => handleVisible()}></div>
                <div className='flex justify-center h-auto'>
                    <div className='relative'>
                        <div onClick={() => handleVisible()} className="cursor-pointer close-button bg-white absolute -top-3 -right-3 rounded-full p-1 shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div className="bg-white p-3 rounded-lg md:w-[25rem] w-[18rem] z-50">
                            <input 
                                type="text" 
                                className='outline-0 border-b p-2 rounded w-full'
                                placeholder='Cari Berita'
                            />
                        </div>
                    </div>
                </div>
                <div className='max-md:hidden' onClick={() => handleVisible()}></div>
            </div>
        )}
    </header>
  )
}

export default Navbar