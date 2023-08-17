// import React from 'react'
import NewsAlert from '../../components/Alert/NewsAlert'
import Card from '../../components/Card/Card'
import FlexibleCard from '../../components/Card/FlexibleCard'
import Navbar from '../../components/Navbar'
import ThumbnailSlider from '../../components/ThumbnailSlider'
import dummyArticles from '../../data/articles'

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
                {dummyArticles?.map((article, index) => {
                    return (
                        <FlexibleCard
                            key={index}
                            index={index}
                            item={article}
                            toLeft={false}
                            style='md: max-md:my-3'
                        />
                    )
                })}
            </div>
        </section>
        <section className="md:px-10 px-5 mt-10 mb-10">
            <h2 className='text-3xl font-semibold'>Latest News</h2>
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
    </>
  )
}

export default index