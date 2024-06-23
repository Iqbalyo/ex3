
import FavoriteRestaurantIdb from "../../data/favorite-restorant-idb";
import { panoHome } from "../templat/template-creator";

const LikePage = {
    async render() {
        return `
        <div class="pano">
            <h1 class="title">Daftar Restoran Favorit</h1>
            <div id="item" class="container content" >
            
            </div>
        </div>
        `;
    },

    async afterRender() {
        const restoPano = await FavoriteRestoIdb.getAllRestaurant();
        const restoSavorContainer = document.querySelector('#item');
        if (restoPano.length === 0) {
            restoSavorContainer.innerHTML = '<div class="no-resto">Tidak ada restoran untuk ditampilkan</div>';
        } else {
            restoPano.forEach((restoPano) => {
                restoSavorContainer.innerHTML += restoMain(pano);
            });
        }
    },
};

export default LikePage;