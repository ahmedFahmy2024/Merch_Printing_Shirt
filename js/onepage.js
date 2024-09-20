document.addEventListener("DOMContentLoaded", function () {
  // Select front and back shirt elements
  const frontShirt = document.getElementById("front");
  const backShirt = document.getElementById("back");

  // Show front shirt container by default
  const frontImgContainer = document.querySelector(".front-img-container");
  const backImgContainer = document.querySelector(".back-img-container");

  frontImgContainer.style.display = "block"; // Display front shirt
  backImgContainer.style.display = "none"; // Hide back shirt

  // Show front button and hide back button by default
  frontShirt.style.display = "none";
  backShirt.style.display = "block";

  // Select upload buttons
  const uploadFrontButton = document.querySelector('[data-bs-target="#exampleModal"]');
  const uploadBackButton = document.querySelector('[data-bs-target="#exampleModalback"]');

  // Show upload front button and hide upload back button by default
  uploadFrontButton.style.display = "block";
  uploadBackButton.style.display = "none";

  // Hide text function sections by default
  document.querySelector(".textfunctionsfront").style.display = "none";
  document.querySelector(".textfunctionsback").style.display = "none";

  // Select image based on the slider
  const sliderImages = document.querySelectorAll(".swiper-slide img");

  const handleImageClick = function () {
    // Check which side (front or back) is currently active
    const frontActive = frontImgContainer.style.display === "block";
    const backActive = backImgContainer.style.display === "block";

    // Select the correct shirt picture container based on active side
    let shirtPictureContainer;
    let resizeDragContainer;
    if (frontActive) {
      shirtPictureContainer = document.getElementById("shirt-picture");
      resizeDragContainer = frontImgContainer.querySelector(".resize-drag");
    } else if (backActive) {
      shirtPictureContainer = document.getElementById("shirt-picture-back");
      resizeDragContainer = backImgContainer.querySelector(".resize-drag");
    } else {
      return; // No active shirt side found
    }

    // Set the src of the selected shirt picture container
    shirtPictureContainer.src = this.src;
    resizeDragContainer.style.display = "block";
  };

  sliderImages.forEach((image) => {
    image.addEventListener("click", handleImageClick);
  });

  // Fetch categories and designs dynamically
  axios.get(`${API_BASE_URL}/api/categories`)
    .then(response => {
      const categories = response.data;
      const categoryList = document.getElementById('categoryList');
      categoryList.innerHTML = '';

      categories.forEach(category => {
        const designBox = document.createElement('div');
        designBox.classList.add('design-box');

        const categoryTitle = document.createElement('h6');
        categoryTitle.textContent = category.name;

        designBox.addEventListener('click', () => {
          fetchCategoryDesigns(category.id);
          // Close the modal after selecting a category
          const modalElement = document.getElementById('designModal');
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal.hide();
        });

        designBox.appendChild(categoryTitle);
        categoryList.appendChild(designBox);
      });
    })
    .catch(error => {
      console.error('Error fetching categories:', error);
    });

  // Function to fetch designs for a specific category
  function fetchCategoryDesigns(categoryId) {
    axios.get(`${API_BASE_URL}/api/categories/${categoryId}/designs`)
      .then(response => {
        const designs = response.data;
        const swiperWrapper = document.querySelector('.swiper-wrapper');

        swiperWrapper.innerHTML = '';

        designs.forEach(design => {
          const swiperSlide = document.createElement('div');
          swiperSlide.classList.add('swiper-slide');

          const image = document.createElement('img');
          image.src = design.design_url;
          image.alt = `Design ${design.id}`;
          image.loading = "lazy";

          image.addEventListener('click', () => {
            // Remove border from any previously selected image
            document.querySelectorAll('.swiper-slide img').forEach(img => {
              img.style.border = '';
            });

            // Add border to the clicked image
            image.style.border = '1px dashed red';

            // Call handleImageClick to update shirt image
            handleImageClick.call(image);
          });

          swiperSlide.appendChild(image);
          swiperWrapper.appendChild(swiperSlide);
        });

        swiper.update();
      })
      .catch(error => {
        console.error(`Error fetching designs for category ${categoryId}:`, error);
      });
  }

  // Event listeners for front and back shirt views
  frontShirt.addEventListener("click", function () {
    frontImgContainer.style.display = "block";
    backImgContainer.style.display = "none";
    document.querySelector(".textfunctionsfront").style.display = "none";
    document.querySelector(".textfunctionsback").style.display = "none";
    frontShirt.style.display = "none";
    backShirt.style.display = "block";
    uploadFrontButton.style.display = "block";
    uploadBackButton.style.display = "none";
  });

  backShirt.addEventListener("click", function () {
    frontImgContainer.style.display = "none";
    backImgContainer.style.display = "block";
    document.querySelector(".textfunctionsfront").style.display = "none";
    document.querySelector(".textfunctionsback").style.display = "none";
    frontShirt.style.display = "block";
    backShirt.style.display = "none";
    uploadFrontButton.style.display = "none";
    uploadBackButton.style.display = "block";
  });
});

