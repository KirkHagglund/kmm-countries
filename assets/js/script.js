// Variable assignment section
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let resultDiv = document.querySelector("#result");

let globeDisplay = document.getElementById('map');
let resultCard = document.getElementById('result-card');
let wikiDiv = document.getElementById('wiki-link');
let homeBtn = document.getElementById('refresh');
resultCard.hidden = true
let localStorageArray = JSON.parse(localStorage.getItem('countries')) || [];
let pastCard = document.getElementById('past-aside');
let countryArray = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anitgua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cote dIvoire', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia','Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Tatooine', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuata', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];
let alertModal = document.getElementById('modal-one');
alertModal.hidden = true;


//Overall function calling all APIs

var submitRequest = function (event) {

    event.preventDefault();
    var countryInput = countryInp.value;
     if (countryArray.includes(countryInput)) {
        getWikiLink(countryInput);
        restUrl(countryInput);
        resultDiv.textContent = "";
        wikiDiv.textContent = "";
        globeDisplay.hidden = true;
        resultCard.hidden = false;
    }
    else {
      
    };
    countryInp.value = "";

};

// Recall function for past search buttons

var pastSearchRequest = function (country) {
  console.log(country + " recall function");
  globeDisplay.hidden = true;
  resultCard.hidden = false;
  resultDiv.textContent = "";
  wikiDiv.textContent = "";

  restUrl(country);
  recallWikiLink(country);
};

// Home nav button refresh function

var pageRefresh = function () {
  resultCard.hidden = true;
  globeDisplay.hidden = false;
};

//-----Fetch for Country data ---//

const restUrl = function (countryName) {
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL);
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.png);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );

      let countryCapital = document.createElement("h4");
      let countryFlags = document.createElement("img");
      let countryContinent = document.createElement("h4");
      let countryPopulation = document.createElement("h4");
      let countryCurrency = document.createElement("h4");
      let countryLanguage = document.createElement("h4");

      countryCapital.textContent = "Capital: " + data[0].capital[0];
      countryFlags.src = data[0].flags.png;
      countryContinent.textContent = "Continent: " + data[0].continents[0];
      countryPopulation.textContent =
        "Population: " + JSON.stringify(data[0].population);
      countryCurrency.textContent =
        "Currencies: " + Object.keys(data[0].currencies)[0];
      countryLanguage.textContent =
        "Common Languages: " +
        Object.values(data[0].languages).toString().split(",").join(", ");

      resultCard.style.backgroundColor = "hsl(217, 71%, 53%)";
      resultCard.style.color = "white";
      resultCard.style.marginRight = "10px";
      resultCard.style.fontSize = "16px";
      resultCard.style.fontWeight = "bolder";
      resultCard.style.fontFamily = " sans-serif";
      resultCard.style.boxShadow = "3px 3px 4px grey";
      resultCard.style.borderRadius = "5px";
      resultCard.style.display = "flex";
      resultCard.style.flexDirection = "column";

      resultDiv.appendChild(countryCapital);
      resultDiv.appendChild(countryFlags);
      countryFlags.style.border = "2px solid black";
      resultDiv.appendChild(countryContinent);
      resultDiv.appendChild(countryPopulation);
      resultDiv.appendChild(countryCurrency);
      resultDiv.appendChild(countryLanguage);
    });
};

//---GLOBE JAVASCRIPT ---//
mapboxgl.accessToken =
  "pk.eyJ1IjoicGVhY2h5c25pY2tlciIsImEiOiJjbGRrZjBqbnIwOWs0M29xa3VvZGI2dXA2In0.qfH4zvQWMbN6kEIC3d-xhA";
const map = new mapboxgl.Map({
  container: "map", // Container ID
  style: "mapbox://styles/mapbox/light-v10", // Map style to use
  projection: "globe",
  zoom: 1, // Starting zoom level
  center: [-90, 40],
});

map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

//--- END of GLOBE JAVASCRIPT ---//

// --- Adding Wiki LInk API fetch request --- //


const getWikiLink = (countryName) => {   
    const wikiUrl = 'https://en.wikipedia.org//w/api.php?action=opensearch&search=' + countryName + '&limit=1&format=json&origin=*';
    fetch(wikiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {   
                        let wikiLink = document.createElement('a');
                        let wikiDisplay = document.createElement('p');

                        wikiLink.href = data[3];
                        wikiLink.setAttribute('target', 'blank');
                        wikiDisplay.textContent = 'Wikipedia Link'
                        wikiLink.setAttribute('style', 'color: white;');

                        wikiDiv.appendChild(wikiLink);
                        wikiLink.appendChild(wikiDisplay);

                        // Local Storage Section
                        let pastCity = data[0];
                        if (localStorageArray.length == 5) {
                            localStorageArray.shift(0);
                        };
                        localStorageArray.push(pastCity);
                        localStorage.setItem('countries', JSON.stringify(localStorageArray));
                        const button = document.createElement("button");
                        button.textContent = data[0];
                        button.setAttribute('class', 'search-card');
                        getLocalStorage()
                    });
            };
        });


};

const recallWikiLink = (country) => {
  const wikiUrl =
    "https://en.wikipedia.org//w/api.php?action=opensearch&search=" +
    country +
    "&limit=1&format=json&origin=*";
  fetch(wikiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data[3] + "recall");
        let wikiLink = document.createElement("a");
        let wikiDisplay = document.createElement("p");

        wikiLink.href = data[3];
        wikiLink.setAttribute("target", "blank");
        wikiDisplay.textContent = "Wikipedia Link";

        wikiDiv.appendChild(wikiLink);
        wikiLink.appendChild(wikiDisplay);
      });
    }
  });
};

const recallRestUrl = function (country) {
  let finalURL =
    "https://restcountries.com/v3.1/name/" + country + "?fullText=true";
  console.log(finalURL);
  fetch(finalURL);
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      let countryCapital = document.createElement("h4");
      let countryFlags = document.createElement("img"); //not working
      let countryContinent = document.createElement("h4");
      let countryPopulation = document.createElement("h4");
      let countryCurrency = document.createElement("h4");
      let countryLanguage = document.createElement("h4");

      countryCapital.textContent = "Capital: " + data[0].capital[0];
      countryFlags.src = data[0].flags.png;
      countryContinent.textContent = "Continent: " + data[0].continents[0];
      countryPopulation.textContent =
        "Population: " + JSON.stringify(data[0].population);
      countryCurrency.textContent =
        "Currencies: " + Object.keys(data[0].currencies)[0];
      countryLanguage.textContent =
        "Common Languages: " +
        Object.values(data[0].languages).toString().split(",").join(", ");

      resultDiv.appendChild(countryCapital);
      resultDiv.appendChild(countryFlags);
      resultDiv.appendChild(countryContinent);
      resultDiv.appendChild(countryPopulation);
      resultDiv.appendChild(countryCurrency);
      resultDiv.appendChild(countryLanguage);
    });
};

// --- Local Storage Section --- //


const getLocalStorage = function() {
    pastCard.innerHTML = "";
    for (i = 0; i < localStorageArray.length; i++) {
        const button = document.createElement("button");
                button.textContent = localStorageArray[i];
                button.setAttribute('class', 'search-card');
                pastCard.appendChild(button);
    };
};

// === Event Listener Section ====  //

searchBtn.addEventListener("click", submitRequest);
homeBtn.addEventListener("click", pageRefresh);

pastCard.addEventListener("click", function (event) {
  event.preventDefault();
  pastSearchRequest(event.target.textContent);
});

getLocalStorage();
