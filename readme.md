MICROSERVICIO DE CONSULTA DE DEUDAS
===================================

Definición:
Realiza consulta de deudas en sqlServer (información de empresa) y equifax (proveedor externo) de un cliente por medio de su id cliente.

Desarrollo implementado para examen:
- Orquesta más de una entidad (patrón Aggregate).
- Implementado patrón factory (para validar desde la bd de la empresa y por el proveedor externo equifax)

Input Example:
http://localhost:3001/cliente/validar-morosidad/6

Output Example:
{
	"id": 6,
	"nombre": "qui ullam ratione quibusdam voluptatem quia omnis",
	"tipo_cliente": 1,
	"monto_deuda_total": 1739,
	"deudas": [
		{
			"origen": "Interbank",
			"monto_deuda": 974
		},
		{
			"origen": "Scotiabank",
			"monto_deuda": 669
		},
		{
			"origen": "e-commerce",
			"monto_deuda": 96
		}
	]
}
