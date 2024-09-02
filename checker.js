// Pure function to check temperature
function isTemperatureOk(temperature) {
    return temperature >= 0 && temperature <= 45;
}

// Pure function to check state of charge
function isSocOk(soc) {
    return soc >= 20 && soc <= 80;
}

// Pure function to check charge rate
function isChargeRateOk(chargeRate) {
    return chargeRate <= 0.8;
}

// Pure function to check if the battery is okay
function batteryIsOk(temperature, soc, chargeRate) {
    return isTemperatureOk(temperature) && isSocOk(soc) && isChargeRateOk(chargeRate);
}

function expectTrue(expression) {
    return expression ? "Passed" : "Expected true, but got false";
}

function expectFalse(expression) {
    return expression ? "Expected false, but got true" : "Passed";
}

function main() {
    console.log(expectTrue(batteryIsOk(25, 70, 0.7))); // Expected "Passed"
    console.log(expectFalse(batteryIsOk(50, 85, 0.0))); // Expected "Expected false, but got true"
}

main();
