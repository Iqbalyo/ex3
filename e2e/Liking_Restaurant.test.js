// // Feature('Liking Restaurant');


// // Before(({ I }) => {
// //     I.amOnPage('/#/like');
// //   });

// // Scenario('showing empty liked savorP',  ({ I }) => {
// //     // I.seeElement('#query');
// //     // I.see('Tidak ada restaurant untuk ditampilkan', '.savorP-item__not__found');

    
// // });

// Scenario('liking one savorP', async ({ I }) => {
//   I.see('Tidak ada restaurat untuk ditampilkan', '.savorP-item__not__found');
//   I.amOnPage('/');

//   I.seeElement('.savorP__title a');
//   const firstSavorP = locate('.savorP__title a').first();
//   const firstSavorPTitle = await I.grabTextFrom(firstSavorP);
//   I.click(firstSavorP);

  
  
//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/like');
//   I.seeElement('.savorP-item');

//   const likedSavorPTitle = await I.grabTextFrom('.savorP__title');
 
//   assert.strictEqual(firstSavorPTitle, likedSavorPTitle);
// });


Scenario('liking one savorP', async ({ I }) => {
  /* ...kode lainnya disembunyikan... */
});
 
Scenario('searching SavorsP', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
 
  I.amOnPage('/');
 
  I.seeElement('.restaurant__title a');
 
  const titles = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant__title a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    // eslint-disable-next-line no-await-in-loop
    titles.push(await I.grabTextFrom('.restaurant__title'));
    I.amOnPage('/');
  }
 
  I.amOnPage('/#/like');
  I.seeElement('#query');
 
  const visibleLikedRestaurant = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(titles.length, visibleLikedRestaurant);
});