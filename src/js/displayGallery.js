import { EventsAPI } from "./eventsAPI";

async function displayGallery(options){
    const resp = await EventsAPI.getEvents(options);
    countryInfo.innerHTML = galleryMarkup(resp);
    
}

function galleryMarkup(arr = []){
    
}