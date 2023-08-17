// import React from 'react'

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-4 md:px-10 px-5 bg-stone-100 grid md:grid-cols-3">
        <div className='md:col-span-2'>
            <p className="text-black max-md:text-center">&copy; {currentYear} CodeNews, All rights reserved</p>
        </div>
        {/* <div className='col-span-1'>
            <div className='grid grid-cols-3'>

            </div>
        </div> */}
    </footer>
  )
}

export default SimpleFooter