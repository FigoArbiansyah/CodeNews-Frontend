// import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ index, item, style, thumbStyle }) => {
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
    <div className={style} id={index}>
        <div className="overflow-hidden rounded-xl group">
            <img src={item?.thumbnail} alt={item?.title} className={`w-full aspect-[4/3] object-cover group-hover:scale-125 transition-all ease duration-200 ${thumbStyle}`} />
        </div>
        <div className="flex gap-2 items-center mt-6">
                <img src={item?.author_img} className="w-8 aspect-square object-cover rounded-full" alt={item?.author} />
                <p className="text-lg font-semibold">{item?.author}</p>
                <p>{'\u2022'}</p>
                <p className='text-gray-800'>{getDiffTime(item?.created_at)}</p>
            </div>
            <div className="mt-3 md:pr-5">
                {/* leading-[1.4rem] */}
                {/* BENERIN BESOK YAAAAA */}
                <p className="text-xl font-semibold">
                    {item?.title}
                </p>
                <p className="mt-2 text-gray-700">
                    {`${item?.content.substring(0, 100)}...`}
                </p>
                <p className="mt-2 text-sm flex gap-2">
                    <span className='text-red-500 opacity-75 font-semibold'>{item?.category_name}</span>
                    <span className='text-gray-700'>{calculateReadTime(item?.content)}</span>
                </p>
            </div>
    </div>
  )
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  style: PropTypes.string.isRequired,
  thumbStyle: PropTypes.string.isRequired,
}

export default Card