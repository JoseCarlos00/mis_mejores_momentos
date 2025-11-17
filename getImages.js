import { nameFiles, basePath } from './const.js';


export function getImages() {
  return nameFiles.map(({ name, desc }) => {
		const img = new Image();
		img.src = `${basePath}${name}`;
		img.alt = desc;
		img.loading = 'lazy';

    return img;
	});
}
