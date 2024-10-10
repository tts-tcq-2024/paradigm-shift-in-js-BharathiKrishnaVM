const { checkTemperature, checkSoc, checkChargeRate } = require('./batteryChecker');

function batteryIsOk(temperature, soc, chargeRate) {
    return checkTemperature(temperature) && checkSoc(soc) && checkChargeRate(chargeRate);
}

module.exports = batteryIsOk;
