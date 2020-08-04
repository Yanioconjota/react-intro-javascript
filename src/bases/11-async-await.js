
const getImagen = async() => {
  try {
    const apiKey = 'WQY9UC0spB6ehbMFIiMSB20VixpqTJxL';
  const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
  const {data} = await resp.json();
  const {url} = data.images.original;
  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
  } catch (error) {
    console.error(error)
  }
}
getImagen();