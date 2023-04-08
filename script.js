const carbonForm = document.getElementById("carbon-form");
const calculateButton = document.getElementById("calculate");
const carbonOutput = document.getElementById("carbon-output");

carbonForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const electricity = document.getElementById("electricity").value;
  const naturalGas = document.getElementById("natural-gas").value;
  const vehicleMiles = document.getElementById("vehicle-miles").value;
  const publicTransportMiles = document.getElementById("public-transport-miles").value;
  const flights = document.getElementById("flights").value;
  
  const carbonFootprint = (electricity * 0.7) + (naturalGas * 12) + (vehicleMiles * 0.314) + (publicTransportMiles * 0.0895) + (flights * 0.2);
  
  carbonOutput.innerText = `Your carbon footprint is ${carbonFootprint.toFixed(2)} metric tons of CO2 equivalent per year.`;
});
