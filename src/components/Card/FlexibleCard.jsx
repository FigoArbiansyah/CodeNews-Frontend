// import React from 'react'
import PropTypes from 'prop-types'

const FlexibleCard = ({ index, item, toLeft, style }) => {
  const getDiffTime = (created_at) => {
    const now = new Date();
    const diffMilliseconds = now - new Date(created_at);
    const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));  
    if (diffHours < 1) {
        return `${diffMinutes} mins ago`;
    } else {
        return `${diffHours} hours ago`;
    }
  }
  const calculateReadTime = (text) => {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const averageReadingSpeed = 250;  // words per minute
    const readTimeMinutes = wordCount / averageReadingSpeed;
    return ` \u2022 ${Math.ceil(readTimeMinutes)} min read`;
  }
  return (
    <article 
        id={index + item?.title ?? 'isID'} 
        className={`flex gap-3 ${toLeft ? 'flex-row-reverse' : 'flex-row'} ${style}`}
    >
        <div className="md:w-1/3 w-[40%]">
            <img src={item?.thumbnail} className="w-full aspect-square object-cover rounded" alt={item?.title} />
        </div>
        <div className="md:w-2/3 w-[60%] py-1">
            <div className="flex gap-2 items-center">
                <img src={item?.author_img} className="w-8 aspect-square object-cover rounded-full" alt={item?.author} />
                <p className="text-lg font-semibold">{item?.author}</p>
                <p>{'\u2022'}</p>
                <p className='text-gray-800'>{getDiffTime(item?.created_at)}</p>
            </div>
            <div className="mt-3">
                {/* leading-[1.4rem] */}
                {/* BENERIN BESOK YAAAAA */}
                <p className="md:hidden text-lg font-semibold">
                    {
                        item?.title.split('').length > 38 ?
                        `${item?.title.substring(0, 38)}...`
                        : item?.title
                    }
                </p>
                <p className="max-md:hidden text-lg font-semibold">
                    {
                        item?.title.split('').length > 55 ?
                        `${item?.title.substring(0, 55)}...`
                        : item?.title
                    }
                </p>
                <p className="mt-2 text-sm flex gap-2">
                    <span className='text-red-500 opacity-75 font-semibold'>{item?.category_name}</span>
                    <span className='text-gray-700'>{calculateReadTime(item?.content)}</span>
                </p>
            </div>
        </div>
    </article>
  )
}

FlexibleCard.propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    toLeft: PropTypes.bool.isRequired,
    style: PropTypes.string.isRequired,
}

export default FlexibleCard