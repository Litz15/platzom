const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {

  it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
    const transalation = platzom("Programar")
    expect(transalation).to.equal("Program")
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
    const transalation = platzom("Zorro")
    const transalation2 = platzom("Zarpar")

    expect(transalation).to.equal("Zorrope")
    expect(transalation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guion del medio', function () {
    const transalation = platzom("abecedario")
    expect(transalation).to.equal("abece-dario")
  })

  it('Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas', function () {
    const transalation = platzom("sometemos")
    expect(transalation).to.equal("SoMeTeMoS")
  })

})
