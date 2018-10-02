import React from 'react';
import '../styles/images.css';

const imageArray = images => images.map(photo => {
  let src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  return (
    <div
      className="photo-grid-container"
      key={photo.id}
    >
      { photo.title }
      <a href={src} target="_blank">
        <img
          className="photo"
          src={src}
          alt={photo.title}
        />
      </a>
    </div>
  );
});

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {imageArray(images)}
    </div>
  );
}

export default ImageGrid;
