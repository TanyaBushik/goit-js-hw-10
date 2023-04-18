export function fetchCountries(name) {
  const url = 'https://restcountries.com/v3.1/name/';
  const filter = 'fields=name,capital,population,languages,flags';
  return fetch(`${url}${name}?${filter}`).then(response => {
    if (response.status === 404) {
      throw new Error(response.status);
    }
      return response.json();
     
  });
}

// export function fetchCountries(name) {
//   const url = 'https://restcountries.com/v3.1/name/';
//   const filter = '?fields=name,capital,population,flags,languages';
//     return fetch(`${url}${name}${filter}`)
//       .then(response => response.json())
//       .catch(error => console.log(error));
// }