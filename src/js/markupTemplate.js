export function countryCardTemplate({ flag, name, capital, population, languages }) {
    return `
    <div class="country-card__container">
    <div class="country-card__wrapper">
    <img class="country-card__flags" src="${flag.svg}" alt="${
      name.official
    }" width="50" />
    <h2 class="country-card__name">${name.official}</h2>
     </div>
  <p class="country-card__capital">
  <span class="country-card__weight">Capital:</span>${capital}</p>
  <p class="country-card__population">
   <span class="country-card__weight">Population:</span>${population}</p>
  <p class="country-card__languages">
   <span class="country-card__weight">Languages:</span>${Object.values(
     languages
   )}</p> 
    </div>`;
}


export function countryListTemplate({ flag, name }) {
    return `
    <li class="country-list__item">
     <img class="country-list__flags" src="${flag.svg}" alt="${name.official}" width="50" />
     <p> class="country-list__name">${name.official}</p>
    </li>
    `;
}