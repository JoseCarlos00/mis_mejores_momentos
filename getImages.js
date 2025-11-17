import { nameFiles, basePath } from './const.js';


export function getImages() {
  return nameFiles.map(({ name, desc, figcaption }) => {
		const img = new Image();
		img.src = `${basePath}${name}`;

		return { img, alt: desc, src: img.src, figcaption };
	});
}
