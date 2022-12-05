import { countries } from './countries';
import { markapCountryList } from './select-country-markup';
import { displayGallery } from './displayGallery';

const refs = {
  selectCountryBtn: document.querySelector('.select-country-btn'),
  countrylist: document.querySelector('.country_list'),
  selectCountryField: document.querySelector('.select__field'),
  keyword: document.querySelector('.keyword'),
  gallary: document.querySelector('.gallery-section'),
};

let countryCode = '';
let keyword = '';

refs.selectCountryBtn.addEventListener('click', onSelectCountryBtnHdlr);
refs.countrylist.addEventListener('click', onCountrylistHdlr);
refs.keyword.addEventListener('input', onKeywordHdlr);

function onSelectCountryBtnHdlr(e) {
  e.preventDefault();

  refs.countrylist.innerHTML = markapCountryList(countries);
  refs.countrylist.classList.toggle('visually-hidden');
}

function onCountrylistHdlr(e) {
  if (e.target.dataset.id === 'RU') {
    refs.gallary.innerHTML = `<h1 class="ru">РУССКИЙ ВОЕННЫЙ КОРАБЛЬ!<br>ИДИ НАХУЙ</h1>`;
  }
  refs.selectCountryField.placeholder = e.target.textContent;
  refs.countrylist.classList.add('visually-hidden');
  countryCode = e.target.dataset.id;
  displayGallery({ countryCode, keyword });
}

function onKeywordHdlr(e) {
  keyword = e.currentTarget.value;
  displayGallery({ countryCode, keyword });
}
