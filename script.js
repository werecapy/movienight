/*const button = document.getElementById('generate-button');
const output = document.getElementById('output');
const movieapiKey = '${{ secrets.movie_api_key }}'; // Replace with your
const ball_url = "https://eightballapi.com/api"
const movie_url = 'https://api.themoviedb.org/3/authentication';


function plan_night() {
    let answer;
    fetch("https://eightballapi.com/api")
        .then(response => response.json())
        .then(data => {
            const answer = data.answer;
            output.innerHTML = `<p>${answer}</p>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            output.innerHTML = '<p>Error fetching data. Please try again later.</p>';
        });
}

button.addEventListener('click', plan_night);*/

const button = document.getElementById('generate-button2');
const output = document.getElementById('output2');

function plan_night() {
  output.textContent = 'Consulting the ball...';

  fetch("https://eightballapi.com/api")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      output.textContent = data.reading;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      output.textContent = 'Error fetching data. Please try again later.';
    });
}

button.addEventListener('click', plan_night);