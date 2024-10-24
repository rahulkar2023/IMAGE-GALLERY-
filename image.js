let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;

function updateGallery() {
    images.forEach((image, index) => {
        image.classList.remove('active');
        dots[index].classList.remove('active');
    });
    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateGallery();
});

document.getElementById('prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateGallery();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentImageIndex = index;
        updateGallery();
    });
});