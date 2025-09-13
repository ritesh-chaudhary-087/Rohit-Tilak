 /*=============================================
	=         image-popup           =
=============================================*/
// Image Popup Functionality

  let currentGallery = [];
  let currentIndex = 0;

  const popup = document.getElementById("imagePopup");
  const popupImg = document.getElementById("popupImage");

  function bindGallery(gallerySelector) {
    const galleryImages = document.querySelectorAll(`${gallerySelector} .popup-img`);
    
    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentGallery = Array.from(galleryImages);
        currentIndex = index;
        openPopup(currentGallery[currentIndex].src);
      });
    });
  }

  function openPopup(src) {
    popupImg.src = src;
    popup.style.display = "block";
  }

  function nextImage() {
    if (currentGallery.length === 0) return;
    currentIndex = (currentIndex + 1) % currentGallery.length;
    popupImg.src = currentGallery[currentIndex].src;
  }

  function prevImage() {
    if (currentGallery.length === 0) return;
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    popupImg.src = currentGallery[currentIndex].src;
  }

  function closePopup() {
    popup.style.display = "none";
  }

  popup.addEventListener("click", function (e) {
    if (e.target === popup) closePopup();
  });

  // Bind all galleries separately
  bindGallery('.gallery-one');
  bindGallery('.gallery-two');
  bindGallery('.gallery-three');
 bindGallery('.gallery-four');
    bindGallery('.gallery-five');
    
