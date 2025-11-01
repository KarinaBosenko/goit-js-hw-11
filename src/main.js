import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const searchText = document.querySelector('[name="search-text"]');

form.addEventListener('submit', searchImage);

function searchImage(event) {
  event.preventDefault();
  clearGallery();
  showLoader();

  const text = searchText.value.trim();

  if (!text) {
    iziToast.warning({
      message: 'Enter a search word!',
      position: 'topRight',
    });
    hideLoader();
    return;
  }

  getImagesByQuery(text)
    .then(({ data }) => {
      if (data.hits.length <= 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Oops! Something went wrong. Try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      form.reset();
      hideLoader();
    });
}
