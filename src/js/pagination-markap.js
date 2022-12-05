const paginationIteam = document.querySelector('.pagination');
const max = 29;
let startPage = 0;

export function nextPageForPagination(){
  startPage++;
}

export function prevPageForPagination(){
  startPage--;
}

export function getPagination( totalPages) {
  console.log('create pagination', startPage, totalPages);
  let currentPage = startPage;
  let pagiItem = '';
  let maxPage = totalPages;
  if(totalPages > max){
    maxPage = max
  }
  if (maxPage <= 5) {
    for (let i = 0; i < maxPage; i += 1) {
      pagiItem += `<li class="pagination__page" data-page="${currentPage}" ><button  class='pagination__btn' value="${currentPage}" type="button">${currentPage+1}</button></li>`;
      currentPage += 1;
    }
  } else if(maxPage > 5) {
    for (let i = 0; i < 5; i += 1 ){
      pagiItem += `<li class="pagination__page ${i == 0 ? "load-prev-page":""} ${i == 4 ? "load-next-page":""}" data-page="${currentPage}" ><button  class='pagination__btn' value="${currentPage}" type="button">${currentPage+1}</button></li>`;
      currentPage += 1;
    }
    pagiItem += `<li class="pagination__page"><button class="pagination__btn--points" type="button">...</button></li>
    <li class="pagination__page" data-max="${maxPage}"><button  class='pagination__btn' value="${maxPage}" type="button">${maxPage+1}</button></li>`;
  }

paginationIteam.innerHTML = pagiItem;
  //paginationIteam.insertAdjacentHTML('beforeend', pagiItem);
}


// console.log(getPagination)
// let buttonValue = e.target.value;

// const paginationList = document.querySelector('.pagination')
// paginationList.addEventListener('click', e=> {
// EventsAPI.page = buttonValue;
// displayGallery(buttonValue)
// console.log(displayGallery(buttonValue))
// });
