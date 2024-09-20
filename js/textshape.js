document.addEventListener('DOMContentLoaded', function() {
    const letterSpacingSlider = document.getElementById('letter-spacing-slider');
    const letterSpacingInput = document.getElementById('letter-spacing-input');
    let activeParagraph = document.querySelector('.first-shirt-text.active'); // Updated to handle active paragraph

    // Function to set letter spacing
    function setLetterSpacing(letterSpacing, paragraph) {
        if (paragraph) {
            paragraph.style.letterSpacing = letterSpacing + 'px';
        }
    }

    // Initial letter spacing for active paragraph
    setLetterSpacing(letterSpacingSlider.value, activeParagraph);

    // Event listener for letter spacing slider change
    letterSpacingSlider.addEventListener('input', function() {
        const letterSpacing = letterSpacingSlider.value;
        setLetterSpacing(letterSpacing, activeParagraph);
        letterSpacingInput.value = letterSpacing;
    });

    // Event listener for letter spacing input change
    letterSpacingInput.addEventListener('input', function() {
        const letterSpacing = letterSpacingInput.value;
        setLetterSpacing(letterSpacing, activeParagraph);
        letterSpacingSlider.value = letterSpacing;
    });

    // Event listener for paragraph selection on front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraph = this;
            const currentLetterSpacing = parseFloat(window.getComputedStyle(activeParagraph).letterSpacing.replace('px', '')) || 0;
            letterSpacingSlider.value = currentLetterSpacing;
            letterSpacingInput.value = currentLetterSpacing;
        });
    });

    // Function to add letter spacing functionality to new paragraphs on front
    function addLetterSpacingFunctionalityFront(paragraph) {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraph = this;
            const currentLetterSpacing = parseFloat(window.getComputedStyle(activeParagraph).letterSpacing.replace('px', '')) || 0;
            letterSpacingSlider.value = currentLetterSpacing;
            letterSpacingInput.value = currentLetterSpacing;
        });
    }

    // Export the function to be used in crud.js for front
    window.addLetterSpacingFunctionalityFront = addLetterSpacingFunctionalityFront;

    // Initialize existing paragraphs on front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        addLetterSpacingFunctionalityFront(paragraph);
    });

    // Similar functionality for back shirt (adjust selectors and classes accordingly)
    const letterSpacingSliderBack = document.getElementById('letter-spacing-slider-back');
    const letterSpacingInputBack = document.getElementById('letter-spacing-input-back');
    let activeParagraphBack = document.querySelector('.first-shirt-text-back.active'); // Updated to handle active paragraph on back

    // Initial letter spacing for active paragraph on back
    setLetterSpacing(letterSpacingSliderBack.value, activeParagraphBack);

    // Event listener for letter spacing slider change on back
    letterSpacingSliderBack.addEventListener('input', function() {
        const letterSpacingBack = letterSpacingSliderBack.value;
        setLetterSpacing(letterSpacingBack, activeParagraphBack);
        letterSpacingInputBack.value = letterSpacingBack;
    });

    // Event listener for letter spacing input change on back
    letterSpacingInputBack.addEventListener('input', function() {
        const letterSpacingBack = letterSpacingInputBack.value;
        setLetterSpacing(letterSpacingBack, activeParagraphBack);
        letterSpacingSliderBack.value = letterSpacingBack;
    });

    // Event listener for paragraph selection on back
    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text-back').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphBack = this;
            const currentLetterSpacingBack = parseFloat(window.getComputedStyle(activeParagraphBack).letterSpacing.replace('px', '')) || 0;
            letterSpacingSliderBack.value = currentLetterSpacingBack;
            letterSpacingInputBack.value = currentLetterSpacingBack;
        });
    });

    // Function to add letter spacing functionality to new paragraphs on back
    function addLetterSpacingFunctionalityBack(paragraph) {
        paragraph.addEventListener('click', function() {
            document.querySelectorAll('.first-shirt-text-back').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            activeParagraphBack = this;
            const currentLetterSpacingBack = parseFloat(window.getComputedStyle(activeParagraphBack).letterSpacing.replace('px', '')) || 0;
            letterSpacingSliderBack.value = currentLetterSpacingBack;
            letterSpacingInputBack.value = currentLetterSpacingBack;
        });
    }

    // Export the function to be used in crud.js for back
    window.addLetterSpacingFunctionalityBack = addLetterSpacingFunctionalityBack;

    // Initialize existing paragraphs on back
    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        addLetterSpacingFunctionalityBack(paragraph);
    });
});
