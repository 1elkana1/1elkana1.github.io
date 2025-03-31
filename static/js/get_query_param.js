// Function to get query parameters from the URL
function getQueryParam(param) {
	const params = new URLSearchParams(window.location.search);
	return params.get(param);
}

const textTitle = getQueryParam('title');

// Fetch a single text by ID from your API:
fetch(`https://htpbackend20250219-amhwabhahjfch9f6.israelcentral-01.azurewebsites.net/api/texts/${encodeURIComponent(textTitle)}`)
	.then(response => {
		if (!response.ok) {
			throw new Error('Text not found');
		}
		return response.json();
	})
	.then(textObj => {
		const container = document.getElementById('textContainer');
		container.innerHTML = `<h1>${textObj.title}</h1>
			<div>${textObj.content}</div>
			<p><em>${textObj.copyright || ''}</em></p>`;
	})
	.catch(err => {
		console.error(err);
		document.getElementById('textContainer').innerHTML = `<p>Text not found.</p>`;
	});
