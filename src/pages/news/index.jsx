// import React from 'react'
// import { Link } from 'react-router-dom'
import dummyArticles from '../../data/articles'
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar'
import SimpleFooter from '../../components/Footer/SimpleFooter'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <>
        <Navbar />
        <section className="md:px-10 px-5 mt-10 mb-10">
            <div className="flex justify-between items-center">
                <h2 className='text-3xl font-semibold'>All News</h2>
                {/* <div className="flex gap-1 items-center">
                    <Link to={'/'} className='text-red-600 font-semibold'>See all</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div> */}
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-4 gap-y-8 max-md:gap-y-8">
                {dummyArticles?.map((article, index) => {
                    return (
                        <Link to={`/news/${article?.slug}-${index}`} key={index}>
                            <Card item={article} index={index} style={''} />
                        </Link>
                    )
                })}
            </div>
        </section>
        <SimpleFooter />
    </>
  )
}

export default index