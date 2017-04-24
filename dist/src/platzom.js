'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
//Idioma inventado para aprender a manipular strings
function platzom(str) {
  var transalation = str;

  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    transalation = str.slice(0, -2);
  }

  //SI la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    transalation += 'pe';
  }

  //Si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guion del medio
  var length = transalation.length;
  if (transalation.length >= 10) {
    var firstHalf = transalation.slice(0, Math.round(length / 2));
    var secondHalf = transalation.slice(Math.round(length / 2));
    transalation = firstHalf + '-' + secondHalf;
  }

  //Si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var length = str.length;
    var transalation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      transalation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return transalation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return transalation;
}