import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryCard = document.querySelector(".gallery");
let makeGalery;

function blockImage({ preview, original, description }) {
  return ` <div class="gallery__item">
        <a class="gallery__link" href = "${original}">
          <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
      </div>`;
}

galleryCard.insertAdjacentHTML(
  "beforeend",
  galleryItems.map(blockImage).join("")
);

galleryCard.addEventListener("click", galleryClick);

function galleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const urlEl = event.target.dataset.source;

  makeGalery = basicLightbox.create(`
      <img src="${urlEl}" width="800" height="600">
  `);

  makeGalery.show();

  document.addEventListener("keydown", onKeyboardPress);
}

function onKeyboardPress(event) {
  if (event.code === "Escape") {
    makeGalery.close();
  }
  document.removeEventListener("keydown", onKeyboardPress);
}
