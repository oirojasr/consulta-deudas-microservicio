const Yenv = require('yenv')
const axios = require('axios')
const { cliente_dto } = require('../dto/dto.cliente')
const { factory } = require('../factory')
const env = new Yenv()

class Service {
  async obtenerDatos(id) {
    try {
      let send = null
      const config = {
        headers: { 
        "Content-Type" : "application/json",
        }
      }
      const url = `${env.URL_API}`
      // Simulamos q consultamos a un api Cliente
      const respuesta = await axios
      .get(url, config)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return {error: "Error al obtener información"}
      })
      const data = respuesta.filter(x => x.id === parseInt(id))[0]
      const dto = new cliente_dto(data.id, data.title, data.userId);

      const fnsEquifax = factory.instance('Equifax', data.id)
      const fnsSqlServer = factory.instance('SqlServer', data.id)

      dto.agregar_deuda(fnsEquifax.obtener_deuda())
      dto.agregar_deuda(fnsSqlServer.obtener_deuda())
      return dto
    } catch (e) {
      console.log(e)
      return { resultado: "no se encontró dato"}
    }
  }
}

exports.Service = Service