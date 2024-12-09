"use strict";
const form = document.querySelector('.form-container');
const firstName = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const hours = document.querySelector('#hours');
const major = document.querySelector('#major');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(firstName.value, lastname.value, hours.valueAsNumber, major.options[major.selectedIndex].text);
    addParagraph(`الاسم: ${firstName.value} ${lastname.value},
         عدد الساعات: ${hours.valueAsNumber},
          التخصص: ${major.options[major.selectedIndex].text}`);
});
function addParagraph(text) {
    // Create a new paragraph element
    const paragraph = document.createElement('h1');
    // Set the text content of the paragraph
    paragraph.textContent = text;
    // Append the paragraph to the body of the document
    document.body.appendChild(paragraph);
}
