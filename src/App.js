import React, { Component } from 'react';
import InputName from './components/input';
import ImageGrid from './components/image-grid';
import './styles/app.css';

import SearchService from './components/serch-service';

class App extends Component {
  state ={
    images: []
  }

  getImages = async value => {
    try {
      const images = await SearchService.imageRequestHandler(value);
      console.log('rer', images);
      this.setState({ images });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { images } = this.state;
    console.log('Appimages', images);
    return (
      <div className="app">
        <h3>FLICKR SEARCH!</h3>
        <InputName getValue={this.getImages}/>
        <ImageGrid images={this.state.images}/>
      </div>
    );
  }
}

export default App;
