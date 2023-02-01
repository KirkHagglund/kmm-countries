let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

//-----Fetch for Country data ---//
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(
                Object.values(data[0].languages).toString().split(",").join(", ")
            );

        })
});

//--- need to append to the html to become visible ---//




//---GLOBE JAVASCRIPT ---//
mapboxgl.accessToken = 'pk.eyJ1IjoicGVhY2h5c25pY2tlciIsImEiOiJjbGRrZjBqbnIwOWs0M29xa3VvZGI2dXA2In0.qfH4zvQWMbN6kEIC3d-xhA';
const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/dark-v10', // Map style to use
    projection: 'globe',
    zoom: 0.75, // Starting zoom level
    zoom: 1, // Starting zoom level
    center: [-90, 40]
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

//--- END of GLOBE JAVASCRIPT ---//
