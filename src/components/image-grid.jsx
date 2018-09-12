import React from 'react';

const imageArray = images => images.map(photo => {
  let src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  return (
    <div
      className="photo-grid__photo-container"
      key={photo.id}
    >
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

  console.log('imagesGrid', images);
  return (
    <div className="image-grid">
      {imageArray(images)}
    </div>
  );
}

export default ImageGrid;
