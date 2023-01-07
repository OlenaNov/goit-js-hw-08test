// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "../node_modules/simplelightbox";
import "../node_modules/simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const addItems = galleryItems.reduce((acc, { original, preview, description }) => 
    acc += `<a class="gallery__item" href="${original}">
            <img 
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                title="${description}" 
            />
        </a>`, "");

gallery.insertAdjacentHTML('beforeend', addItems);

    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: `alt`,
        animationSpeed:	250,
});