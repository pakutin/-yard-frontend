const baseLink = 'https://yard.moscow/api/v1';

export default function request(url, action, data) {
  return fetch(encodeURI(baseLink + url), {
    method: action,
    body: data,
  }).then(response => response.json());
}
