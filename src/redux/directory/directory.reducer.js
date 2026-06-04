const INITIAL_STATE = {
    sections: [
      {
        title: 'hats',
        imageUrl: 'https://e7.pngegg.com/pngimages/913/334/png-clipart-beanie-ski-cap-beanie-cap-thumbnail.png',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://w7.pngwing.com/pngs/77/368/png-transparent-leather-jacket-flight-jacket-collar-jacket-levis-zipper-leather-black-thumbnail.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://e7.pngegg.com/pngimages/204/209/png-clipart-unpaired-black-white-and-red-air-jordan-shoe-air-jordan-shoe-sneakers-nike-jordan-spizike-air-jordan-basketball-shoes-white-fashion-thumbnail.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://w7.pngwing.com/pngs/890/454/png-transparent-blouse-elegant-floral-blouse-thumbnail.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://w7.pngwing.com/pngs/382/866/png-transparent-suit-shirt-tangzhuang-clothing-jacket-men-s-costume-shirt-burgundy-dragon-tshirt-chinese-style-dragon-thumbnail.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;
