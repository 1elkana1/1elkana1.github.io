// Function to perform search on loaded texts
function search() {
    const input = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    console.log('Current texts:', window.texts);

    if (!input) {
        resultsDiv.innerHTML = '<p>Please enter a keyword to search.</p>';
        return;
    }

    const normalizedInput = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // Filter texts that contain the normalized input in their content
    const results = window.texts.filter(text => {
        if (!text.content) {
            console.warn('Text missing content:', text);
            return false;
        }
        return text.content.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(normalizedInput);
    });

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No matches found.</p>';
    } else {
        results.forEach(result => {
            const div = document.createElement('div');
            div.classList.add('result-item');
            div.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.content.substring(0, 150)}...</p>
            `;
            resultsDiv.appendChild(div);
        });
    }
}

// Optionally, if you want to bind the search function to the input's keypress event from here,
// you can add an event listener:
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            search();
        }
    });
});