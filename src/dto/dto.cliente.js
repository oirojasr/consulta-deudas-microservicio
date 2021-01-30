// Agregate
class cliente_dto {
    constructor(id, nombre, tipo_cliente ) {
      this.id = id;
      this.nombre = nombre;
      this.tipo_cliente = tipo_cliente;
      this.monto_deuda_total = 0;
      this.deudas = [];
    }
    // Agregar Deuda
    agregar_deuda(deudas) {
      this.deudas = [...this.deudas, ...deudas]
      this.calcular_deuda(deudas);
    }
    // Calcular deuda total
    calcular_deuda(deudas) {
      this.monto_deuda_total = (this.monto_deuda_total + deudas.reduce((sumar, deuda) => { return sumar + deuda.monto_deuda }, 0))
    }
  }

exports.cliente_dto = cliente_dto