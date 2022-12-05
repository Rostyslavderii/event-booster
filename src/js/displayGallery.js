import { EventsAPI } from "./eventsAPI";

const gallery = document.querySelector(".js-events-gallery")

export async function displayGallery(options){
    const res = await EventsAPI.getEvents(options)
    gallery.innerHTML = galleryMarkup(res);      
}

function galleryMarkup(arr = []){
    return arr.reduce((acc, event)=>{
        const {name, id, images, dates:{start: {localDate}}, _embedded:{venues}} = event;
        const {name: nameOfPlace} =venues[0]
        const eventImg =images.find(elem =>{
            if(115<=elem.height&&elem.height <= 350&&elem.ratio ==="16_9" ){
                return elem
            }
        })||images[0]
        return acc += 
        `<li class="gallery__item data-id ="${id}">
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
                        </svg>${nameOfPlace}</p>
                </div>
            </a>
        </div></li>`;}, "")
}

