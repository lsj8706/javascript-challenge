import "./styles.css";

const API_URL = "http://ip-api.com/json/";
const indicator = document.getElementById("jsIndicator");
const loacationList = document.getElementById("jsUl");
const info = document.getElementById("jsInfo");
const city = document.getElementById("jsCity");
const country = document.getElementById("jsCountry");
const latitude = document.getElementById("jsLat");
const longitude = document.getElementById("jsLon");

const handleData=(data)=>{
    console.log(data);
    indicator.innerHTML = `Loaded ${data.status}`;
    info.innerHTML = "Your Location Info"
    city.innerHTML = `City : ${data.city}`;
    country.innerHTML = `Country : ${data.country}`;
    latitude.innerHTML = `Latitude : ${data.lat}`;
    longitude.innerHTML = `Longitude : ${data.lon}`;
    

};

const handleLoad =()=>{
    fetch(API_URL).then((response)=>response.json()).then((data) => handleData(data))
};

function init(){
    window.addEventListener("load",handleLoad);
};

init();