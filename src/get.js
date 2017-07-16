const apiLink = 'https://yard.moscow/api/v1';

export default function get(data) {
  return fetch(encodeURI(apiLink + data)).then(response => response.json());
}
