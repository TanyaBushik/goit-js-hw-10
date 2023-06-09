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
      .then(result => {
        if (result.length > 10) {
          Notify.info(
            'Too many matches found. Please enter a more specific name.');
          return;
        }

   if (result.length === 1) {
     countryList.innerHTML = '';
     countryInfo.innerHTML = countryCardTemplate(result);

    //  countryCardTemplate(result);
   }

   if (result.length >= 2 && result.length <= 10) {
     countryInfo.innerHTML = '';
     countryList.innerHTML = countryListTemplate(result);
    //  countryListTemplate(result);
   }

      })
        .catch(error => {
            if(error.message === '404')
            Notify.failure('Oops, there is no country with that name');
            clearInput();
            console.log(error);
      });
}

// function countryCardTemplate(result) {
//   const cardMarkup = result
//     .map(({ flags, name, capital, population, languages }) => {
//       languages = Object.values(languages).join(', ');
//       return /*html*/ `
//             <img src="${flags.svg}" alt="${name}" width="320" height="auto">
//             <p> ${name.official}</p>
//             <p>Capital: <span> ${capital}</span></p>
//             <p>Population: <span> ${population}</span></p>
//             <p>Languages: <span> ${languages}</span></p>`;
//     })
//     .join('');
//   countryInfo.innerHTML = cardMarkup;
//   return cardMarkup;
// }

// function countryListTemplate(result) {
//   const listMarkup = result
//     .map(({ name, flags }) => {
//       return /*html*/ `<li>
//                         <img src="${flags.svg}" alt="${name}" width="60" height="auto">
//                         <span>${name.official}</span>
//                 </li>`;
//     })
//     .join('');
//   countryList.innerHTML = listMarkup;
//   return listMarkup;
// }


function clearInput() {
     countryList.innerHTML = '';
     countryInfo.innerHTML = '';
}
