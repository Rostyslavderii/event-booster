import { EventsAPI } from './eventsAPI';

const galleryCard = document.querySelector('.modal__wrap');

export async function renderGalleryCard(id) {
  const response = await EventsAPI.getEvents({ id });
  galleryCard.innerHTML = createMarkupEventCard(response);
}

export function createMarkupEventCard(arr) {
  return arr.reduce((acc, propertys) => {
    const {
      name,
      images,
      url,
      info,
      dates: {
        start: { localDate, localTime },
        timezone,
      },

      _embedded: { venues },
    } = propertys;

    const { name: nameOfPlace, city, country } = venues[0];

    const img = images[0];

    return (acc += `
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
             ${info || 'No information'}
            </p>
          </li>
          <li class="content__item">
            <h2 class="modal__title">WHEN</h2>
            <p class="modal__text">${localDate}</p>
            <p class="modal__text">${localTime || ''} (${timezone})</p>
          </li>
          <li class="content__item">
            <h2 class="modal__title">WHERE</h2>
            <p class="modal__text">${city.name}, ${country.name}</p>
            <p class="modal__text">${nameOfPlace || ''} </p>
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
                  <p class="modal__text"></p>
                </div>
                <a class="modal__btn" href="${url}">BUY TICKETS</a>
              </li>
              <li class="price__item">
                <div class="price__wrap">
                  <svg width="24" height="16">
                    <use href="./images/sprite.svg#Ticket"></use>
                  </svg>
                  <p class="modal__text"></p>
                </div>
                <a class="modal__btn" href="${url}">BUY TICKETS</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <a class="btn-info" href="https://www.google.com/search?client=opera&q=${name}&sourceid=opera&ie=UTF-8&oe=UTF-8"
        >MORE FROM THIS AUTHOR</a
      >
    `);
  }, '');
}
