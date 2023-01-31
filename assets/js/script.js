
//---GLOBE JAVASCRIPT ---//


mapboxgl.accessToken = 'pk.eyJ1IjoicGVhY2h5c25pY2tlciIsImEiOiJjbGRrZjBqbnIwOWs0M29xa3VvZGI2dXA2In0.qfH4zvQWMbN6kEIC3d-xhA';
const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/dark-v10', // Map style to use
    projection: 'globe',
    zoom: 1, // Starting zoom level
    center: [-90, 40]
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

//---New marker on search input - geocoder ---//

const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    //can I get a html element to input
    marker: false, // Do not use the default marker style
    placeholder: 'Search', // Placeholder text for the search bar
});

// Add the geocoder to the map
map.addControl(geocoder);

// Listen for the `result` event from the Geocoder // `result` event is triggered when a user makes a selection
//Add a marker at the result's coordinates
geocoder.on('result', (event) => {
    map.getSource('single-point').setData(event.result.geometry);
});


//--- END of GLOBE JAVASCRIPT ---//