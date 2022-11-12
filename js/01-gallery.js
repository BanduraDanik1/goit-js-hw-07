import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
console.log(galleryEl)

const items = galleryItems.map(({preview, original, description}) => `<div class = "gallery__item"> 
<a class = "gallery__link">
    <img class = "gallery__image" 
    src = "${preview}" 
    data-source = "${original}" 
    alt = "${description}"></img>
</a>
</div>`).join("")

galleryEl.insertAdjacentHTML("beforeend", items);
galleryEl.addEventListener('click', onClick)

function onClick (event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }
    const url = event.target.dataset.source;
    const instance = basicLightbox.create(` 
        <img src =${url}>`);
    instance.show();
}