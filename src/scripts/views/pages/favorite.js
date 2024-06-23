import FavoriteRestaurantIdb from '../../data/favorite-restorant-idb';
import { panoHome } from '../templat/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="fav">
        </div>
      `;
  },

  async afterRender() {
    const favi = document.querySelector('.fav');
    const panoList = await FavoriteRestaurantIdb.getAllRestaurant(); // Mengubah nama variabel
    favi.innerHTML = panoHome(panoList);
    if (panoList.length === 0) {
      favi.innerHTML = '<div>Kosong</div>';
    } else {
      panoList.forEach((panoItem) => { // Mengubah nama variabel
        favi.innerHTML = panoHome(panoItem);
      });
    }
  },
};

export default Favorite;
