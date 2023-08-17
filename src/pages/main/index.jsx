// import React from 'react'
import { Link } from 'react-router-dom'
import NewsAlert from '../../components/Alert/NewsAlert'
import Card from '../../components/Card/Card'
import FlexibleCard from '../../components/Card/FlexibleCard'
import Navbar from '../../components/Navbar'
import ThumbnailSlider from '../../components/ThumbnailSlider'
import dummyArticles from '../../data/articles'
import SimpleFooter from '../../components/Footer/SimpleFooter'

const index = () => {
  return (
    <>
        <Navbar />
        <NewsAlert opened={true} closeAble={false} />
        <section className='grid grid-cols-12 md:px-10 px-5 mt-6 min-h-[90vh] gap-4 mb-10'>
            <ThumbnailSlider
                colSpan={7}
                style='relative w-full md:col-span-8 col-span-12'
            />
            <div className="md:col-span-4 col-span-12 grid grid-rows-4 gap-4">
                {dummyArticles?.slice(0, 4).map((article, index) => {
                    return (
                        <FlexibleCard
                            key={index}
                            index={index}
                            item={article}
                            toLeft={false}
                            style='md: max-md:my-3'
                            thumbStyle=''
                        />
                    )
                })}
            </div>
        </section>
        <section className="md:px-10 px-5 mt-10 mb-10">
            <div className="flex justify-between items-center">
                <h2 className='text-3xl font-semibold'>Latest News</h2>
                <div className="flex gap-1 items-center">
                    <Link to={'/news'} className='text-red-600 font-semibold'>See all</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-4 max-md:gap-y-8">
                {dummyArticles?.slice(0, 3).map((article, index) => {
                    return (
                        <>
                            <Card item={article} index={index} style={''} />
                        </>
                    )
                })}
            </div>
        </section>
        <section className="md:px-10 px-5 mt-20 mb-10">
            <div className="flex justify-between items-center">
                <h2 className='text-3xl font-semibold'>Must Read</h2>
                <div className="flex gap-1 items-center">
                    <Link to={'/news'} className='text-red-600 font-semibold'>See all</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <div className="mt-10 grid md:grid-cols-12 gap-4 max-md:gap-y-8">
                {dummyArticles?.slice(0, 1).map((article, index) => {
                    return (
                        <div key={index} className='md:col-span-7 col-span-12'>
                            <Card item={article} index={index} style={''} thumbStyle='h-[18rem]' />
                        </div>
                    )
                })}
                <div className="md:col-span-5 col-span-12 grid grid-rows-3 gap-4">
                    {dummyArticles?.slice(0, 3).map((article, index) => {
                        return (
                            <FlexibleCard
                                key={index}
                                index={index}
                                item={article}
                                toLeft={false}
                                style='md: max-md:my-3'
                                thumbStyle='aspect-[16/9]'
                            />
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="md:px-10 px-5 mt-10 mb-10">
            <div className="flex justify-between items-center">
                <h2 className='text-3xl font-semibold'>Weekly Highlight</h2>
                <div className="flex gap-1 items-center">
                    <Link to={'/news'} className='text-red-600 font-semibold'>See all</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-4 max-md:gap-y-8">
                {dummyArticles?.slice(0, 4).map((article, index) => {
                    return (
                        <>
                            <Card item={article} index={index} style={''} />
                        </>
                    )
                })}
            </div>
        </section>
        <br />
        <br />
        <SimpleFooter />
    </>
  )
}

export default index