class DataLoader {
    constructor(jsonURL) {
      this.jsonURL = jsonURL;
    }
  
    async loadData() {
      const response = await fetch(this.jsonURL);
      return response.json();
    }
  }
  