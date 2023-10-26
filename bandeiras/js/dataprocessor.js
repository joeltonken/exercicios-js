class DataProcessor {
    constructor(data, countryNames) {
      this.data = data;
      this.countryNames = countryNames;
    }
  
    getCountryName(country) {
      return this.countryNames[country] || country;
    }
  }
  