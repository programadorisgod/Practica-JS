
class Ingreso extends Dato{
   static contadorIngreso = 0;

   constructor(descripcion, valor){
       super(descripcion,valor);
       this._idIngreso = ++Ingreso.contadorIngreso;
   }

   getId(){
    return this._idIngreso;
   }
}