import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restorant-idb";
import * as TestFactories from './testFactories';
describe('Unliking A savorP', () => {
    const addLikeButtonContainer = () => {
      document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };
   
    beforeEach(async () => {
      addLikeButtonContainer();
      await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    });
   
    afterEach(async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(1);
    });
   
    it('should display unlike widget when the savorP has been liked', async () => {
      await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
      expect(document.querySelector('[aria-label="unlike this savorP"]')).toBeTruthy();
    });

    it('should not display like widget when the savorP has been liked', async () => {
      await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
      expect(document.querySelector('[aria-label="like this savorP"]')).toBeFalsy();

    });

    it('should be able to remove liked savorP from the list', async () => {
      await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
      document.querySelector('[aria-label="unlike this savorP"]').dispatchEvent(new Event('click'));
      expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
    // it('should display unlike widget when the savorP has been liked', async () => {
    //   await LikeButtonInitiator.init({
    //     likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //     restaurant: {
    //       id: 1,
    //     },
    //   });
   
    //   expect(document.querySelector('[aria-label="unlike this savorP"]')).toBeTruthy();
    // });
   
    it('should not display like widget when the savorP has been liked', async () => {
      // await LikeButtonInitiator.init({
      //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
      //   restaurant: {
      //     id: 1,
      //   },

      await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
      // Hapus dulu film dari daftar film yang disukai
      await FavoriteRestaurantIdb.deleteRestaurant(1);
   
      // Kemudian, simulasikan pengguna menekan widget batal menyukai film
      document.querySelector('[aria-label="unlike this savorP"]').dispatchEvent(new Event('click'));
   
      expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
      });
   
    //   expect(document.querySelector('[aria-label="like this savorP"]')).toBeFalsy();

    // it('should be able to remove liked savorP from the list', async () => {
    //     await LikeButtonInitiator.init({
    //       likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //       savor: {
    //         id: 1,
    //       },
    //     });
    //     document.querySelector('[aria-label="unlike this savorP"]').dispatchEvent(new Event('click'));
    //     expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);

    // it('should not throw error when user click unlike widget if the unliked savorP is not in the list', async () => {
    //     await LikeButtonInitiator.init({
    //       likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //       restaurant: {
    //         id: 1,
    //       },
    //     });
    //     // Hapus dulu film dari daftar film yang disukai
    //     await FavoriteRestaurantIdb.deleteRestaurant(1);
    //     // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    //     document.querySelector('[aria-label="unlike this savorP"]').dispatchEvent(new Event('click'));
    //     expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
    });
