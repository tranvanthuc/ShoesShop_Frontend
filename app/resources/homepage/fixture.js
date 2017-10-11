const PARENT_URL = 'homepage.';

export const headerMenu = [
  {
    title: 'MEN',
    url: PARENT_URL + 'men'
  },
  {
    title: 'WOMEN',
    url: PARENT_URL + 'women'
  },
  {
    title: 'CATEGORIES',
    url: PARENT_URL + 'men'
  },
  {
    title: 'STORY',
    url: PARENT_URL + 'story'
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
    url: PARENT_URL + 'men'
  },
  {
    title: 'Women',
    image: 'FALL15_WEB_PRODUCT_SHOT_PABLOBLACKWOMEN_250x_crop_top.jpg',
    url: PARENT_URL + 'women'
  }
]

export const footerMenu = ['COMPANY', 'HELP', 'CONTACT US'];

export default {
  headerMenu,
  hotProducts,
  newProducts,
  catalog,
  footerMenu
}