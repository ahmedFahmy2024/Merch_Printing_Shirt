document.addEventListener('DOMContentLoaded', function() {
    // Front shirt line height
    const lineHeightSliderFront = document.getElementById('line-height-slider');
    const lineHeightInputFront = document.getElementById('line-height-input');
    let activeParagraphFront = document.querySelector('.first-shirt-text.active');

    // Back shirt line height
    const lineHeightSliderBack = document.getElementById('line-height-slider-back');
    const lineHeightInputBack = document.getElementById('line-height-input-back');
    let activeParagraphBack = document.querySelector('.first-shirt-text-back.active');

    // Function to set line height
    function setLineHeight(lineHeight, paragraph) {
        if (paragraph) {
            paragraph.style.lineHeight = lineHeight;
        }
    }

    // Initial line height for front
    setLineHeight(lineHeightSliderFront.value, activeParagraphFront);

    // Event listener for slider change on front
    lineHeightSliderFront.addEventListener('input', function() {
        const lineHeight = lineHeightSliderFront.value;
        setLineHeight(lineHeight, activeParagraphFront);
        lineHeightInputFront.value = lineHeight;
    });

    // Event listener for input change on front
    lineHeightInputFront.addEventListener('input', function() {
        const lineHeight = lineHeightInputFront.value;
        setLineHeight(lineHeight, activeParagraphFront);
        lineHeightSliderFront.value = lineHeight;
    });

    // Event listener for paragraph selection on front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphFront = this;
            const currentLineHeight = parseFloat(window.getComputedStyle(activeParagraphFront).lineHeight) || 1.5;
            lineHeightSliderFront.value = currentLineHeight;
            lineHeightInputFront.value = currentLineHeight;
        });
    });

    // Function to add line height functionality to new paragraphs on front
    function addLineHeightFunctionalityFront(paragraph) {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphFront = this;
            const currentLineHeight = parseFloat(window.getComputedStyle(activeParagraphFront).lineHeight) || 1.5;
            lineHeightSliderFront.value = currentLineHeight;
            lineHeightInputFront.value = currentLineHeight;
        });
    }

    // Export the function to be used in crud.js for front
    window.addLineHeightFunctionalityFront = addLineHeightFunctionalityFront;

    // Initialize existing paragraphs on front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        addLineHeightFunctionalityFront(paragraph);
    });

    // Back shirt functionality (similar logic as above for back)
    function setLineHeightBack(lineHeight, paragraph) {
        if (paragraph) {
            paragraph.style.lineHeight = lineHeight;
        }
    }

    setLineHeightBack(lineHeightSliderBack.value, activeParagraphBack);

    lineHeightSliderBack.addEventListener('input', function() {
        const lineHeight = lineHeightSliderBack.value;
        setLineHeightBack(lineHeight, activeParagraphBack);
        lineHeightInputBack.value = lineHeight;
    });

    lineHeightInputBack.addEventListener('input', function() {
        const lineHeight = lineHeightInputBack.value;
        setLineHeightBack(lineHeight, activeParagraphBack);
        lineHeightSliderBack.value = lineHeight;
    });

    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text-back').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphBack = this;
            const currentLineHeight = parseFloat(window.getComputedStyle(activeParagraphBack).lineHeight) || 1.5;
            lineHeightSliderBack.value = currentLineHeight;
            lineHeightInputBack.value = currentLineHeight;
        });
    });

    function addLineHeightFunctionalityBack(paragraph) {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text-back').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphBack = this;
            const currentLineHeight = parseFloat(window.getComputedStyle(activeParagraphBack).lineHeight) || 1.5;
            lineHeightSliderBack.value = currentLineHeight;
            lineHeightInputBack.value = currentLineHeight;
        });
    }

    window.addLineHeightFunctionalityBack = addLineHeightFunctionalityBack;

    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        addLineHeightFunctionalityBack(paragraph);
    });
});

// Add this function in lineheight.js
function setLineHeightFromParagraph(paragraph, isBack = false) {
    const lineHeightSlider = isBack ? document.getElementById('line-height-slider-back') : document.getElementById('line-height-slider');
    const lineHeightInput = isBack ? document.getElementById('line-height-input-back') : document.getElementById('line-height-input');
    const currentLineHeight = parseFloat(window.getComputedStyle(paragraph).lineHeight) || 1.5;
    lineHeightSlider.value = currentLineHeight;
    lineHeightInput.value = currentLineHeight;
}

