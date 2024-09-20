document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize paragraph functionality
    function initializeParagraph(paragraph, isBack = false) {
        paragraph.addEventListener('click', function() {
            const paragraphClass = isBack ? '.first-shirt-text-back' : '.first-shirt-text';
            document.querySelectorAll(paragraphClass).forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            // Update active paragraph globally
            activeParagraph = this;
            // Update text styling based on active paragraph
            const textBold = isBack ? document.getElementById('text-bold-back') : document.getElementById('text-bold');
            const textItalic = isBack ? document.getElementById('text-italic-back') : document.getElementById('text-italic');
            const textUnderline = isBack ? document.getElementById('text-underline-back') : document.getElementById('text-underline');
            textBold.checked = window.getComputedStyle(activeParagraph).fontWeight === 'bold';
            textItalic.checked = window.getComputedStyle(activeParagraph).fontStyle === 'italic';
            textUnderline.checked = window.getComputedStyle(activeParagraph).textDecoration.includes('underline');
            setRotationFromParagraph(this, isBack);
            setOutlineColorFromParagraph(this);
            setLetterSpacingFromParagraph(this, isBack); 
            setFontSizeFromParagraph(this, isBack);
            setLineHeightFromParagraph(this, isBack); // Add line height initialization
        });

        // Initialize rotation functionality
        if (typeof window.addRotationFunctionality === 'function') {
            window.addRotationFunctionality(paragraph, isBack);
        } else {
            console.error('addRotationFunctionality function is not available');
        }

        // Initialize outline color functionality
        if (typeof window.addOutlineColorFunctionality === 'function') {
            window.addOutlineColorFunctionality(paragraph, isBack);
        } else {
            console.error('addOutlineColorFunctionality function is not available');
        }

        // Initialize letter spacing functionality
        if (isBack) {
            if (typeof window.addLetterSpacingFunctionalityBack === 'function') {
                window.addLetterSpacingFunctionalityBack(paragraph);
            } else {
                console.error('addLetterSpacingFunctionalityBack function is not available');
            }
        } else {
            if (typeof window.addLetterSpacingFunctionalityFront === 'function') {
                window.addLetterSpacingFunctionalityFront(paragraph);
            } else {
                console.error('addLetterSpacingFunctionalityFront function is not available');
            }
        }

        // Initialize font size functionality
        if (isBack) {
            if (typeof window.addFontSizeFunctionalityBack === 'function') {
                window.addFontSizeFunctionalityBack(paragraph);
            } else {
                console.error('addFontSizeFunctionalityBack function is not available');
            }
        } else {
            if (typeof window.addFontSizeFunctionalityFront === 'function') {
                window.addFontSizeFunctionalityFront(paragraph);
            } else {
                console.error('addFontSizeFunctionalityFront function is not available');
            }
        }

        // Initialize line height functionality
        if (isBack) {
            if (typeof window.addLineHeightFunctionalityBack === 'function') {
                window.addLineHeightFunctionalityBack(paragraph);
            } else {
                console.error('addLineHeightFunctionalityBack function is not available');
            }
        } else {
            if (typeof window.addLineHeightFunctionalityFront === 'function') {
                window.addLineHeightFunctionalityFront(paragraph);
            } else {
                console.error('addLineHeightFunctionalityFront function is not available');
            }
        }

         // Optionally dispatch custom event for newly added paragraph
         const eventName = isBack ? 'paragraphAddedBack' : 'paragraphAddedFront';
         window.dispatchEvent(new CustomEvent(eventName, { detail: { newParagraph: paragraph } }));
    }

    // Initialize existing paragraphs on front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        initializeParagraph(paragraph);
    });

    // Initialize existing paragraphs on back
    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        initializeParagraph(paragraph, true);
    });

    // Add new paragraph functionality for front
    const addNewTextButton = document.getElementById('add-new-text');
    const newParagraphContainer = document.getElementById('new-paragraph-container');
    let paragraphCount = 1;

    addNewTextButton.addEventListener('click', function() {
        const newParagraph = document.createElement('div');
        newParagraph.classList.add('first-img-text', 'draggable');
        const newParagraphId = `paragraph${++paragraphCount}`;
        newParagraph.innerHTML = `<p class="first-shirt-text" id="${newParagraphId}" contenteditable>text here</p>`;
        newParagraphContainer.appendChild(newParagraph);
        initializeParagraph(newParagraph.querySelector('p'));
    });

    // Add new paragraph functionality for back
    const addNewTextButtonBack = document.getElementById('add-new-text-back');
    const newParagraphContainerBack = document.getElementById('new-paragraph-container-back');
    let paragraphCountBack = 1;

    addNewTextButtonBack.addEventListener('click', function() {
        const newParagraphBack = document.createElement('div');
        newParagraphBack.classList.add('first-img-text', 'draggable');
        const newParagraphBackId = `paragraphBack${++paragraphCountBack}`;
        newParagraphBack.innerHTML = `<p class="first-shirt-text-back" id="${newParagraphBackId}" contenteditable>text here</p>`;
        newParagraphContainerBack.appendChild(newParagraphBack);
        initializeParagraph(newParagraphBack.querySelector('p'), true);
    });
});
