var assert = require("assert");
//ejercicio1 Escriba una funcion que reciba como parametro numInicial y numFinal
//de como resultado la suma de los numeros del 1 al 10
function Sumando(numInicial, numFinal)
{
  var objeto = {
    inicio: numInicial,
    fin: numFinal
  };
  var acumulador = 0;
  for(var i = objeto.inicio; i <= objeto.fin; i++)
  {
    acumulador += i;
  }
  return acumulador;
}
//Prueba unitaria del ejercicio 1
describe("ejercicios de objetos 1", function(){
    it("Suma del 1 al 10", function(){
      assert.equal(55, Sumando(1,10));
    });
});
//ejercicios2
function Datos(nombre, edad, ocupacion, genero)
{
	this.nombre = nombre;
	this.edad = edad;
	this.ocupacion = ocupacion;
	this.genero = genero;
	this.mensaje = function(){
		if(this.edad > 17 && this.genero.toLowerCase() == "femenino")
		{
			if(this.ocupacion.toLowerCase() == "web developer" || this.ocupacion.toLowerCase() == "estudiante laboratoria")
			{
			return "You're awesome";
			}
			else
			{
				return "Upsiii";
			}
		}
		return "Upsiii";
	}
}

//Prueba unitaria del ejercicio 2
describe("ejercicios de objetos 2", function(){
    it("que debuelva You are awesome", function(){
      var respuesta = new Datos("Tania",22,"Estudiante Laboratoria", "Femenino");
      assert.equal("You're awesome",respuesta.mensaje());
    });
});

//ejercicio3
function palabras(arreglo)
{
	var palabra = new Object();
	for(var i = 0; i<arreglo.length; i++)
		{
			var j = i +1;
			palabra["propiedad" + j]= arreglo[i];
		}
		var respuesta = Object.keys(palabra);//aqui imprimimos ["propiedad" + j]
		//esto funciona aparte
		var acumulador = "";
		for(var z = 0; z < respuesta.length ; z++)
		{
			acumulador += respuesta[z] + "-->" + arreglo[z] + ";";
		}
		return acumulador.substr(0,acumulador.length -1);
}
//pruebas unitarias del ejercicio 3
describe("ejercicios de objetos 3", function(){
  it("de [6,5,4,3,2,1]", function(){
    assert.equal("propiedad1-->6;propiedad2-->5;propiedad3-->4;propiedad4-->3;propiedad5-->2;propiedad6-->1",
  palabras([6,5,4,3,2,1]));
  })
});
//ejercicio4
function Informe(nombre, apellido, edad, genero, ciudad, pais)
{
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.genero = genero;
	this.ciudad = ciudad;
	this.pais = pais;
	this.ficha = function()
	{
    return "Nombre: "+this.nombre + " "+this.apellido+ "\n" +
     "Edad: "+this.edad + "\n" +
     "Genero: "+this.genero + "\n" +
     "Ciudad: "+this.ciudad + "\n" +
     "Pais: "+this.pais;

	}
}
//Prueba unitaria del ejercicio 4
describe("ejercicios de objetos 4", function(){
    it("que retorne los datos completos ingresados", function(){
      var respuesta = new Informe("Blanca","Perez",19,"Femenino","Santiago","Chile");
      assert.equal("Nombre: Blanca"+" "+"Perez"+"\n" +
      "Edad: 19" +"\n"+
      "Genero: Femenino"+"\n"+
      "Ciudad: Santiago"+"\n"+
      "Pais: Chile",respuesta.ficha());
    });
});
