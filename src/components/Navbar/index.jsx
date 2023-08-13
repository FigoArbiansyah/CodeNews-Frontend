// import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../../data/categories'

const Navbar = () => {
  return (
    <header>
        <nav className="py-3 md:px-10 px-5 bg-black text-white grid grid-cols-12 items-center">
            <div className="col-span-2">
                <h3 className="text-2xl font-semibold">CodeNews</h3>
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
                <button className="flex items-center">
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
    </header>
  )
}

export default Navbar