import React from 'react'
import PropTypes from 'prop-types'

const NewsAlert = ({ opened, closeAble }) => {
  const [isOpen, setIsOpen] = React.useState(opened);
  const closeAlert = () => {
    setIsOpen(false);
  }
  return (
    <div className={`my-4 md:px-10 px-5 ${!isOpen ? 'hidden' : ''}`}>
        <div className="px-10 py-3 bg-gray-200 rounded-lg bg-opacity-50 grid grid-cols-12">
            <p className={`overflow-hidden ${closeAble ? 'col-span-11' : 'col-span-12'}`}>
                <span className="font-semibold text-red-600">News Update:</span>
                <span>&nbsp; Lagi! Ibu-ibu perumahan Griya Jadimulya berhasil memenangkan pertandingan antar desa.</span>
            </p>
            {closeAble && (
              <button className="col-span-1" onClick={() => closeAlert()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
        </div>
    </div>
  )
}

NewsAlert.propTypes = {
  opened: PropTypes.bool.isRequired,
  closeAble: PropTypes.bool.isRequired,
}

export default NewsAlert