const weatherImgUrl = {
  clouds:
    "https://cdn.pixabay.com/photo/2021/01/24/20/21/cloud-5946381_1280.jpg",
  clear:
    "https://cdn.pixabay.com/photo/2014/10/03/16/52/natural-471949_1280.jpg",
  snow: "https://cdn.pixabay.com/photo/2016/11/10/21/11/house-1815147_1280.png",
  rain:
    "https://images.pexels.com/photos/3708717/pexels-photo-3708717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  thunderstorm:
    "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
};

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const text = document.getElementById("text");
const bgImg = document.getElementById("bg-img");
const submitBtn = document.getElementById("submit-btn");
const searchedCity = document.getElementById("location");
const img = document.getElementById("img");

let givenCity = "paris";


searchedCity.addEventListener("change", (e) => {
  givenCity = e.target.value;
  console.log(givenCity);
  getData(givenCity);
});

function getData(givenCity) {
  let URL = `http://api.openweathermap.org/data/2.5/weather?q=${givenCity}&appid=bb7021d558856f2a9f14a9dfc4cffa82`;
  fetch(URL, { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let weather = response;
      city.textContent = `${weather.name}`;
      temp.textContent = `${Math.round(weather.main.feels_like - 273)} °C`;
      text.textContent = `${weather.weather[0].description}`;
      switch (weather.weather[0].main) {
        case "Clear":
          bgImg.src = `${weatherImgUrl.clear}`;
          break;
        case "Clouds":
          bgImg.src = `${weatherImgUrl.clouds}`;
          break;
        case "Snow":
          bgImg.src = `${weatherImgUrl.snow}`;
        case "Rain":
          bgImg.src = `${weatherImgUrl.rain}`;
        case "Thunderstrom":
          bgImg.src = `${weatherImgUrl.thunderstorm}`;
      }
    })
    .catch((err) => {
      console.log("Unable to get data");
    });
}

getData(givenCity);