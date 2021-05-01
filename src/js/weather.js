var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {

    const { latitude: lat, longitude: lon } = pos.coords;

    const url = `/.netlify/functions/weatherapi?lat=${lat}&lon=${lon}&units=metric`;

    fetch(url).then((response) => {
        console.log("response", response);
        return response.json();
    }).then((data) => {
        const { name, main, weather } = data;
        document.querySelector('#city').textContent = name;
        document.querySelector('#temp').textContent = main.temp + "C";
        document.querySelector('#main').textContent = weather[0].main;
        document.querySelector('#desc').textContent = weather[0].description;
        console.log("data", data);
        document.querySelector('#weather').classList.remove("hidden");
    });

}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
}