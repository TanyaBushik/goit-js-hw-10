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

    const countryName = searchBox.value.trim();
    if (countryName === '') {
     clearInput();
      return;
    }

    fetchCountries(countryName)
      .then(countries => {
        if (countries.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          clearInput();
          return;
        }

          if (countries.length >= 2 && countries.length <= 10) {
            
               const listMarkup = countries.map(country =>
                 countryListTemplate(country)
               );
               countryList.innerHTML = listMarkup.join('');
               countryInfo.innerHTML = '';
        //   const markupList = countries.map(
        //     country => countryListTemplate(country),
        //     (countryList.innerHTML = markupList.join('')),
        //     (countryInfo.innerHTML = '')
        //   );
        }

          if (countries.length === 1) {
            
              const markup = countries.map(country =>
                countryCardTemplate(country)
              );
              countryInfo.innerHTML = markup.join('');
              countryList.innerHTML = '';
        //   const markup = countries.map(
        //     country => countryCardTemplate(country),
        //     (countryInfo.innerHTML = markup.join('')),
        //     (countryList.innerHTML = '')
        //   );
        }
      })
        .catch(error => {
            Notify.failure('Oops, there is no country with that name');
            clearInput();
            return error;
      });
}


function clearInput() {
     countryList.innerHTML = '';
     countryInfo.innerHTML = '';
}
