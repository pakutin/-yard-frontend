const baseLink = 'https://api.jqestate.ru/v1/complexes';

/*eslint-disable */
export function get(url) {
  return fetch(encodeURI(baseLink + url)).then(response => response.json());
}
/*eslint-enable */
