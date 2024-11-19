
const form = document.querySelector('.form-container') as HTMLFormElement
const firstName = document.querySelector('#firstname') as HTMLInputElement
const lastname = document.querySelector('#lastname') as HTMLInputElement
const hours = document.querySelector('#hours') as HTMLInputElement
const major = document.querySelector('#major') as HTMLSelectElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        firstName.value,
        lastname.value,
        hours.valueAsNumber,
        major.options[major.selectedIndex].text
    )

    addParagraph(`الاسم: ${firstName.value} ${lastname.value},
         عدد الساعات: ${hours.valueAsNumber},
          التخصص: ${major.options[major.selectedIndex].text}`);
})

function addParagraph(text: string) {
    // Create a new paragraph element
    const paragraph = document.createElement('h1');

    // Set the text content of the paragraph
    paragraph.textContent = text;

    // Append the paragraph to the body of the document
    document.body.appendChild(paragraph);
}

