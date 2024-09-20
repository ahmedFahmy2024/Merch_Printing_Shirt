

let addInput = {
    Image: null,
    ImagePreview: null
};

function handleImageChange(event) {
    const imageFile = event.target.files[0];
    addInput.Image = imageFile;
    addInput.ImagePreview = URL.createObjectURL(imageFile);

    document.getElementById('image-preview').src = addInput.ImagePreview;
    document.getElementById('image-preview-container').style.display = 'block';

    const uploadButton = document.getElementById('upload-button');
    uploadButton.style.display = 'inline-block';

    document.getElementById('upload-div').style.display = 'none';
}

function removeImage() {
    addInput.Image = null;
    addInput.ImagePreview = null;

    document.getElementById('image-preview-container').style.display = 'none';

    const uploadButton = document.getElementById('upload-button');
    uploadButton.style.display = 'none';

    document.getElementById('upload-div').style.display = 'block';

    // Reset the file input value to ensure change event is triggered for the same file
    const inputField = document.querySelector('.input-field');
    inputField.value = '';
}

// upload front image
async function handleDialogSubmit(e) {
    e.preventDefault();

    let form = new FormData();
    form.append('branch_number', 2);
    if (addInput.Image !== null) {
        form.append('image_url', addInput.Image);
    }

    try {
        const response = await axios.post(`${API_BASE_URL}/api/images`, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: progressEvent => {
                const { loaded, total } = progressEvent;
                let percentCompleted = Math.round((loaded * 100) / total);
                console.log(`Progress: ${percentCompleted}%`);
                // Update your progress bar here
                updateProgressBar(percentCompleted);
            },
        });
        console.log("response:", response);

        addInput.Image = null;
        addInput.ImagePreview = null;
        document.getElementById('image-preview-container').style.display = 'none';

        const uploadButton = document.getElementById('upload-button');
        uploadButton.style.display = 'none';

        const uploadDiv = document.getElementById('upload-div');
        uploadDiv.style.display = 'block';
        
        showSuccessAlert("Image uploaded successfully", "success");
        // Reset progress bar after successful upload
        updateProgressBar(0);
    } catch (error) {
        console.log("Error:", error);
        showSuccessAlert(error.response.data.message, "danger");
        // Reset progress bar after error
        updateProgressBar(0);
    }
}

// upload back image
async function handleDialogSubmit2(e) {
    e.preventDefault();

    let form = new FormData();
    form.append('branch_number', 3);
    if (addInput.Image !== null) {
        form.append('image_url', addInput.Image);
    }

    try {
        const response = await axios.post(`${API_BASE_URL}/api/images`, form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress: progressEvent => {
                const { loaded, total } = progressEvent;
                let percentCompleted = Math.round((loaded * 100) / total);
                console.log(`Progress: ${percentCompleted}%`);
                // Update your progress bar here
                updateProgressBar(percentCompleted);
            },
        });
        console.log("response:", response);

        addInput.Image = null;
        addInput.ImagePreview = null;
        document.getElementById('image-preview-container').style.display = 'none';

        const uploadButton = document.getElementById('upload-button');
        uploadButton.style.display = 'none';

        const uploadDiv = document.getElementById('upload-div');
        uploadDiv.style.display = 'block';
        
        showSuccessAlert("Image uploaded successfully", "success");
        // Reset progress bar after successful upload
        updateProgressBar(0);
    } catch (error) {
        console.log("Error:", error);
        showSuccessAlert(error.response.data.message, "danger");
        // Reset progress bar after error
        updateProgressBar(0);
    }
}

function updateProgressBar(percent) {
    // Implement your progress bar update logic here
    // Example: Update the width of a progress bar element
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percent}%`;
}

function handleReset() {
    addInput.Image = null;
    addInput.ImagePreview = null;
    document.getElementById('image-preview-container').style.display = 'none';

    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => input.value = '');

    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => paragraph.textContent = '');

    const name = document.querySelector('.football-name');
    if (name) name.textContent = 'Name';
    const num = document.querySelector('.football-num');
    if (num) num.textContent = '00';

    handleDeleteConfirm();
}

// =============== modal preview ===============
function showSelectedShirts() {
    const selectedShirts = document.querySelector('input[name="shirt"]:checked');
    const selectedShirtBacks = document.querySelector('input[name="shirtBack"]:checked');
    const modalBody = document.getElementById('shirt-preview-container');
    modalBody.innerHTML = '';

    if (!selectedShirts || !selectedShirtBacks) {
        showSuccessAlert("Please select a shirt for both the front and back.", "danger");
        return;
    }

    if (selectedShirts.value === 'none') {
        modalBody.innerHTML += '<p>No shirt selected for the front.</p>';
    } else {
        const shirtContainer = document.getElementById(`shirt-container-${selectedShirts.value}`);
        const clonedContainer = shirtContainer.cloneNode(true);
        modalBody.appendChild(clonedContainer);
    }

    if (selectedShirtBacks.value === 'none') {
        modalBody.innerHTML += '<p>No shirt selected for the back.</p>';
    } else {
        const shirtContainer = document.getElementById(`shirt-container-${selectedShirtBacks.value.toLowerCase()}`);
        const clonedContainer = shirtContainer.cloneNode(true);
        modalBody.appendChild(clonedContainer);
    }

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

document.getElementById('showSelectedShirtsButton').addEventListener('click', showSelectedShirts);

