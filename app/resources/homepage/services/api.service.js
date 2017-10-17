/* @ngInject */
export default $http => {
  return (url, { ...options }) => {
    return $http({
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      url: 'https://calm-dawn-66282.herokuapp.com/' + url,
      ...options
    })
  }
}