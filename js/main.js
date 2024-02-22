function suma() {
    //explicacion del  algoritmo
    alert ("algritmo que realiza una suma entre 2 valores ingresados por el usuario")
//Declaracion de variables necesarias 
    let A = 0;
    let B = 0;
    let s = 0;
//capturamos los datos
    A=parseInt(prompt("ingrese el primer valor: "));
    B=parseInt(prompt("ingrese el segundo valor: "));
//realizamos la poperacion 
    s = (A+B);
//muestra el resultado de la suma 
    alert("El resultado de la suma es: " + s);

}    

function opBasicas() {
    //explicacion del  algoritmo
    alert ("algritmo que realiza una suma entre 2 valores ingresados por el usuario")
//Declaracion de variables necesarias 
    let A = 0;
    let B = 0;
    let s = 0;
    let r = 0;
    let m = 0;
    let d = 0;
//capturamos los datos
    A=parseInt(prompt("ingrese el primer valor: "));
    B=parseInt(prompt("ingrese el segundo valor: "));
//realizamos la poperacion 
    s = (A+B);
    r= (A-B);
    m = (A*B);
    d = (A/B);
//muestra el resultado de la suma 
    alert("El resultado de la suma es: " + s + ", El resultado de la resta es: " + r + ", El resultado de la multiplicacion es: " + m + ", El resultado de la division es: " + d);
}

function cuadradoNumero() {
    //explicacion del  algoritmo
    alert("Este algoritmo potencia el numero indicado al cuadrado")

    //Declaracion de variables necesarias 
    A = parseInt(prompt("Ingrese el numero del cual desea saber el cuadrado: "))

    //realizamos la poperacion
    R = (A*A);

    //muestra el resultado de la operación
    alert("El cuadrado del numero ingresado es: "+ R); 
}

function areaTriangulo() {
    //explicacion del  algoritmo
    alert("Este algoritmo calcula el area de un triangulo")

    //Declaracion de variables necesarias 
    baseTriangulo = parseInt(prompt("Ingrese la base del triangulo: "))
    alturaTriangulo = parseInt(prompt("Ingrese la altura del triangulo: "))
    //realizamos la poperacion
    areaTriangulo = (baseTriangulo* alturaTriangulo/2);

    //muestra el resultado de la operación
    alert("El area del triangulo es: "+ areaTriangulo); 
}

function conversionMedidas() {
    //explicacion del  algoritmo
    alert("Este algoritmo convierte las medidas")

    //Declaracion de variables necesarias 
    valorMedida = parseInt(prompt("Ingrese la medida que desee convertir: "))
    metodoConversion = prompt("Seleccione el metodo de conversión: a)pulgadas, b) kilometros y c) milimetros");

    //realizamos la poperacion
    if (metodoConversion === "a"){
        alert(valorMedida + " pulgadas a kilommetros es: " + (valorMedida / 39370.1))
        alert(valorMedida + " pulgadas en milimetros es: " + (valorMedida * 25.4));
    } else if (metodoConversion === "b") {
        alert(valorMedida + " Kilometros a pulgadas es: " + (valorMedida * 39370));
        alert(valorMedida + " Kilometros a milimetros es: " + (valorMedida * 1000000));
    } else if (metodoConversion === "c") {
        alert(valorMedida + " milimetros a pulgadas es: " + (valorMedida / 25.4));
        alert(valorMedida + " milimetros a kilometros es: " + (valorMedida / 1000000));
    }
} 

function numeroMayor() {
    //explicacion del  algoritmo
    alert("Este algoritmo busca el numero mayor entre dos numeros")

    //Declaracion de variables necesarias 
    numero1 = parseInt(prompt("ingrese el primer numero: "))
    numero2 = parseInt(prompt("ingrese el segundo numero: "))
    
    //muestra el resultado de la operación
    if (numero1 > numero2){
        alert("El numero " + numero1 + " es mayor que " + numero2)
    } else{
        alert("El numero " + numero2 + " es mayor que " + numero1)
    }
}

