
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

function calculateWindchill(temp, wind) {
    return (
        35.74 +
        (0.6215 * temp) -
        (35.75 * Math.pow(wind, 0.16)) +
        (0.4275 * temp * Math.pow(wind, 0.16))
    ).toFixed(1);
}

let result;

if (temperature <= 50 && windSpeed > 3) {
    result = calculateWindchill(temperature, windSpeed);
} else {
    result = "N/A";
}

document.getElementById("chill").textContent = result;
 