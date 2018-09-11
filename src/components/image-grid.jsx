import React, { Component } from 'react';

class ImageGrid extends Component {
  constructor() {
    super(props);
    this.state = {
      imagesArray:[]
    }
  }

  imageRequestHandler = (searchValue) => {
    const apiKey = '6b3575d10435de5f010fc941f5eff94a'
    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchValue}`;
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            imagesArray: data.photos.photos
          });
        })
        .catch(error => {
          throw error;
        });
  };
  render() {
    return (
      <div className="images-grid">

      </div>
    );
  }
}

export default ImageGrid;
