# Ancient Text Index

This project is an interactive web platform designed to index and explore ancient texts. The goal is to allow users to search for mentions of places, figures, and groups in a range of historical works, creating a dynamic timeline and cross-referenced index of significant entities.

## Current Focus

- **Primary Text Base:**  
  The first text collection being indexed is the Jewish Bible (Tanakh). This serves as a starting point for exploring ancient texts with rich historical and cultural significance. The project can later be expanded or complemented with additional ancient texts (e.g., Sumerian literature, other ancient Near Eastern texts).

- **Planned Features:**  
  - Full-text search with normalization for accents and diacritics.
  - Dynamic hyperlinking of indexed items to allow exploration of related content.
  - Dual timelines based on the date of occurrence and the date of writing.
  - Map of the indexed place with hyperlinking.
  - Separate indexes for **places**, **figures**, and **groups**.
  
## Project Structure

- **index.html:**  
  The main entry point, which loads the texts and enables the search functionality.

- **static/js:**  
  - `load_texts.js` – Loads JSON files containing the texts (including full text content).
  - `search.js` – Implements the search functionality.

- **data/texts:**  
  Contains JSON files for each text along with a `manifest.json` file listing the text filenames.

- **Other Files:**  
  Additional configuration or data files (e.g., for figures, places, and groups) are placed in the `data/` directory.

## Usage

1. **Local Testing:**  
   Run a local HTTP server (e.g., using `python -m http.server` or VS Code's Live Server extension) to test the project. Access the site at [http://localhost:8000](http://localhost:8000).

2. **Search Functionality:**  
   Enter a keyword (e.g., a place, figure, or group from the Bible) into the search box and press "Enter" or click the search button to view results.

3. **Extensibility:**  
   The project is built with modularity in mind. As more texts are indexed, simply update the `manifest.json` and add new JSON files (with their corresponding content) into the `data/texts/` folder.

## License & Credits

- The Bible texts (Jewish Bible/Tanakh) used in this project are for non-commercial, academic exploration and personal study. Please ensure you comply with any applicable copyright or usage restrictions.
- Other texts and datasets will include proper citations and licensing information as they are integrated.

---

Happy exploring!
