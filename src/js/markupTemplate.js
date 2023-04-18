export function countryCardTemplate(result) {
    const cardMarkup = result.map(({ flags, name, capital, population, languages }) => {
        languages = Object.values(languages).join(", ");
        return /*html*/ `
            <img src="${flags.svg}" alt="${name}" width="320" height="auto">
            <p> ${name.official}</p>
            <p>Capital: <span> ${capital}</span></p>
            <p>Population: <span> ${population}</span></p>
            <p>Languages: <span> ${languages}</span></p>`;
    }).join('');
    countryInfo.innerHTML = cardMarkup;
    return cardMarkup;
}

 export function countryListTemplate(result) {
   const listMarkup = result
     .map(({ name, flags }) => {
       return /*html*/ `<li>
                        <img src="${flags.svg}" alt="${name}" width="60" height="auto">
                        <span>${name.official}</span>
                </li>`;
     })
     .join('');
   countriesList.innerHTML = listMarkup;
   return listMarkup;
 }