function numeroMenor() {
    //explicacion del  algoritmo
    alert("Este algoritmo busca el numero menor entre tres numeros")

    //Declaracion de variables necesarias 
    numero1 = parseInt(prompt("ingrese el primer numero: "))
    numero2 = parseInt(prompt("ingrese el segundo numero: "))
    numero3 = parseInt(prompt("ingrese el tercer numero: "))
    
    //muestra el resultado de la operación
    if (numero1 < numero2 && numero1 < numero3){
        alert("El numero " + numero1 + " es menor que el " + numero2 + " y el " + numero3)
    } else if (numero2 < numero1 && numero2 < numero3){
        alert("El numero " + numero2 + " es menor que el " + numero1 + " y el " + numero3)
    } else if (numero3 < numero1 && numero3 < numero2){
        alert("El numero " + numero3 + " es menor que el " + numero1 + " y el " + numero2)
    }
}

function promedioNotas() {
    //explicacion del  algoritmo
    alert("Este algoritmo busca calcular el promedio de notas de un estudiante de algoritmia")

    //Declaracion de variables necesarias 
    nota1 = parseFloat(prompt("ingrese la primera nota: "))
    nota2 = parseFloat(prompt("ingrese la segunda nota: "))
    nota3 = parseFloat(prompt("ingrese la tercera nota: "))
    nota4 = parseFloat(prompt("ingrese la cuarta nota: "))
    nota5 = parseFloat(prompt("ingrese la quinta nota: "))
    nota6 = parseFloat(prompt("ingrese la sexta nota: "))
    nota7 = parseFloat(prompt("ingrese la septima nota: "))

    //realizamos la poperacion
    promedio = ((nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7);

    alert("el promedio del estudiante fué: "+ promedio)
    //muestra el resultado de la operación
    if (promedio > 6.1){
        alert("el estudiante aprobó la materia")
    }
    else{
        alert("el estudiante reprobó la materia")
    }
}

function descuento() {
    // explicacion del  algoritmo
    alert("Algoritmo que calcula el descuento por valor comprado");

    // Declaracion de variables necesarias 
    cantidadProductos = parseInt(prompt("Ingrese la cantidad de kilos comprados: "));
    precioUnitario = parseInt(prompt("Ingrese el precio unitario de la manzana: "));
    subtotal = cantidadProductos * precioUnitario;
    
    alert("El subtotal es " + subtotal);
    
    // Aplicamos el descuento
    if (cantidadProductos <= 2) {
        descuento = 0;
        total = subtotal;
        alert("No se aplicó ningún descuento, el total es " + total);
    } else if (cantidadProductos >= 3 && cantidadProductos <= 5) {
        descuento = subtotal * 0.1;
        total = subtotal - descuento;
        alert("Se aplicó un descuento del 10%, el total es " + total);
    } else if (cantidadProductos >= 6 && cantidadProductos <= 10) {
        descuento = subtotal * 0.15;
        total = subtotal - descuento;
        alert("Se aplicó un descuento del 15%, el total es " + total);
    } else if (cantidadProductos >= 11) {
        descuento = subtotal * 0.2;
        total = subtotal - descuento;
        alert("Se aplicó un descuento del 20%, el total es " + total);
    }
}

function horasTrabajadas() {
    //explicacion del  algoritmo
    alert("Este algoritmo busca calcular el salario de un trabajador segun las horas trabajadas en una semana")

    //Declaracion de variables necesarias 
    lun = parseFloat(prompt("ingrese las horas trabajadas el lunes: "))
    mar = parseFloat(prompt("ingrese las horas trabajadas el martes: "))
    mier = parseFloat(prompt("ingrese las horas trabajadas el miercoles: "))
    jue = parseFloat(prompt("ingrese las horas trabajadas el jueves: "))
    vier = parseFloat(prompt("ingrese las horas trabajadas el viernes: "))

    //realizamos la poperacion
    horastrabajadas = (lun+mar+mier+jue+vier);

    alert("las horas que trabajó fueron: " + horastrabajadas);

    //muestra el resultado de la operación
    if (horastrabajadas <= 40){
        salario = horastrabajadas * 12500;
        alert("El salario del trabajador esta semana fué: " + salario)
    }
    else if(horastrabajadas > 40){
        horas_extras = horastrabajadas - 40;
        salario_extra = horas_extras * 18000;
        salario_fijo = 40 * 12500;
        sueldo_total = salario_fijo + salario_extra;
        alert("El salario del trabajador esta semana fué: " + sueldo_total)
    }
}
