document.addEventListener('DOMContentLoaded', function() {
    const outlineColorArray = [
        "#333333",
        "#28538f",
        "#d3d3d3",
        "#2a4767",
        "#f490b6",
        "#3b1550",
        "#ff0000",
        "black",
        "#ffffff",
    ];

    const outlineColorContent = document.getElementById('outline-color-content');
    const outlineColorContentBack = document.getElementById('outline-color-content-back');
    let activeParagraphFront = document.querySelector('.first-shirt-text.active');
    let activeParagraphBack = document.querySelector('.first-shirt-text-back.active');

    // Function to set outline color
    function setOutlineColor(color, isBack = false) {
        const activeParagraph = isBack ? activeParagraphBack : activeParagraphFront;
        if (activeParagraph) {
            activeParagraph.style.textShadow = `0 0 3px ${color}`;
        }
    }

    // Function to create and populate outline color items
    function populateOutlineColorItems(colorArray, container, paragraphClass) {
        colorArray.forEach(color => {
            const outlineColorItem = document.createElement('div');
            outlineColorItem.classList.add('outline-items');
            outlineColorItem.style.backgroundColor = color;
            outlineColorItem.addEventListener('click', () => setOutlineColor(color, paragraphClass.includes('back')));
            container.appendChild(outlineColorItem);
        });
    }

    // Populate outline color items for front
    populateOutlineColorItems(outlineColorArray, outlineColorContent, '.first-shirt-text');

    // Populate outline color items for back
    populateOutlineColorItems(outlineColorArray, outlineColorContentBack, '.first-shirt-text-back');

    // Function to add outline color functionality to new paragraphs
    function addOutlineColorFunctionality(paragraph, isBack = false) {
        paragraph.addEventListener('click', function() {
            const paragraphClass = isBack ? '.first-shirt-text-back' : '.first-shirt-text';
            document.querySelectorAll(paragraphClass).forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            if (isBack) {
                activeParagraphBack = this;
            } else {
                activeParagraphFront = this;
            }
        });
    }

    // Export the function to be used in crud.js
    window.addOutlineColorFunctionality = addOutlineColorFunctionality;

    // Initialize existing paragraphs for front
    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        addOutlineColorFunctionality(paragraph);
    });

    // Initialize existing paragraphs for back
    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        addOutlineColorFunctionality(paragraph, true);
    });
});
