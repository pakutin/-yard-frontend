const apiLink = 'https://yard.moscow/api/v1';
export default function get(request) {
  return fetch(encodeURI(apiLink + request)).then(response => response.json());
}
