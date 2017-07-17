const baseLink = 'https://yard.moscow/api/v1';


/*eslint-disable */
export function get(url) {
  return fetch(encodeURI(baseLink + url)).then(response => response.json());
}
/*eslint-enable */

