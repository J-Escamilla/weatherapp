
document.getElementById('search').addEventListener('click', findCity)
document.querySelector('#fHeight').addEventListener('click', convertF)
document.querySelector('#celcius').addEventListener('click', convertC)

// document.getElementById('search').addEventListener('keypress', function(e) {
//   if (e.key === 13) {
//     const searchCity = document.querySelector('input').value

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=20c3e49019bea31c373001401a7749b4&units=imperial`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log('Get outta here!')
//       document.querySelector('#city_text').innerText = data.name
//       document.querySelector('#temperature').innerText = Math.floor(data.main.temp) + '°'
//       document.querySelector('img').src = `http://openweathermap.org/img/w/` + data.weather[0].icon + `.png`

//       searchCity.value = ''
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     }); 
//   }
//   }
// )

window.addEventListener('keydown',function(e){
  if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter' || e.keyCode==13){
    if(e.target.nodeName=='INPUT'&&e.target.type=='text'){
      e.preventDefault();
      return false;}}
    },true);


//create function to fetch api on search and show temp-city
function findCity(e){
  e.preventDefault
  const searchCity = document.querySelector('input').value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=20c3e49019bea31c373001401a7749b4&units=imperial`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log('Get outta here!')
      document.querySelector('#city_text').innerText = data.name
      document.querySelector('#temperature').innerText = Math.floor(data.main.temp) + '°'
      document.querySelector('img').src = `http://openweathermap.org/img/w/` + data.weather[0].icon + `.png`

      if(searchCity.value === '') {
        alert('Please enter a city.')
        return false
      }

      searchCity.value = ''
    })
    .catch(err => {
        console.log(`error ${err}`)
    }); 
  }

//on click convert fheight to celcius
function convertF() {
  const searchCity = document.querySelector('input').value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=20c3e49019bea31c373001401a7749b4&units=imperial`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    document.querySelector('#temperature').innerText = Math.floor(data.main.temp) + '°' 
  })
  .catch(err => {
      console.log(`error ${err}`)
  }); 
}

//convert to celcius 
function convertC() {
  const searchCity = document.querySelector('input').value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=20c3e49019bea31c373001401a7749b4&units=imperial`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {

    let temp = (Math.floor(data.main.temp) - 32) * .5666
    document.querySelector('#temperature').innerText = Math.floor(temp) + `°`
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  }); 
}