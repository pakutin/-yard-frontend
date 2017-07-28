const baseLink = 'https://yard-api.now.sh/';

/*eslint-disable */
export function get(url) {
  return fetch(encodeURI(baseLink + url)).then(response => response.json());
}
/*eslint-enable */
