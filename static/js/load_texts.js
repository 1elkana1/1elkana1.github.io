function listAllTexts() {
	const textListDiv = document.getElementById('textList');
	if (!window.texts || window.texts.length === 0) {
		textListDiv.innerHTML = '<p>Loading texts...</p>';
		return;
	}
	let listHTML = '<ul>';
	window.texts.forEach(text => {
		// Link to text.html with a query parameter for the text's id
		listHTML += `<li><a href="text.html?id=${encodeURIComponent(text.id)}">${text.title}</a></li>`;
	});
	listHTML += '</ul>';
	textListDiv.innerHTML = listHTML;
}

// Fetch texts from your ASP.NET Core API
fetch('https://htpbackend20250219-amhwabhahjfch9f6.israelcentral-01.azurewebsites.net/api/texts/summary')
	.then(response => response.json())
	.then(data => {
			// Assume the API returns an array of texts with properties id and title
			window.texts = data;
			// Now you can call listAllTexts() to update the UI.
			listAllTexts();
	})
	.catch(err => console.error('Error loading texts:', err));
