document.addEventListener('DOMContentLoaded', function() {
    const textBold = document.getElementById('text-bold');
    const textItalic = document.getElementById('text-italic');
    const textUnderline = document.getElementById('text-underline');
    let activeParagraph = null;

    function setTextStyle(styleProperty, value, paragraph) {
        if (paragraph) {
            paragraph.style[styleProperty] = value;
        }
    }

    textBold.addEventListener('change', function() {
        setTextStyle('fontWeight', this.checked ? 'bold' : 'normal', activeParagraph);
    });

    textItalic.addEventListener('change', function() {
        setTextStyle('fontStyle', this.checked ? 'italic' : 'normal', activeParagraph);
    });

    textUnderline.addEventListener('change', function() {
        setTextStyle('textDecoration', this.checked ? 'underline' : 'none', activeParagraph);
    });

    function addTextShapeFunctionality(paragraph) {
        paragraph.addEventListener('click', function() {
            // Remove active class from all paragraphs
            document.querySelectorAll('.first-shirt-text').forEach(p => p.classList.remove('active'));
            // Add active class to the clicked paragraph
            this.classList.add('active');
            // Update active paragraph
            activeParagraph = this;
            // Update text styling based on active paragraph
            textBold.checked = window.getComputedStyle(activeParagraph).fontWeight === 'bold';
            textItalic.checked = window.getComputedStyle(activeParagraph).fontStyle === 'italic';
            textUnderline.checked = window.getComputedStyle(activeParagraph).textDecoration.includes('underline');
        });
    }

    // Export the function to be used in update.js
    window.addTextShapeFunctionalityFront = addTextShapeFunctionality;

    // Initialize existing paragraphs on front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        addTextShapeFunctionality(paragraph);
    });

    // Handle newly added paragraphs on front
    window.addEventListener('paragraphAddedFront', function(event) {
        const newParagraph = event.detail.newParagraph;
        addTextShapeFunctionality(newParagraph);
    });
});
