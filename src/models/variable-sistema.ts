export class VariableSistema {
  nombre: string;
  valor: string;

  constructor(data: any) {
    this.nombre = data.nombre;
    this.valor = data.valor;
  }
}
