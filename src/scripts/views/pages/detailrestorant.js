import UrlParser from '../../routes/url-parser';
import Panorama from '../../data/data-restaurant-panorama';
import { detailPano } from '../templat/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const detailRestorant = {
  async render() {
    return `
            
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const panos = await Panorama.restoDetailPage(url.id);
    const savcontainer = document.querySelector('#restaurant');
    savcontainer.innerHTML = detailPano(panos);

    const restaurant = {
      id: panos.id,
      name: panos.name,
      city: panos.city,
      address: panos.address,
      rating: panos.rating,
      description: panos.description,
      pictureId: panos.pictureId,
    };

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant, // Pastikan restaurant didefinisikan di sini
    });
  },
};

export default detailRestorant;
