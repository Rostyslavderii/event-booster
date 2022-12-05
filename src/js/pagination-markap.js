const paginationIteam = document.querySelector('.pagination');
let maxPage;
export function displayPaginationMarkup(currentPage, totalPages) {
  let elemLi;
  if (totalPages > 29) {
    maxPage = 29;
  } else {
    maxPage = totalPages;
  }
  if (totalPages <= 6) {
    for (let i = 0; i < totalPages; i += 1) {
      elemLi += `<li class="pagination__page"><button  class='pagination__btn' value="${currentPage}" type="button"
       >${currentPage + 1}</button></li>`;
      currentPage += 1;
    }
  } else if (totalPages > 6 && maxPage === 29) {
    elemLi += `<li class="pagination__page"><button class='pagination__btn' value="0" type="button">1</button></li>`;
    for (let i = 1; i < 6; i += 1) {
      currentPage += 1;
      elemLi += `<li class="pagination__page"><button class='pagination__btn' value="${currentPage}" type="button">${
        currentPage + 1
      }</button></li>`;
    }
    elemLi += `<li class="pagination__page"><button class='pagination__btn' type="button">...</button></li>
    <li class="pagination__page"><button class='pagination__btn' value="${
      maxPage - 1
    }" type="button">${maxPage}</button></li>`;
  }

  paginationIteam.innerHTML = elemLi;
}



// index.js
// module.exports = () => {
//   const data = { users: [] }
//   // Create 1000 users
//   for (let i = 0; i < 1000; i++) {
//     data.users.push({ id: i, name: `user${i}`
//     `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//         </li>`;
//       }).join('');
//       userList.insertAdjacentHTML('beforeend', markup);
//   }
//   return data
// }