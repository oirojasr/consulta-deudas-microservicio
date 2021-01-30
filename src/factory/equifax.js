// Random de supuestas deudas usadas para examen
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// Simulamos consulta a Infocorp (equifax) obteniendo las deudas
class equifax {
  constructor(idcliente) {
    this.idcliente = idcliente
  }
    obtener_deuda() {
      return [{ origen: "Interbank", monto_deuda: getRandomInt(1000)},
              { origen: "Scotiabank", monto_deuda: getRandomInt(1000)}]
    }
  }

exports.equifax = equifax