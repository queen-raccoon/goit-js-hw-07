import { galleryItems } from './gallery-items.js';
// Change code below this line
const getListGallery = document.querySelector(".gallery");

const renderList = (arr, container) => {
    const markup = arr
        .map(
            (item) => 
            `<li class="gallery__item">
                 <a class="gallery__link" href="${item.original}">
                     <img 
                        class="gallery__image"
                        src="${item.preview}" 
                        alt="${item.description}"
                        loading="lazy"
                     >
                 </a>
            </li>`
        ).join("");
    
    container.insertAdjacentHTML("beforeend", markup);
}

renderList(galleryItems, getListGallery);

const modalInstance = new SimpleLightbox('.gallery a', {
    captions: true,
    closeText: '×',
    captionsData: 'alt',
    enableKeyboard: true,
    widthRatio: 0.7,
    alertErrorMessage: "Sorry. I couldn't find the photo",
    animationSpeed: 100,
    doubleTapZoom: 1.5,
}
);

console.log(galleryItems);


