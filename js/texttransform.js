document.addEventListener('DOMContentLoaded', function() {
    const textTransformButtons = document.getElementsByName('text-transform');

    // Function to set text transform
    function setTextTransform(transformValue, paragraph) {
        if (paragraph) {
            switch (transformValue) {
                case 'uppercase':
                    paragraph.style.textTransform = 'uppercase';
                    break;
                case 'lowercase':
                    paragraph.style.textTransform = 'lowercase';
                    break;
                case 'capitalize':
                    paragraph.style.textTransform = 'capitalize';
                    break;
                case 'none':
                    paragraph.style.textTransform = 'none';
                    break;
                default:
                    paragraph.style.textTransform = 'none';
                    break;
            }
        }
    }

    // Event listener for text transform buttons
    textTransformButtons.forEach(button => {
        button.addEventListener('change', function() {
            if (this.checked) {
                const activeParagraph = document.querySelector('.first-shirt-text.active, .first-shirt-text-back.active');
                setTextTransform(this.value, activeParagraph);
            }
        });
    });

    // Event listener for paragraph selection
    document.querySelectorAll('.first-shirt-text, .first-shirt-text-back').forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            // Remove active class from all paragraphs
            document.querySelectorAll('.first-shirt-text, .first-shirt-text-back').forEach(p => p.classList.remove('active'));
            // Add active class to the clicked paragraph
            this.classList.add('active');
            // Update text transform buttons based on active paragraph's style
            updateTextTransformButtons();
        });
    });

    // Function to update text transform buttons based on active paragraph's style
    function updateTextTransformButtons() {
        const activeParagraph = document.querySelector('.first-shirt-text.active, .first-shirt-text-back.active');
        if (activeParagraph) {
            const currentTransform = window.getComputedStyle(activeParagraph).textTransform;
            textTransformButtons.forEach(button => {
                button.checked = button.value === currentTransform;
            });
        }
    }

    // Export functions for use in crud.js
    window.setTextTransform = setTextTransform;
    window.updateTextTransformButtons = updateTextTransformButtons;
});
