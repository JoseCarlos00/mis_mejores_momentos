import { getImages } from "./getImages.js";

// Elementos del DOM
const containerGallery = document.querySelector('.container-gallery');
const modalSlider = document.querySelector('#modal-slider'); 
const slidesContainer = document.querySelector('.slides');

const btnClosed = document.querySelector('.btn-closed');
const buttonPrev = document.querySelector('.slider-btn-left');
const buttonNext = document.querySelector('.slider-btn-right');


const images = getImages();
let currentIndex = 0;

// Eventos
btnClosed.addEventListener('click', closeModal);
buttonNext.addEventListener('click', () => showSlide(currentIndex + 1));
buttonPrev.addEventListener('click', () => showSlide(currentIndex - 1));

function openModal(index) {
	currentIndex = index;
	modalSlider.style.display = 'flex';
	showSlide(currentIndex);
}

function closeModal() {
	modalSlider.style.display = 'none';
}

function showSlide(index) {
	const totalSlides = images.length;
	currentIndex = (index + totalSlides) % totalSlides;
	slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function initializeGallery() {
	containerGallery.innerHTML = '';
	slidesContainer.innerHTML = '';

	images.forEach(({ figcaption, alt, src, img }, index) => {
		const figure = document.createElement('figure');
		figure.className = 'gallery-item';

		const galleryImage = document.createElement('img');
		galleryImage.className = 'slider-img';
		galleryImage.src = src;
		galleryImage.alt = alt;
		galleryImage.loading = 'lazy';
		galleryImage.addEventListener('click', () => openModal(index));

		figure.appendChild(galleryImage);

		if (figcaption) {
			figure.insertAdjacentHTML('beforeend', `<figcaption>${figcaption}</figcaption>`);
		}

		// Añade la figura al contenedor de la galería
		containerGallery.appendChild(figure);

		// Añade la imagen al carrusel
		slidesContainer.insertAdjacentHTML('beforeend', 
			`<img class="slider-img" src="${img.src}" alt="${img.alt}">`);
	});
}

initializeGallery();


window.addEventListener('click', e => {
	if (e.target === modalSlider) {
		closeModal();
	}
});

window.addEventListener('keydown', ({ key }) => {
	if (key === 'Escape' && modalSlider.style.display === 'flex') {
		closeModal();
	} else if (key === 'ArrowRight' && modalSlider.style.display === 'flex') {
		showSlide(currentIndex + 1);
	} else if (key === 'ArrowLeft' && modalSlider.style.display === 'flex') {
		showSlide(currentIndex - 1);
	}
});
