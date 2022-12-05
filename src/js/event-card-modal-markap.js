export function createMarkupEventCard(arr) {
  return arr
    .map(
      ({
        name,
        images,
        info,
        dates: {
          start: { localDate, localTime },
          timezone,
        },
        _embedded: {
          venues: { city, country },
        },
        priceRanges: { type, currency, min, max },
      }) => {
        const img = images.find(e => {
          if (e.height === 427 && e.ratio === '3_2') {
            return img;
          }
        });
        `<div class="backdrop visually-hidden" data-modal>
         <div class="modal">
           <button class="modal-button" type="button" data-close>
             <svg class="modal-button__icon" width="17" height="17">
               <use
                 class="modal-button__icon--close"
                 href="./images/sprite.svg#icon-Close"
               ></use>
             </svg>
           </button>
         <div class="modal__wrap">
         <img
           class="modal__preview"
           src="${img.url}"
           alt="preview-poster"
         />
 
         <div class="content">
           <img
             class="content__image"
             src="${img.url}"
             alt="poster"
           />
 
           <ul class="content__list">
             <li class="content__item">
               <h2 class="modal__title">INFO</h2>
               <p class="modal__text text-wrap">
                 ${info}
               </p>
             </li>
             <li class="content__item">
               <h2 class="modal__title">WHEN</h2>
               <p class="modal__text">${localDate}</p>
               <p class="modal__text">${localTime} ${timezone}</p>
             </li>
             <li class="content__item">
               <h2 class="modal__title">WHERE</h2>
               <p class="modal__text">${city.name}, ${country.name}</p>
               <p class="modal__text">${venues.name}</p>
             </li>
             <li class="content__item">
               <h2 class="modal__title">WHO</h2>
               <p class="modal__text">${name}</p>
             </li>
             <li class="content__item">
               <h2 class="modal__title">PRICES</h2>
 
               <ul class="price__list">
                 <li class="price__item">
                   <div class="price__wrap">
                     <svg width="24" height="16">
                       <use href="./images/sprite.svg#Ticket"></use>
                     </svg>
                     <p class="modal__text">${type} ${min}-${max} ${currency}</p>
                   </div>
                   <a class="modal__btn" href="">BUY TICKETS</a>
                 </li>
                 <li class="price__item">
                   <div class="price__wrap">
                     <svg width="24" height="16">
                       <use href="./images/sprite.svg#Ticket"></use>
                     </svg>
                     <p class="modal__text">${type} ${min}-${max} ${currency}</p>
                   </div>
                   <a class="modal__btn" href="">BUY TICKETS</a>
                 </li>
               </ul>
             </li>
           </ul>
         </div>
 
         <a class="btn-info" href="https://www.google.com/search?client=opera&q=${name}&sourceid=opera&ie=UTF-8&oe=UTF-8"
           >MORE FROM THIS AUTHOR</a
         >
       </div>
       </div>
 </div>`;
      }
    )
    .join('');
}
