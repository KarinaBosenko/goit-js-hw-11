import axios from 'axios';

const API_KEY = '53039261-652763fc75278139e9d77d75b';

export default function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
