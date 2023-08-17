// import React from 'react'
// import Card from "../../components/Card/Card"

import dummyArticles from '../../data/articles'
import SimpleFooter from "../../components/Footer/SimpleFooter"
import Navbar from "../../components/Navbar"
import FlexibleCard from '../../components/Card/FlexibleCard'
import NewsAlert from '../../components/Alert/NewsAlert'

const detail = () => {
  return (
    <>
        <Navbar />
        <NewsAlert opened={true} closeAble={false} />
        <section className='grid grid-cols-12 md:px-10 px-5 mt-6 min-h-[90vh] gap-6 md:gap-12 mb-10 max-w-[100vw]'>
            <div className='md:col-span-8 col-span-12'>
                <div>
                    <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-[18rem] object-cover rounded-xl" />
                </div>
                <div className='my-10'>
                    <h1 className="text-3xl font-bold" style={{ fontWeight: 700 }}>Title For Detail News</h1>
                    <p className="text-gray-500 mt-2">
                        <span >10 hours ago </span>
                         - 
                        <span className='text-'> 20 Desember 2023</span>
                    </p>
                </div>
                <div className="text-gray-800 text-justify text-lg">
                    <p className="">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore vitae expedita voluptatibus veritatis ipsa ipsam corrupti quis. Doloremque architecto iste a placeat? Voluptatibus est id corporis facere, laudantium nam et tempora, nulla maxime earum incidunt illo blanditiis! Deleniti reprehenderit sunt veniam corrupti eveniet assumenda quod aliquam, iure nulla sint. Reiciendis eligendi nihil obcaecati illum, velit eveniet earum nesciunt sapiente voluptas qui repellat fugit ad minima, quasi magni, error aut laborum totam. Dignissimos, vitae deserunt. Ex odit necessitatibus neque architecto accusantium, nihil rerum saepe quod ab totam consectetur animi perspiciatis quia, numquam ea laudantium voluptatibus tempore. Placeat, incidunt est similique nam minus accusantium reiciendis minima.
                    </p>
                    <p className="">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore vitae expedita voluptatibus veritatis ipsa ipsam corrupti quis. Doloremque architecto iste a placeat? Voluptatibus est id corporis facere, laudantium nam et tempora, nulla maxime earum incidunt illo blanditiis! Deleniti reprehenderit sunt veniam corrupti eveniet assumenda quod aliquam, iure nulla sint. Reiciendis eligendi nihil obcaecati illum, velit eveniet earum nesciunt sapiente voluptas qui repellat fugit ad minima, quasi magni, error aut laborum totam. Dignissimos, vitae deserunt. Ex odit necessitatibus neque architecto accusantium, nihil rerum saepe quod ab totam consectetur animi perspiciatis quia, numquam ea laudantium voluptatibus tempore. Placeat, incidunt est similique nam minus accusantium reiciendis minima.
                    </p>
                </div>
                <div className='mt-5'>
                    <p className="font-semibold">By:</p>
                    <div className='flex gap-3 mt-2 items-center'>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='w-20 object-contain rounded border' alt="" />
                        <div>
                            <p className='font-semibold text-lg'>Figo Dev</p>
                            <p className="text-gray-600">Frontend</p>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className="comment">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='w-10 object-contain rounded-full border' alt="" />
                        <div className='w-full'>
                            <input type="text" className='outline-0 border rounded w-full p-2 px-4' placeholder='Tambahkan komentar' />
                        </div>
                    </div>
                    {/* COMMENT LISTS */}
                    <div className='flex gap-5 items-start'>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='w-10 object-contain rounded border' alt="" />
                        <div>
                            <p className='text-gray-700 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium consequatur provident reprehenderit consequuntur iure minima, suscipit, numquam, deleniti praesentium dolor aperiam. Illum incidunt quos sunt quis labore, dolores est placeat.</p>
                            <div className='mt-1'>
                                <button className='text-blue-500 text-sm font-semibold'>Reply</button>
                            </div>
                            {/* COMMENT REPLY */}
                            <div className='flex gap-5 items-start mb-6 mt-5 border-l pl-2'>
                                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='w-10 object-contain rounded border' alt="" />
                                <div>
                                    <p className='text-gray-700 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium consequatur provident reprehenderit consequuntur iure minima, suscipit, numquam, deleniti praesentium dolor aperiam. Illum incidunt quos sunt quis labore, dolores est placeat.</p>
                                </div>
                            </div>
                            {/* COMMENT REPLY */}
                        </div>
                    </div>
                    <div className='flex gap-5 items-start mb-6'>
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='w-10 object-contain rounded border' alt="" />
                        <div>
                            <p className='text-gray-700 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium consequatur provident reprehenderit consequuntur iure minima, suscipit, numquam, deleniti praesentium dolor aperiam. Illum incidunt quos sunt quis labore, dolores est placeat.</p>
                            <div className='mt-1'>
                                <button className='text-blue-500 text-sm font-semibold'>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-4 col-span-12">
                {dummyArticles?.slice(0, 4).map((article, index) => {
                    return (
                        <FlexibleCard
                            key={index}
                            index={index}
                            item={article}
                            toLeft={false}
                            style='md:mb-2 max-md:my-3'
                            thumbStyle=''
                        />
                    )
                })}
            </div>
        </section>
        <SimpleFooter />
    </>
  )
}

export default detail