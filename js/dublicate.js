document.addEventListener('DOMContentLoaded', () => {
    const duplicateTextButton = document.querySelector('.fifth-row');

    duplicateTextButton.addEventListener('click', () => {
        const originalTextElement = document.querySelector('.first-img-text');
        if (originalTextElement) {
            // Clone the text element
            const clone = originalTextElement.cloneNode(true);
            // Set a unique id for the cloned element
            clone.id = `paragraph${document.querySelectorAll('.first-img-text').length + 1}`;
            // Make the cloned text draggable
            clone.classList.add('draggable');
            // Offset the position of the cloned element
            const verticalOffset = 5; // Define the vertical offset distance
            const originalRect = originalTextElement.getBoundingClientRect();
            clone.style.transform = `translate(0px, ${originalRect.height + verticalOffset}px)`;
            clone.setAttribute('data-x', 0);
            clone.setAttribute('data-y', originalRect.height + verticalOffset);
            // Append the cloned element to the shirt container
            document.querySelector('.shirt-container').appendChild(clone);
            // Reinitialize draggable functionality
            initializeDraggable();
        }
    });

    function initializeDraggable() {
        interact('.draggable').draggable({
            inertia: true,
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            autoScroll: true,
            listeners: {
                move: dragMoveListener,
            }
        });
    }

    function dragMoveListener(event) {
        var target = event.target;
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    initializeDraggable();
});
