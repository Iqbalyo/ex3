
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restorant-idb";
import * as TestFactories from './testFactories';

describe('Liking A savorP', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the savorP has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: 1,
    //   },
    // });

    expect(document.querySelector('[aria-label="like this savorP"]')).toBeTruthy();
   });

  it('should not show the unlike button when the savorP has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: 1,
    //   },
    // });

    expect(document.querySelector('[aria-label="unlike this savorP"]')).toBeFalsy();
  });

  it('should be able to like the savorP', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: 1,
    //   },

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
 
    await FavoriteRestaurantIdb.deleteRestaurant(1);


    });

  it('should not add a savorP again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {
    //     id: 1,
    //   },

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
 
    // Tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
 
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    });


  it('should not add a savorP again when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
 
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
 
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
   
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   restaurant: {},
    });
  });
    // document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    // const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    // expect(restaurant).toEqual({ id: 1 });

    // await FavoriteRestaurantIdb.deleteRestaurant(1);


     // Tambahkan film dengan ID 1 ke daftar film yang disukai
    //  await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    //
     // Tidak ada film yang ganda
    //
    //  await FavoriteRestaurantIdb.deleteRestaurant(1);

    // it('should show the like button when the savorP has not been liked before', async () => {
      
    //   await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
      
      
    //   await FavoriteRestaurantIdb.deleteRestaurant(1);

    //   document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    //   expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);

    //   await FavoriteRestaurantIdb.deleteRestaurant(1);

