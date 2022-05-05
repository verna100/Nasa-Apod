//The user will enter a date. 
// Use that date to get the NASA picture of 
// the day from that date! 
// https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch)
let nasaKey = config.NASA_API_KEY;


function getFetch(){
    let inputDate = document.querySelector('input').value
//   const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}&date=${inputDate}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
          console.log(data)
        // inputDate = Object.key.data.date;
        document.querySelector('h2').innerText = "Title: " + data.title
        document.querySelector('img').src= data.hdurl
        document.querySelector('h3').innerText = data.explanation
      })
    //   let inputDate = data.date.reverse()
    //   console.log(inputDate)
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch()