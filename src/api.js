const baseLink = 'https://yard.moscow/api/v1';

export default function get(url) {
  return fetch(encodeURI(baseLink + url)).then(response => response.json());
}
