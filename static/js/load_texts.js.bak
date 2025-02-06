// static/js/load_texts.js

window.texts = []; // Global variable to store loaded texts

// Fetch the manifest file which should be a JSON array of base filenames
fetch('./data/texts/manifest.json')
  .then(response => {
    if (!response.ok) throw new Error('Failed to fetch manifest.json');
    return response.json();
  })
  .then(manifest => {
    // For each filename in the manifest, load the corresponding JSON file
    const promises = manifest.map(baseFilename => {
      const jsonPath = `./data/texts/${baseFilename}.json?v=${new Date().getTime()}`;
      return fetch(jsonPath)
        .then(resp => {
          if (!resp.ok) throw new Error(`Failed to load ${jsonPath}`);
          return resp.json();
        });
    });
    return Promise.all(promises);
  })
  .then(allTexts => {
    window.texts = allTexts;
    console.log('Texts loaded:', window.texts);
  })
  .catch(error => console.error('Error loading texts:', error));
