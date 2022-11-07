const countryName=document.getElementById("country-name");
const countryFlag=document.getElementById("country-flag");
const searchBtn=document.getElementById("search");
const official=document.getElementById("official");
const capital=document.getElementById("capital");
const region=document.getElementById("region");
const population=document.getElementById("population");
const area=document.getElementById("area");
const timezones=document.getElementById("timezones");



searchBtn.addEventListener("submit", (e) => {
    // console.log(e)
    e.preventDefault();

    fetch(`https://restcountries.com/v3.1/name/${e.target[0].value}`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        countryFlag.innerHTML = `<img src= ${data[0].flags.png} alt="country flag">`;
        countryName.textContent = data[0].name.common;
        official.innerHTML=`<h4> Official Name : ${data[0].name.official}</h4>`;
        capital.innerHTML=`<h4> Capital : ${data[0].capital}</h4>`;
        // capital.innerHTML=data[0].capital;
        region.innerHTML=`<h4> Region : ${data[0].region}</h4>`;
        // region.innerHTML=data[0].region;
        population.innerHTML=`<h4> Population : ${data[0].population}</h4>`;
        // population.innerHTML=data[0].population;
        // official.innerHTML=data[0].name.official;
        area.innerHTML=`<h4> Area : ${data[0].area}</h4>`;
        // area.innerHTML=data[0].area;
        timezones.innerHTML=`<h4>Timezones : ${data[0].timezones[0]}</h4>`;
        
    });
});

