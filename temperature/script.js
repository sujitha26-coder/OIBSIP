function convertTemp() {
  const value = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unitInput').value;
  const resultDiv = document.getElementById('result');

  // Validation: numeric input
  if (isNaN(value)) {
    resultDiv.innerHTML = "❌ Please enter a numeric value.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === "C") {
    celsius = value;
    fahrenheit = (value * 9/5) + 32;
    kelvin = value + 273.15;
  } else if (unit === "F") {
    celsius = (value - 32) * 5/9;
    fahrenheit = value;
    kelvin = celsius + 273.15;
  } else if (unit === "K") {
    kelvin = value;
    celsius = value - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
  }

  // Edge case: absolute zero violation
  if (celsius < -273.15) {
    resultDiv.innerHTML = "⚠️ Value below absolute zero!";
    return;
  }

  // Display results
  resultDiv.innerHTML = `
    🌡️ Celsius: ${celsius.toFixed(2)} °C <br>
    🌡️ Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>
    🌡️ Kelvin: ${kelvin.toFixed(2)} K
  `;
}
