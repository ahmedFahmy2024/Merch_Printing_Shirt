document.addEventListener('DOMContentLoaded', function() {
    const colorArray = [
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

    const colorContent = document.getElementById('color-content');
    const colorContentBack = document.getElementById('color-content-back');

    // Function to set color
    function setColor(color, paragraphElement) {
        paragraphElement.style.color = color;
    }

    // Function to populate color items
    function populateColorItems(colorArray, container, paragraphClass) {
        colorArray.forEach(color => {
            const colorItem = document.createElement('div');
            colorItem.classList.add('color-items');
            colorItem.style.backgroundColor = color;
            colorItem.addEventListener('click', () => {
                const activeParagraph = document.querySelector(`${paragraphClass}.active`);
                if (activeParagraph) {
                    setColor(color, activeParagraph);
                }
            });
            container.appendChild(colorItem);
        });
    }

    // Populate color items for front
    populateColorItems(colorArray, colorContent, '.first-shirt-text');

    // Populate color items for back
    populateColorItems(colorArray, colorContentBack, '.first-shirt-text-back');
});
