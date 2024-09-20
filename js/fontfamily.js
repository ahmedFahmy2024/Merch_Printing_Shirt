// fontfamily.js

document.addEventListener('DOMContentLoaded', function() {
    const fontArray = [
        "blkchcry",
        "Birds of Paradise",
        "ObelixPro-cyr",
        "creepsville",
        "athletic",
        "Inkfree",
        "adrip",
        "waltograph",
        "ComicSans",
        "OldeEnglish",
        "AVENGEANCE",
        "BacktoBlack",
        "Albertson",
        "Freshman",
        "Autumn",
        "impact",
        "BrannbollFS_PERSONAL",
        "hemi",
        "showg",
        "arial"
    ];

    const fontSelect = document.getElementById('font-select');
    const fontSelectBack = document.getElementById('font-select-back');

    // Populate select options
    fontArray.forEach((font, index) => {
        const optionFront = document.createElement('option');
        optionFront.textContent = font;
        optionFront.style.fontFamily = font;
        fontSelect.appendChild(optionFront);

        const optionBack = document.createElement('option');
        optionBack.textContent = font;
        optionBack.style.fontFamily = font;
        fontSelectBack.appendChild(optionBack);
    });

    // Event listener for front select change
    fontSelect.addEventListener('change', function() {
        const selectedFont = this.value;
        setFont(selectedFont, 'front');
    });

    // Event listener for back select change
    fontSelectBack.addEventListener('change', function() {
        const selectedFont = this.value;
        setFont(selectedFont, 'back');
    });

    // Set initial font for both
    const initialFontFront = fontSelect.value;
    setFont(initialFontFront, 'front');
    const initialFontBack = fontSelectBack.value;
    setFont(initialFontBack, 'back');
});


// Function to set font
function setFont(font, shirtPart) {
    let paragraphElements;
    if (shirtPart === 'front') {
        paragraphElements = document.querySelectorAll('.first-shirt-text');
    } else if (shirtPart === 'back') {
        paragraphElements = document.querySelectorAll('.first-shirt-text-back');
    }

    paragraphElements.forEach(paragraph => {
        paragraph.style.fontFamily = font;
    });
}
