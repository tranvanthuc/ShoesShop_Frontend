export default gender => {
  switch (gender) {
    case 'male':
      return 'men';
    default:
      return 'women';
  }
}