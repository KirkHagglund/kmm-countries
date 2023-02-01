let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let resultDiv = document.querySelector("#result");


//Overall function calling all APIs

var submitRequest = function (event) {
    event.preventDefault();
    var countryInput = countryInp.value;

    if (countryInput) {
        getWikiLink(countryInput);
        restUrl(countryInput);
    };
};



//-----Fetch for Country data ---//

const restUrl = function (countryName) {
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.png); //not working - cant translate the photo file over
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(Object.values(data[0].languages).toString().split(",").join(", "),);


            let countryCapital = document.createElement('h4');
            let countryFlags = document.createElement('img'); //not working
            let countryContinent = document.createElement('h4');
            let countryPopulation = document.createElement('h4');
            let countryCurrency = document.createElement('h4');
            let countryLanguage = document.createElement('h4');


            countryCapital.textContent = "Capital: " + data[0].capital[0];
            countryFlags.imageContent = "Country Flag: " + data[0].flags.png; //not working
            countryContinent.textContent = "Continent: " + data[0].continents[0];
            countryPopulation.textContent = "Population: " + JSON.stringify(data[0].population);
            countryCurrency.textContent = "Currencies: " + Object.keys(data[0].currencies)[0];
            countryLanguage.textContent = "Common Languages: " + Object.values(data[0].languages).toString().split(",").join(", ");

            resultDiv.appendChild(countryCapital);
            resultDiv.appendChild(countryFlags);
            resultDiv.appendChild(countryContinent);
            resultDiv.appendChild(countryPopulation);
            resultDiv.appendChild(countryCurrency);
            resultDiv.appendChild(countryLanguage);

        })
};




//---GLOBE JAVASCRIPT ---//
mapboxgl.accessToken = 'pk.eyJ1IjoicGVhY2h5c25pY2tlciIsImEiOiJjbGRrZjBqbnIwOWs0M29xa3VvZGI2dXA2In0.qfH4zvQWMbN6kEIC3d-xhA';
const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/light-v10', // Map style to use
    projection: 'globe',
    zoom: 1, // Starting zoom level
    center: [-90, 40]
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

//--- END of GLOBE JAVASCRIPT ---//

// --- Adding Wiki LInk API fetch request --- //

const getWikiLink = (country) => {
    const wikiUrl = 'https://en.wikipedia.org//w/api.php?action=opensearch&search=' + country + '&limit=1&format=json&origin=*&search=stack&limit=10';
    fetch(wikiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        console.log(data);
                    })
                    ;
            }
        })

};

// === Event Listener Section ====  //

searchBtn.addEventListener('click', submitRequest);