import CONFIG from '../../globals/config';
import 'lazysizes';
import lazySizes from 'lazysizes';

const panoHome = (pano) => `

<div class="restaurant-item">
<a class="touch-target" href="/#/detailRestorant/${pano.id}"><h2>${pano.name}</h2></a>
<picture>
  <img class="lazyload" src="${CONFIG.imageMedium + pano.pictureId}" alt="gambar-pano ${pano.pictureId}" crossorigin="annonymous">
 </picture>
  <p>City : ${pano.city}</p>
    <p>Ratting : ${pano.rating}⭐️</p>
    <p>${pano.description}</p><p></p>
</div>

`;

const detailPano = (panos) => `
  
  <div class="container">
    <div class="imageDetail">
      <img class="lazyload" class="pic" src="${CONFIG.imageMedium + panos.pictureId}" alt="gambar-pano ${panos.pictureId}" crossorigin="annonymous">
    </div>
    <a class="touch-target" href="/favorite">Favorite</a>
    <h2 class="name">${panos.name}</h2>
    <div class="detail">
      <p>Ratting : ${panos.rating}⭐️</p>
      <p>City : ${panos.city}</p>
      <p>Address : ${panos.address}</p>
    </div>
      <h2 class="desk">Deskripsi</h2>
      <p class="desk">${panos.description}</p>
  
    <div class="menu">
      <div class="menuIn">
        <h4>menu makanan</h4>
        <p>
          ${panos.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </p>
      </div>
      <div class="menuMinuman">
        <h4>menu minuman</h4>
        <p>
          ${panos.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </p>
      </div>
    </div>
    <div class="rev">
    <h4>Customer Reviews</h4>
      ${panos.customerReviews.map((customerReviews) => `<div class="revin">
        <h5>${customerReviews.name}</h5>
        <p>${customerReviews.review}</p>
        <p>${customerReviews.date}</p>
      </div>
      `).join('')}
    </div>
  </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this savorP" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnLikeRestaurantdButtonTemplate = () => `
  <button aria-label="unlike this savorP" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  detailPano,
  panoHome,
  createLikeRestaurantButtonTemplate,
  createUnLikeRestaurantdButtonTemplate,
};
