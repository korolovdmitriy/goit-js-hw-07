import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');


let galleryItemsString = '';
galleryItems.forEach(item => {
    galleryItemsString += `<div class="gallery__item">
  <a class="gallery__link" target="_self" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
});

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsString);

galleryEl.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
   
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" class="js-modal-img" width="800" height="600">
    </div>
`, {
    onShow: (instance) => {
        
       instance.element().querySelector('.js-modal-img').onclick = instance.close
    }
}).show();
}


