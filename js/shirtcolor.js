const colors = [
    '#C7132B',
    '#331447',
    '#EE5A76',
    '#22222D',
    '#B2B2B2',
    '#11307D',
    '#0E0E0E',
    '#DFDFDF'
];

const colorToIndex = {
    '#C7132B': 8,
    '#331447': 7,
    '#EE5A76': 6,
    '#22222D': 5,
    '#B2B2B2': 4,
    '#11307D': 3,
    '#0E0E0E': 2,
    '#DFDFDF': 1
};

let currentColor = colors[0];

function updateShirtImage() {
    const colorIndex = colorToIndex[currentColor];
    document.getElementById('shirt-image').src = `./imgs/front-shirt (${colorIndex}).png`;
    document.getElementById('shirt-image-back').src = `./imgs/back-shirt (${colorIndex}).png`;
}

const colorContainer = document.getElementById('color-shirt');

colors.forEach(color => {
    const colorItem = document.createElement('div');
    colorItem.className = 'color-item';
    colorItem.style.backgroundColor = color;
    colorItem.addEventListener('click', function() {
        currentColor = color;
        updateShirtImage();
    });
    colorContainer.appendChild(colorItem);
});

// Initialize the shirt images on page load
updateShirtImage();