// Show the input text after clicking "Add Text"
document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  const addTextButton = document.querySelector(".third-row");
  const textInput = document.querySelector(".input__field");
  const textInputBack = document.getElementById("input-back");
  const paragraph = document.getElementById("paragraph1");
  const paragraphBack = document.getElementById("paragraph11");

  // Add click event listener to the "Add Text" button to display and hide merch style fields
  addTextButton.addEventListener("click", function () {
    const frontShirtVisible =
      document.querySelector(".front-img-container").style.display === "block";
    const backShirtVisible =
      document.querySelector(".back-img-container").style.display === "block";

    if (frontShirtVisible) {
      const stackTextInputFront = document.querySelector(".textfunctionsfront");
      stackTextInputFront.style.display =
        stackTextInputFront.style.display === "none" ? "block" : "none";
      if (stackTextInputFront.style.display === "block") {
        textInput.focus();
      }
    } else if (backShirtVisible) {
      const stackTextInputBack = document.querySelector(".textfunctionsback");
      stackTextInputBack.style.display =
        stackTextInputBack.style.display === "none" ? "block" : "none";
      if (stackTextInputBack.style.display === "block") {
        textInputBack.focus();
      }
    }
  });

  // Handle input change event for the front
  textInput.addEventListener("input", function () {
    // Update the paragraph text with the input value
    paragraph.textContent = textInput.value;
  });

  // Handle input change event for the back
  textInputBack.addEventListener("input", function () {
    // Update the paragraph text with the input value
    paragraphBack.textContent = textInputBack.value;
  });
});

// to display the image fetched from api and dispaly it after 1 second (front shirt)
document.addEventListener("DOMContentLoaded", function () {
  const shirtPicture = document.getElementById("shirt-picture");
  const sliderImages = document.querySelectorAll(".swiper-slide img");
  const exampleModal = document.getElementById("exampleModal");
  let intervalId;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/images/latest?branch_number=2`
      );
      const imageUrl = response.data.image_url;

      // Update the src attribute of the shirt-picture element
      shirtPicture.src = imageUrl;
      shirtPicture.style.display = "block"; // Ensure the image is displayed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  sliderImages.forEach((image) => {
    image.addEventListener("click", function () {
      clearInterval(intervalId);
    });
  });

  exampleModal.addEventListener("click", function () {
    // Clear any existing interval to avoid multiple intervals running simultaneously
    clearInterval(intervalId);
    intervalId = setInterval(fetchData, 1000);
  });
});

// to display the image fetched from api and dispaly it after 1 second (back shirt)
document.addEventListener("DOMContentLoaded", function () {
  const shirtPicture = document.getElementById("shirt-picture-back");
  const sliderImages = document.querySelectorAll(".swiper-slide img");
  const exampleModal = document.getElementById("exampleModalback");
  let intervalId;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/images/latest?branch_number=3`
      );
      const imageUrl = response.data.image_url;

      // Update the src attribute of the shirt-picture element
      shirtPicture.src = imageUrl;
      shirtPicture.style.display = "block"; // Ensure the image is displayed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  sliderImages.forEach((image) => {
    image.addEventListener("click", function () {
      clearInterval(intervalId);
    });
  });

  exampleModal.addEventListener("click", function () {
    // Clear any existing interval to avoid multiple intervals running simultaneously
    clearInterval(intervalId);
    intervalId = setInterval(fetchData, 1000);
  });
});

// alert
function showSuccessAlert(customMessage, customType) {
  const alertPlaceholder = document.getElementById("successAlert");

  const Alert = (message, type) => {
    let icon;
    if (type === "danger") {
      icon = '<i class="fa-solid fa-circle-exclamation"></i>'; // Error icon
    } else {
      icon = '<i class="fa-regular fa-circle-check"></i>'; // Success icon
    }

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
            <div class="alert alert-${type} alert-dismissible" role="alert">
                <div>${message}</div>
                ${icon}
            </div>`;
    alertPlaceholder.innerHTML = ""; // Clear previous alerts
    alertPlaceholder.appendChild(wrapper);
  };

  Alert(customMessage, customType);

  // hide alert after 2 seconds
  setTimeout(() => {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.parentNode.removeChild(alert);
    }
  }, 2000);
}
