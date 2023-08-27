import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';

const Loader = ({ status, items, btnVal, loadMore }) => {

  <ToastContainer autoClose={1000} />;

  if (status === 'idle') {
    return <></>;
  }
  if (status === 'pending') {
    return (
      <>
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </>
    );
  }

  if (status === 'rejected') {
    return <>{toast.error('Error!')}</>;
  }

  if (status === 'resolved') {
    return (
      <>
        <ImageGallery loadData={items} />
        {items.length && btnVal >= 12 && <Button onClick={loadMore} />}
      </>
    );
  }

}
export default Loader;
