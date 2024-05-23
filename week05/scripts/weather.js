const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#current-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid={b92da245303a816497b90a4eeb90ddf5}&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only. display results data. uncomment when checked.
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.____} &deg; F`;
    const iconsrc = `https://openweathermap.org/img/w/${________}._____`;
    let desc = data.weather[0].____;
    weatherIcon.setAttribute('__', ____);
    weatherIcon.setAttribute('__', ____);
    captionDesc.textContent = `${desc}`;
}
