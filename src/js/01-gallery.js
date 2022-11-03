import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryContainerEl = document.querySelector('.gallery')
const markupGallery = createGallery(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', markupGallery);

function createGallery(cards) {
    return cards.map(({preview,original,description}) => {return `<div class ="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" 
        src="${preview}"
        data-source="${original}"
        alt="${description}"/>
        </a>
        </div>`}).join("");
}

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

