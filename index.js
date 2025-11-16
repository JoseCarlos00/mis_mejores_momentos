import { nameFiles, basePath } from "./const.js";

const containerGallery = document.querySelector('.container-gallery');


nameFiles.forEach(({ name, desc}) => {
	const img = new Image();
	img.src = `${basePath}${name}`;
  img.alt = desc;
	img.loading = 'lazy';

	img.onload = () => containerGallery.appendChild(img);
  img.onclick = () => openFulImg(img.src);
});

const fulImgBox = document.getElementById('fulImgBox') 
const fulImg = document.getElementById('fulImg');
const btnClosed = document.querySelector('.btn-closed');

btnClosed.addEventListener('click', closeImg);


function openFulImg(reference) {
	fulImgBox.style.display = 'flex';
	fulImg.src = reference;
}

function closeImg() {
	fulImgBox.style.display = 'none';
}
