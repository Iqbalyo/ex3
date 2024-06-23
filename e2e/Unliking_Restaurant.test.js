Scenario('unliking one restaurant', async ({ I }) => {
   
    I.amOnPage('/#/like');
    
    const numberOfLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
    if (numberOfLikedRestaurants === 0) {
     
      throw new Error('No liked restaurants to unlike');
    }
  

    const firstLikedRestaurant = locate('.restaurant-item .restaurant__title').first();
    const firstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);

    I.click('#unlikeButton');
  
    
    const isRestaurantVisible = await I.grabNumberOfVisibleElements(`//*[contains(text(), '${firstLikedRestaurantTitle}')]`);
    assert.strictEqual(isRestaurantVisible, 0, 'The unliked restaurant is still visible in the liked list');
  });
  