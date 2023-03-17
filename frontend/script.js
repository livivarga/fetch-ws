const rootElement = document.getElementById('root');

const composeHtml = function (data) {
  rootElement.insertAdjacentHTML('beforeend', `
  <h2>Photo: ${data.copyright} on ${data.date}</h2>
  <p>${data.explanation}<p>
  <img src="${data.url}">
  `);
}

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function (response) {
    console.log(response);
    // throw new Error ('hibás kód');
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    composeHtml(data);
  })
/*   .catch(function (error) {
    console.log(error)
  }) */
