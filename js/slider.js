document.addEventListener('DOMContentLoaded', function() {
    const rotationSliderFront = document.getElementById('rotation-slider');
    const rotationInputFront = document.getElementById('rotation-input');
    let activeParagraphFront = document.querySelector('.first-shirt-text.active');

    const rotationSliderBack = document.getElementById('rotation-slider-back');
    const rotationInputBack = document.getElementById('rotation-input-back');
    let activeParagraphBack = document.querySelector('.first-shirt-text-back.active');

    function setRotation(rotation, paragraph) {
        if (paragraph) {
            paragraph.style.transform = `rotate(${rotation}deg)`;
        }
    }

    function updateActiveParagraph(rotationSlider, rotationInput, activeParagraph) {
        const rotation = parseInt(rotationSlider.value);
        setRotation(rotation, activeParagraph);
        rotationInput.value = rotation;
    }

    rotationSliderFront.addEventListener('input', function() {
        updateActiveParagraph(rotationSliderFront, rotationInputFront, activeParagraphFront);
    });

    rotationSliderBack.addEventListener('input', function() {
        updateActiveParagraph(rotationSliderBack, rotationInputBack, activeParagraphBack);
    });

    rotationInputFront.addEventListener('input', function() {
        const rotation = parseInt(rotationInputFront.value);
        if (rotation >= -180 && rotation <= 180) {
            setRotation(rotation, activeParagraphFront);
            rotationSliderFront.value = rotation;
        }
    });

    rotationInputBack.addEventListener('input', function() {
        const rotation = parseInt(rotationInputBack.value);
        if (rotation >= -180 && rotation <= 180) {
            setRotation(rotation, activeParagraphBack);
            rotationSliderBack.value = rotation;
        }
    });

    function initializeRotationForParagraph(paragraph, isBack = false) {
        paragraph.addEventListener('click', function() {
            const paragraphClass = isBack ? '.first-shirt-text-back' : '.first-shirt-text';
            const activeClass = 'active';
            const rotationSlider = isBack ? rotationSliderBack : rotationSliderFront;
            const rotationInput = isBack ? rotationInputBack : rotationInputFront;
            let activeParagraph = isBack ? activeParagraphBack : activeParagraphFront;

            document.querySelectorAll(paragraphClass).forEach(p => p.classList.remove(activeClass));
            this.classList.add(activeClass);
            activeParagraph = this;

            const currentRotation = parseInt(activeParagraph.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
            rotationSlider.value = currentRotation;
            rotationInput.value = currentRotation;

            if (isBack) {
                activeParagraphBack = activeParagraph;
            } else {
                activeParagraphFront = activeParagraph;
            }
        });
    }

    document.querySelectorAll('.first-shirt-text').forEach(paragraph => {
        initializeRotationForParagraph(paragraph);
    });

    document.querySelectorAll('.first-shirt-text-back').forEach(paragraph => {
        initializeRotationForParagraph(paragraph, true);
    });

    function addRotationFunctionality(paragraph, isBack = false) {
        initializeRotationForParagraph(paragraph, isBack);
    }

    window.addRotationFunctionality = addRotationFunctionality;
});

function setRotationFromParagraph(paragraph, isBack = false) {
    const rotationSlider = isBack ? document.getElementById('rotation-slider-back') : document.getElementById('rotation-slider');
    const rotationInput = isBack ? document.getElementById('rotation-input-back') : document.getElementById('rotation-input');
    const currentRotation = parseInt(paragraph.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    rotationSlider.value = currentRotation;
    rotationInput.value = currentRotation;
}
