// Simulamos consulta a SQL Server obteniendo las deudas
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// Simulamos consulta a SQL Server obteniendo las deudas
class sqlserver {
  constructor(idcliente) {
    this.idcliente = idcliente
  }
    obtener_deuda() {
      return [{ origen: "e-commerce", monto_deuda: getRandomInt(1000)}]
    }
  }

exports.sqlserver = sqlserver