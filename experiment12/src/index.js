import "./styles.css";

const API_URL = "https://api.coinpaprika.com/v1/tickers";
const coinList = document.querySelector("ul");
const progress = document.querySelector(".progress");

const showData = (elem) =>{
    const li = document.createElement("li");
    const coinName = document.createElement("h4");
    const coinPrice = document.createElement("h4");
    coinName.innerHTML = elem.name;
    coinPrice.innerHTML = elem.quotes.USD.price + "$";
    li.appendChild(coinName);
    li.appendChild(coinPrice);
    coinList.appendChild(li);
};


const handleData =(data)=>{
    data.forEach(element => {
        showData(element);
    });
    progress.innerHTML = "Crypto Currency Info";

};


function handleLoad(){
    console.log("loaded");
    fetch(API_URL).then((response)=>response.json()).then((data)=>handleData(data)).catch(e=>{
        console.log(e);
        progress.innerHTML = "Can not get data";
    })
};

function init(){
    window.addEventListener("load",handleLoad);
}

init();

setInterval(handleLoad,5000);
