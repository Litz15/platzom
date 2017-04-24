//Idioma inventado para aprender a manipular strings
export default function platzom(str) {
  let transalation = str

  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    transalation = str.slice(0, -2)
  }

  //SI la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    transalation += 'pe'
  }

  //Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guion del medio
  const length = transalation.length
  if (transalation.length >= 10) {
    const firstHalf = transalation.slice(0, Math.round(length/2))
    const secondHalf = transalation.slice(Math.round(length/2))
    transalation = `${firstHalf}-${secondHalf}`
  }

  //Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let transalation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      transalation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return transalation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  return transalation
}
