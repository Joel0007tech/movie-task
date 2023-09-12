export const apiKey ='46de18fffa9edb1da899c9420d18e1c6'
export const movieTitle ='The Shawshank Redemption';
fetch('https://api.themoviedb.org/3/account/20425354', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));