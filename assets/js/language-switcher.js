// Grab the details element that will be the language select
const langSelect = document.querySelector("[data-language-select]");

// Grab all the alternate translations as an array
const translations = [...document.querySelectorAll("head [hreflang]")];

// Check if both select and translations exist
if (langSelect && translations.length) {
  // Build a list of anchors from the translations
  const links = translations
    .map(link => {
      return `
      <li>
        <a href="${link.href}" hreflang="${link.hreflang}">${link.hreflang}</a>
      </li>
    `;
    })
    .join("");

  // Insert a summary showing the current language
  // and insert the links into a unordered list

  langSelect.innerHTML = `
    <button type="button" aria-expanded="false">Language: ${document.documentElement.lang === "" ? "en" : document.documentElement.lang}</button>
    <ul>${links}</ul>
  `;
}

// Construct state for toggle
let state = {
	buttonExpanded: 'false'
}

// Grab language button
const button = document.querySelector("[data-language-select] button");

// Listen to language button
button.addEventListener('click', () => {
	
	// Grab the aria-expanded attribute value
	let currentExpandedState = button.getAttribute('aria-expanded');
    
	// Set state if it hasn't been done before
	if(currentExpandedState === null) {
		currentExpandedState = 'true';
	}
  
	// The toggle state depending on the current state
	state.buttonExpanded = currentExpandedState === 'true' ? 'false' : 'true'
  
	// Set the aria-expanded attribute value
	button.setAttribute('aria-expanded', state.buttonExpanded);
});