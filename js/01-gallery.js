import { galleryItems } from './gallery-items.js';
// Change code below this line
const getListGallery = document.querySelector(".gallery");

const renderList = (arr, container) => {
    const markup = arr
        .map(
            (item) => 
            `<li class="gallery__item js_gallery_item">
                 <a class="gallery__link" href="${item.original}" onclick="return false;">
                     <img 
                        class="gallery__image"
                        src="${item.preview}" 
                        data-source="${item.preview}" 
                        alt="${item.description}"
                     >
                 </a>
            </li>`
        ).join("");
    
    container.insertAdjacentHTML("beforeend", markup);
}

const changeSize = (e) => {
    e.preventDefault();
    if (e.currentTarget === e.target) {
        return;
    };

    const currentListItem = e.target;
    const currentListItemPreview = currentListItem.dataset.source;
     const chosenImgSource = currentListItem.getAttribute("data-source");
    const galleryItem = galleryItems.find((item) => item.preview === currentListItemPreview);

    const modalInstance = basicLightbox.create(
        `
          <img class="gallery"
            src="${galleryItem.original}" 
            data-source="${galleryItem.original}"
            alt="${galleryItem.description}"
          >
        `
    );
    modalInstance.show();

    const escKey = (event) => {
        if (event.key === "Escape") {
            modalInstance.close();
            getListGallery.removeEventListener("keydown", escKey);
        };
    };
    getListGallery.addEventListener("keydown", escKey);
};


renderList(galleryItems, getListGallery);
getListGallery.addEventListener("click", changeSize);
console.log(galleryItems);


