const PARENT_URL = 'homepage.';
const DESCRIPTION = 'Full-grain Horween Chromexcel® leather. Fully lined with natural calfskin. Blake Rapid Stitch welt construction. Oil-treated leather outsole. Tonal double stitch on cap toe and heel cup. Reinforced leather pull tab. HELM signature white composite rubber midsole adds style and extra cushion. HELM-embossed oil- and wax-treated leather outsole for water resistance and increased durability. Black rubber key heel strike. Antique brass eyelets. Brown waxed cotton laces';

export const headerMenu = [
  {
    title: 'MEN',
    url: PARENT_URL + 'men',
    categories: ['Rosen', 'Bab V2', 'Royale', 'Wooster', 'G-Knit']
  },
  {
    title: 'WOMEN',
    url: PARENT_URL + 'women',
    categories: ['Rosen', 'Bab V2', 'Royale', 'Wooster', 'G-Knit', 'Hirsh', 'Slide']
  },
  {
    title: 'STORY',
    url: PARENT_URL + 'story',
    categories: ['Rosen', 'Bab V2', 'Pronto', 'Wilson', 'Hirsh', 'Slide']
  }
];

export const hotProducts = [
  {
    image: 'laneslide.jpg',
  },
  {
    image: 'laneslide1.jpg',
  },
  {
    image: 'laneslide2.jpg',
  }
]

export const newProducts = [ // 4 products
  {
    name: 'Zind',
    price: '$399.00',
    image: 'ZIND_PRODUCTSHOT.jpg'
  },
  {
    name: 'Hooper Brown',
    price: '$295.00',
    image: 'HOOPER_PRODUCTSHOT_BROWN.jpg'
  },
  {
    name: 'Hooper Black',
    price: '$295.00',
    image: 'HOOPER_PRODUCTSHOT_BLACK.jpg'
  },
  {
    name: 'Muller Harrier Limited Edition',
    price: '$385.00',
    image: 'MULLERTEAK_HARRIER_PRODUCTSHOT.jpg'
  },
]

export const catalog = [
  {
    title: 'Men',
    image: 'H0052-04_1_250x_crop_top.jpg',
    url: PARENT_URL + 'men',
    products: [
      {
        name: 'Muller Brown Blucher',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'FALL15_WEB_PRODUCT_SHOT_PABLOBLACKWOMEN_345x550.jpg'
      },
      {
        name: 'Muller Black Blucher',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'FALL15_WEB_PRODUCT_SHOT_PABLOBLACKWOMEN_345x550.jpg'
      },
      {
        name: 'Muller Harrier Limited Edition',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'FALL15_WEB_PRODUCT_SHOT_PABLOBROWN_WOMENS_345x550.jpg'
      },
      {
        name: 'Marion Olive Blucher',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'FALL2015_PRODUCT_SHOTS_PABLOBROWN-1_345x550.jpg'
      },
      {
        name: 'Zind',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'FALL2015-PRODUCTSHOTS_PABLO_BLACK-1_345x550.jpg'
      },
      {
        name: 'Lane',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'HERITAGE_WEB_PRODUCT_SHOT_MARIONOLIVE_345x550.jpg'
      },
      {
        name: 'Lee Low',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'SPRING16_WEB_PRODUCT_SHOT_PHILLIPS_345x550.jpg'
      },
      {
        name: 'Lee Low Black',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'SPRING16_WEB_PRODUCT_SHOT_BENSONGRAY_345x550.jpg'
      },
      {
        name: 'Railroad Blucher Boot',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'SPRING16_WEB_PRODUCT_SHOT_BENSONBLACK_345x550.jpg'
      },
      {
        name: 'Pablo Black',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'ZIND_PRODUCTSHOT_001_345x550.jpg'
      },
      {
        name: 'Pablo Brown',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'HOOPER_PRODUCTSHOT_BLACK_001_345x550.jpg'
      },
      {
        name: 'Ayers Black',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'HOOPER_PRODUCTSHOT_BROWN_001_345x550.jpg'
      },
      {
        name: 'Sam Original Dress Boot',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'KIFFEN_FINAL_PRODUCTSHOT_01_345x550.jpg'
      },
      {
        name: 'Sam Black',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'KLEIN_MAIN_PRODUCT_SHOT-01-2_345x550.jpg'
      },
      {
        name: 'Pete Brown',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'LANE_MAIN_PRODUCT-01-WWW_345x550.jpg'
      },
      {
        name: 'Pete Black',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'LEELOW_BLK_PRODUCTSHOT_001_345x550.jpg'
      },
      {
        name: 'Garza',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'LEELOW_PRODUCTSHOT00000_345x550.jpg'
      }
    ]
  },
  {
    title: 'Women',
    image: 'FALL15_WEB_PRODUCT_SHOT_PABLOBLACKWOMEN_250x_crop_top.jpg',
    url: PARENT_URL + 'women',
    products: [
      {
        name: 'Muller Teak Blucher',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'H0052-04_1_250x_crop_top.jpg'
      },
      {
        name: 'Muller Brown Blucher',
        price: '$385.00',
        description: DESCRIPTION,
        image: 'FALL15_WEB_PRODUCT_SHOT_PABLOBLACKWOMEN_250x_crop_top.jpg'
      },
    ]
  }
];

export const size = [20,21,22,23,24,25,26,27,28,29,30];

export const footerMenu = ['COMPANY', 'HELP', 'CONTACT US'];

export default {
  headerMenu,
  hotProducts,
  newProducts,
  size,
  catalog,
  footerMenu
}