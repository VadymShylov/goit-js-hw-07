import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryCard = document.querySelector(".gallery");

function blockImage({ preview, original, description }) {
  return `<a class="gallery__item" href = "${original}">
    <img class="gallery__image"
      src="${preview}"
      alt="${description}"/>
  </a>`;
}

galleryCard.insertAdjacentHTML(
  "beforeend",
  galleryItems.map(blockImage).join("")
);

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  enableKeyboard: "true",
});
