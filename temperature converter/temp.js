document.getElementById("tempForm").addEventListener("submit", function(event) {
    event.preventDefault();
    convertTemperature();
});

function convertTemperature() {
    let tempInput = parseFloat(document.getElementById("tempInput").value);
    let tempUnit = document.getElementById("tempUnit").value;
    let result;

    if (tempUnit === "celsius") {
        result = (tempInput * 9/5) + 32;
        result = result.toFixed(2) + " °F";
    } else {
        result = (tempInput - 32) * 5/9;
        result = result.toFixed(2) + " °C";
    }

    document.getElementById("result").innerText = "Converted temperature: " + result;
}
