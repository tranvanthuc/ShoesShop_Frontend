const PARENT_URL = 'admin.';

export const managementMenu = [
  {
    title: 'Categories',
    icon: 'fa-th-list',
    url: PARENT_URL + 'category'
  },
  {
    title: 'Sizes',
    icon: 'fa-object-ungroup',
    url: PARENT_URL + 'size'
  },
  {
    title: 'Products',
    icon: 'fa-tags',
    url: PARENT_URL + 'product'
  },
  {
    title: 'Shop',
    icon: 'fa-university',
    url: PARENT_URL + 'shop'
  },
  {
    title: 'Invoices',
    icon: 'fa-credit-card',
    url: PARENT_URL + 'category'
  },
  {
    title: 'Users',
    icon: 'fa-users',
    url: PARENT_URL + 'category'
  },
  {
    title: 'Roles',
    icon: 'fa-universal-access',
    url: PARENT_URL + 'category'
  },
  {
    title: 'Feedback',
    icon: 'fa-comments',
    url: PARENT_URL + 'category'
  }
];

export const categories = [
  {
    name: 'jelly shoes',
    gender: 2
  },
  {
    name: 'classic boots',
    gender: 1
  },
  {
    name: 'sandal',
    gender: 1
  },
  {
    name: 'high-heeled',
    gender: 3
  },
  {
    name: 'goft shoes',
    gender: 3
  },
  {
    name: 'chef shoes',
    gender: 1
  },
  {
    name: 'roman sandals',
    gender: 2
  },
  {
    name: 'rounded toe shoes',
    gender: 3
  },
  {
    name: 'chef shoes',
    gender: 1
  },
  {
    name: 'roman sandals',
    gender: 2
  },
  {
    name: 'rounded toe shoes',
    gender: 3
  },
  {
    name: 'chef shoes',
    gender: 1
  },
  {
    name: 'roman sandals',
    gender: 2
  },
  {
    name: 'rounded toe shoes',
    gender: 3
  },
  {
    name: 'chef shoes',
    gender: 1
  },
  {
    name: 'roman sandals',
    gender: 2
  },
  {
    name: 'rounded toe shoes',
    gender: 3
  },
];

export const size = [20,21,22,23,24,25,26,27,28,29,30];

export const products = [
  {
    name: 'Casual Booties',
    size: size[0],
    price: 120000,
    amount: 100,
    image: null
  },
  {
    name: 'Comfort Flats',
    size: size[1],
    price: 150000,
    amount: 50,
    image: null
  },
  {
    name: 'Leopard Print',
    size: size[0],
    price: 120000,
    amount: 100,
    image: null
  },
  {
    name: 'Riding Boots',
    size: size[5],
    price: 120000,
    amount: 100,
    image: null
  },
  {
    name: 'Vans Old Skool',
    size: size[4],
    price: 120000,
    amount: 100,
    image: null
  },
  {
    name: 'Classic Short I',
    size: size[6],
    price: 120000,
    amount: 100,
    image: null
  },
  {
    name: 'Classic Short II',
    size: size[0],
    price: 120000,
    amount: 100,
    image: null
  },
  {
    name: 'Classic Tall I',
    size: size[1],
    price: 120000,
    amount: 100,
    image: null
  },
  {
    name: 'Classic Tall II',
    size: size[0],
    price: 120000,
    amount: 100,
    image: null
  },
]

export const shop = {
  name: 'Zappos',
  description: "In 2007, Ryan Babenzien and Jon Buscemi had discussed an early idea for GREATS but didn't do anything with it. Then, in late 2012 they got together and said, 'What if?' What if we built a vertical men's and women's footwear brand that made high quality product and sold it direct to the consumer at a value price. And with the idea of building a better sneaker for less, GREATS was beta launched in August 2013 and quickly became an instant 'Classic' selling out of most styles within 90 days and as GQ says 'Shaking up the sneaker to store inventory flow' and as FORBES says 'Greats is building the next great footwear company.'",
  address: '123 ABC Street, New York',
  phone: '01223200426',
  email: 'info@greatsbrand.com'
}

export default {
  managementMenu,
  categories,
  size,
  products,
  shop
}