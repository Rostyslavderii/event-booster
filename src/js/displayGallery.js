import { EventsAPI } from "./eventsAPI";
import { createPagination } from './pagination-markap';
import './pagination-markap';
const gallery = document.querySelector(".js-events-gallery")

export async function displayGallery(options){
    const res = await EventsAPI.getEvents(options)
    gallery.innerHTML = galleryMarkup(res);
    createPagination(currentPage, totalPages);
    const currentBtn = document.querySelector(`button[value='${currentPage}']`);
    console.log(currentBtn);
    currentBtn.classList.add('current-page');
}
// const res = await EventsAPI.getEvents(options);
// if(res){
//   return gallery.innerHTML = galleryMarkup(res);
// }
// gallery.innerHTML = galleryMarkupZeroReq();
// >>>>>>> main

function galleryMarkup(arr = []){
    return arr.reduce((acc, event)=>{
        const {name, id, images, dates:{start: {localDate}}, _embedded:{venues}} = event;
        const {address:{line1: address}, city:{name: cityName}, name: nameOfPlace} =venues[0]
        const eventImg =images.find(elem =>{
            if(300<=elem.height&&elem.height <= 450&&elem.ratio ==="16_9" ){
                return elem
            }
        })||images[0]
        return acc +=
        `<li class="class="gallery__item js-gallery-card" data-id ="${id}">
         <div class="gallery__div">
            <a class="gallery__link animation" href="">
                <img class="gallery__img" src="${eventImg.url}" width="267px" height="337px"
                    alt="thing">
                <div class="gallery__pinkBorder"></div>
                <div class="event-info">
                    <h3 class="event-heading">${name}</h3>
                    <p class="event-data">${localDate}</p>
                    <p class="event-place">
                        <svg class="Map__icon" width="7" height="10">
                            <use href="./images/sprite.svg#Map"></use>
                        </svg>${nameOfPlace||cityName||address||"No info about place"}</p>
                </div>
            </a>
        </div></li>`;}, "")
}

