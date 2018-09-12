export default {
  imageRequestHandler(searchValue) {
    const apiKey = '6b3575d10435de5f010fc941f5eff94a'
    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchValue}`

    const data = fetch(url)
      .then(response => response.json())
      .then(data => data.photos.photo)
      .catch(error => {
        throw error;
      });
    console.log('data',data);
    return data;
  }
}