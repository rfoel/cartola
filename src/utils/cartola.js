export const getFixtures = () => {
  const options = {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  return fetch('https://api.cartolafc.globo.com/partidas', options).then(response => {
    return response
  })
}
