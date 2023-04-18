const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function countryCardTemplate(result) {
  console.log(result);
  const cardMarkup = result
    .map(({ flags, name, capital, population, languages }) => {
      languages = Object.values(languages).join(', ');
      return /*html*/ `
            <img src="${flags.svg}" alt="${name}" width="320" height="auto">
            <h1 class="country-info__title"> ${name.official}</h1>
            <p class ="country-info__list">Capital: <span> ${capital}</span></p>
            <p class ="country-info__list">Population: <span> ${population}</span></p>
            <p class ="country-info__list">Languages: <span> ${languages}</span></p>`;
    })
    .join('');
  countryInfo.innerHTML = cardMarkup;
  return cardMarkup;
}

export function countryListTemplate(result) {
  console.log(result);
  const listMarkup = result
    .map(({ name, flags }) => {
      return /*html*/ `<li class="country-list__item">
                        <img src="${flags.svg}" alt="${name}" width="60" height="auto">
                        <span>${name.official}</span>
                </li>`;
    })
    .join('');
  countryList.innerHTML = listMarkup;
  return listMarkup;
}
