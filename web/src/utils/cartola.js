export const getFixtures = () => {
  const Httpreq = new XMLHttpRequest()
  Httpreq.open('GET', 'https://api.cartolafc.globo.com/partidas', false)
  Httpreq.send()
  return Httpreq.responseText
}
