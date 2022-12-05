import { debounce } from 'debounce';
import { countries } from './countries';
import { markapCountryList } from './select-country-markup';
import { displayGallery } from './displayGallery';
import { findeCountry } from './select-country-markup';

const refs = {
  selectCountryField: document.querySelector('.select-country'),
  // selectCountryBtn: document.querySelector('.select-country-btn'),
  galleryList: document.querySelector('.gallery__list'),
  countrylistThumb: document.querySelector('.country_list-thumb'),
  countrylist: document.querySelector('.country_list'),
  keyword: document.querySelector('.keyword'),
  searchSvg: document.querySelector('.search__svg'),
  selectSvg: document.querySelector('.select__svg'),
};

let countryCode = '';
let keyword = '';

refs.selectCountryField.addEventListener(
  'input',
  debounce(onSelectCountryFieldHdlr, 500)
);
refs.selectCountryField.addEventListener('focus', onSelectCountryFocusHdlr);
refs.selectCountryField.addEventListener('blur', onSelectCountryBlurHdlr);
refs.countrylist.addEventListener('click', onCountrylistHdlr);
refs.keyword.addEventListener('input', debounce(onKeywordHdlr, 500));
refs.keyword.addEventListener('focus', onKeywordFocusHdlr);
refs.keyword.addEventListener('blur', onKeywordBlurHdlr);

function onSelectCountryFieldHdlr(e) {
  const filterCountries = findeCountry(e.target.value, countries);
  refs.countrylist.innerHTML = markapCountryList(filterCountries);
  refs.selectCountryField.classList.add('select__field');
  refs.countrylistThumb.classList.remove('is-hidden');
}

function onSelectCountryFocusHdlr(e) {
  e.preventDefault();

  refs.countrylist.innerHTML = markapCountryList(countries);
  refs.countrylistThumb.classList.toggle('is-hidden');
  refs.selectCountryField.classList.toggle('select__field');
  refs.selectCountryField.placeholder = 'Choose country';
  refs.selectSvg.classList.add('focus');
}

function onSelectCountryBlurHdlr(e) {
  refs.countrylistThumb.classList.add('is-hidden');
  refs.selectCountryField.classList.remove('select__field');
  refs.selectSvg.classList.remove('focus');
}

function onCountrylistHdlr(e) {
  countryCode = e.target.dataset.id;

  if (countryCode === 'RU') {
    refs.galleryList.innerHTML = `<li class="ru"><h1>РУССКИЙ ВОЕННЫЙ КОРАБЛЬ!<br>ИДИ НАХУЙ!!!</h1><img
  src="https://blackbee.odessa.ua/wp-content/uploads/2022/04/russkij-voennyj-korabl-idi-foto.jpg"
  alt="РУССКИЙ ВОЕННЫЙ КОРАБЛЬ! ИДИ НАХУЙ!!!"
  width="1200"
/></li>`;
    refs.selectCountryField.placeholder = 'Choose another country';
  } else {
    refs.selectCountryField.placeholder = e.target.textContent;
    displayGallery({ countryCode, keyword });
  }
  refs.countrylistThumb.classList.add('is-hidden');
  refs.selectCountryField.classList.remove('select__field');
  refs.selectCountryField.value = '';
}

function onKeywordHdlr(e) {
  keyword = e.target.value;
  displayGallery({ countryCode, keyword });
}

function onKeywordFocusHdlr() {
  refs.searchSvg.classList.add('focus');
}

function onKeywordBlurHdlr(e) {
  refs.searchSvg.classList.remove('focus');
}
