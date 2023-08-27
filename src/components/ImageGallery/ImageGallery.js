import './ImageGallery.css';
import ImageGalLeryItem from '../ImageGalleryItem/ImageGalleryItem'
import { useState } from 'react'
import Modal from '../Modal/Modal'


export default function ImageGallery({ loadData }) {

  const [clickedImg, setClickedImg] = useState(null)
  const onHandle = (largeImageURL) => {
    setClickedImg(largeImageURL)

  }

  if (clickedImg) {
    document.body.classList.add('disabledScroll')
  } else {
    document.body.classList.remove('disabledScroll')
  }

  return (
    <>
      <ul className="ImageGallery wrapper" >
        {loadData.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageGalLeryItem
            className='wrapper-images'
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onHandle={onHandle} />
        ))}
      </ul>
      {clickedImg && <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />}
    </>
  );
}
