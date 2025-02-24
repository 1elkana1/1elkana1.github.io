// Fetch texts from your ASP.NET Core API
fetch('https://htpbackend20250219-amhwabhahjfch9f6.israelcentral-01.azurewebsites.net/api/texts')
  .then(response => response.json())
  .then(data => {
      // Assume the API returns an array of texts with properties id and title
      window.texts = data;
      // Now you can call listAllTexts() to update the UI.
      listAllTexts();
  })
  .catch(err => console.error('Error loading texts:', err));
