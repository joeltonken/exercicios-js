class FlagDisplay {
    constructor(container, dataProcessor) {
      this.container = container;
      this.dataProcessor = dataProcessor;
    }
  
    displayFlags() {
      for (const country in this.dataProcessor.data) {
        const flagCode = country.toLowerCase();
        const flagUrl = `https://raw.githubusercontent.com/hampusborgos/country-flags/main/png250px/${flagCode}.png`;
  
        const flagElement = document.createElement('img');
        flagElement.classList.add('flag-image');
        flagElement.src = flagUrl;
        flagElement.alt = this.dataProcessor.getCountryName(country);
  
        const countryNameElement = document.createElement('p');
        countryNameElement.textContent = this.dataProcessor.getCountryName(country);
  
        const flagContainerDiv = document.createElement('div');
        flagContainerDiv.classList.add('flag-item');
        flagContainerDiv.appendChild(flagElement);
        flagContainerDiv.appendChild(countryNameElement);
  
        this.container.appendChild(flagContainerDiv);
      }
    }
  }  