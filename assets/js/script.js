//---GLOBE JAVASCRIPT ---//


mapboxgl.accessToken = 'pk.eyJ1IjoicGVhY2h5c25pY2tlciIsImEiOiJjbGRrZjBqbnIwOWs0M29xa3VvZGI2dXA2In0.qfH4zvQWMbN6kEIC3d-xhA';
const map = new mapboxgl.Map({
    container: 'map', // Container ID
    style: 'mapbox://styles/mapbox/dark-v10', // Map style to use
    projection: 'globe',
    zoom: 2, // Starting zoom level
    center: [-90, 40]
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

//--- END of GLOBE JAVASCRIPT ---//

