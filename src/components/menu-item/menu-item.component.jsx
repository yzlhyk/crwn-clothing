import React from 'react';
import './menu-item.styles.scss';
import { useNavigate, useLocation } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, }) => {

  let { pathname } = useLocation();
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`${pathname}${linkUrl}`);
  }

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <div className="subtitle">SHOP NOW</div>
      </div>
    </div>
  )
};

export default MenuItem;
