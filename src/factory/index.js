const Yenv = require('yenv')
const { equifax } = require('./equifax')
const { sqlserver } = require('./sqlserver')
const env = new Yenv()

class factory {
  static instance(fuente_deuda, idcliente) {
    let fns
    switch (fuente_deuda) {
      case 'Equifax':
        fns = new equifax(idcliente);
        break
      case 'SqlServer':
        fns = new sqlserver(idcliente);
        break
      default:
        fns = ''
        break
    }
    return fns
  }
}

exports.factory = factory