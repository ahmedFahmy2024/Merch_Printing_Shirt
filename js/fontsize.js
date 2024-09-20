// fontsize.js

document.addEventListener('DOMContentLoaded', function() {
    // Front shirt font size
    const fontSizeSlider = document.getElementById('font-size-slider');
    const fontSizeInput = document.getElementById('font-size-input');
    let activeParagraphFront = document.querySelector('.first-shirt-text.active');

    // Back shirt font size
    const fontSizeSliderBack = document.getElementById('font-size-slider-back');
    const fontSizeInputBack = document.getElementById('font-size-input-back');
    let activeParagraphBack = document.querySelector('.first-shirt-text-back.active');

    // Function to set font size
    function setFontSize(fontSize, paragraph, isBack = false) {
        if (paragraph) {
            paragraph.style.fontSize = fontSize + 'px';
        }
    }

    // Initial font size for front
    setFontSize(fontSizeSlider.value, activeParagraphFront);

    // Event listener for slider change on front
    fontSizeSlider.addEventListener('input', function() {
        const fontSize = fontSizeSlider.value;
        setFontSize(fontSize, activeParagraphFront);
        fontSizeInput.value = fontSize;
    });

    // Event listener for input change on front
    fontSizeInput.addEventListener('input', function() {
        const fontSize = fontSizeInput.value;
        setFontSize(fontSize, activeParagraphFront);
        fontSizeSlider.value = fontSize;
    });

    // Event listener for paragraph selection on front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphFront = this;
            const currentFontSize = parseInt(window.getComputedStyle(activeParagraphFront).fontSize.replace('px', '')) || 16;
            fontSizeSlider.value = currentFontSize;
            fontSizeInput.value = currentFontSize;
        });
    });

    // Function to add font size functionality to new paragraphs on front
    function addFontSizeFunctionalityFront(paragraph) {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphFront = this;
            const currentFontSize = parseInt(window.getComputedStyle(activeParagraphFront).fontSize.replace('px', '')) || 16;
            fontSizeSlider.value = currentFontSize;
            fontSizeInput.value = currentFontSize;
        });
    }

    // Export the function to be used in crud.js for front
    window.addFontSizeFunctionalityFront = addFontSizeFunctionalityFront;

    // Initialize existing paragraphs on front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        addFontSizeFunctionalityFront(paragraph);
    });

    // Back shirt functionality (similar logic as above for back)
    function setFontSizeBack(fontSize, paragraph) {
        if (paragraph) {
            paragraph.style.fontSize = fontSize + 'px';
        }
    }

    setFontSizeBack(fontSizeSliderBack.value, activeParagraphBack);

    fontSizeSliderBack.addEventListener('input', function() {
        const fontSize = fontSizeSliderBack.value;
        setFontSizeBack(fontSize, activeParagraphBack);
        fontSizeInputBack.value = fontSize;
    });

    fontSizeInputBack.addEventListener('input', function() {
        const fontSize = fontSizeInputBack.value;
        setFontSizeBack(fontSize, activeParagraphBack);
        fontSizeSliderBack.value = fontSize;
    });

    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text-back').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphBack = this;
            const currentFontSize = parseInt(window.getComputedStyle(activeParagraphBack).fontSize.replace('px', '')) || 16;
            fontSizeSliderBack.value = currentFontSize;
            fontSizeInputBack.value = currentFontSize;
        });
    });

    function addFontSizeFunctionalityBack(paragraph) {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text-back').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphBack = this;
            const currentFontSize = parseInt(window.getComputedStyle(activeParagraphBack).fontSize.replace('px', '')) || 16;
            fontSizeSliderBack.value = currentFontSize;
            fontSizeInputBack.value = currentFontSize;
        });
    }

    window.addFontSizeFunctionalityBack = addFontSizeFunctionalityBack;

    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        addFontSizeFunctionalityBack(paragraph);
    });

});

function setFontSizeFromParagraph(paragraph, isBack = false) {
    const fontSizeSlider = isBack ? document.getElementById('font-size-slider-back') : document.getElementById('font-size-slider');
    const fontSizeInput = isBack ? document.getElementById('font-size-input-back') : document.getElementById('font-size-input');
    const currentFontSize = parseInt(window.getComputedStyle(paragraph).fontSize.replace('px', '')) || 16;
    fontSizeSlider.value = currentFontSize;
    fontSizeInput.value = currentFontSize;
}
