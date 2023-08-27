import React from 'react';
import './Button.css';
const Button = ({ onClick }) => {

  return (
    <div className="ButContainer">
      <button className="Button" onClick={onClick}>
        Add pages
      </button>
    </div>
  );

}
export default Button