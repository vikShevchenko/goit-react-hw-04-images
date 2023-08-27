import React from 'react'
import './ImageGalleryItem.css'

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onHandle }) => {

  return (
    <>
      <li className="ImageGalleryItem">
        <img src={webformatURL} alt={tags} className='ImageGalleryItem-image' onClick={() => onHandle(largeImageURL)} />
      </li>
    </>
  )
}
export default ImageGalleryItem