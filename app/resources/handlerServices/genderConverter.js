export const toCatalog = (gender) => {
  switch (gender) {
    case 'male':
      return 'men';
    default:
      return 'women';
  }
}

export const toGender = (catalog) => {
  switch (catalog) {
    case 'men':
      return 'male';
    default:
      return 'female';
  }
}

export default {
  toCatalog,
  toGender
}