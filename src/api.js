const apiLink = 'https://yard.moscow/api/v1';

export default function request(address, params) {
  return fetch(encodeURI(apiLink + address), params).then(response => response.json());
}
