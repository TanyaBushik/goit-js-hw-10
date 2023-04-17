import './css/styles.css';
import { fetchCountries} from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import {countryCardTemplate, countryListTemplate} from './js/markupTemplate'

const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

searchBox.addEventListener(
  'input',
  debounce(onCountrySearch, DEBOUNCE_DELAY)
);

function onCountrySearch(e) {
    e.preventDefault()

    const name = searchBox.value.trim();
    if (name === '') {
        countryList.innerHTML = '';
        countryInfo.innerHTML = '';
        return;
    }

fetchCountries(name).then()
}
