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
btnClosed.addEventListener('click', closedModal);
buttonNext.addEventListener('click', () => showSlide(currentIndex + 1));
buttonPrev.addEventListener('click', () => showSlide(currentIndex - 1));


function openModal(index) {
	currentIndex = index;
	modalSlider.style.display = 'flex';
	showSlide(currentIndex);
}

function closedModal() {
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

	images.forEach((img, index) => {
		// Añade la imagen a la galería principal
		img.onclick = () => openModal(index);
		containerGallery.appendChild(img);

		// Añade la imagen al carrusel
		slidesContainer.insertAdjacentHTML('beforeend', `<img class="slider-img" src="${img.src}" alt="${img.alt}">`);
	});
}

initializeGallery();
