function makeClass() {
   "use strict ";
  /* Alter code below this line */
  class Thermostat {
    constructor (temperature) {
      this._temperature = temperature;
    }
    //getter
    get tempInFr() {
      return this._temperature;
    }
    set tempInC(newTemp) {
      this._temperature = 5/9 * (newTemp - 32);
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C