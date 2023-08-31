//Desestructurar array
/*const numeros = [1,2,3]
console.log(numeros[0])

//let primerValor=[0] //

let [a,b,c] = numeros
/*console.log(a)
console.log(b)
console.log(c)*/

/*let [primerValor] = numeros
//console.log(primerValor)

/*const rakings = [1000,2]
let [jugador1=0, jugador2=0, jugador3=0] = rakings
console.log(`puntaje 1 ${jugador1}`)
console.log(`puntaje 2 ${jugador2}`)
console.log(`puntaje 3 ${jugador3}`)


let primero = 2
let segundo = 4

[primero, segundo] = [segundo, primero]

function datos(){
    return [12, 20.30]
}

let [,,tecerDato] = datos()

let [primeroDato, ...resto] datos()
console.log(primeroDato)
console.log(resto)*/

/*const persona = {
    id:1,
    nombreCompleto: {
    nombres: 'Isaac',
    apellidos: 'Hernandez'
    },
    edad: 23
}

function getEdad({edad}){
    return `La edad de la persona es ${edad}`
}

console.log(getEdad(persona))

function getNombreCompleto({nombreCompleto: {nombres,apellidos}}){
    return `Nombre completo: ${nombres} ${apellidos}`
}

console.log(getNombreCompleto(persona))*/

const bitacora =[
    {
        id: 1,
        titulo: 'Registro',
        detalles:{
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos:{
                anterior:[],
                actual:{
                    id:1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se ingresaron nuevos datos a la tabla persona'
    },

    {
        id: 2,
        titulo: 'Registro',
        detalles:{
            hora: '10:00 AM',
            fecha: '10 de agosto de 2023',
            campos:{
                anterior:[{
                    id:1,
                    nombres: 'Juan',
                    apellidos:'Hernández'
                }],
                actual:{
                    id:1,
                    nombres: 'Juan',
                    apellidos: 'Hernandez'
                }
            }
        },
        descripcion: 'Se ingresaron nuevos datos a la tabla persona'
    },

]

//1
/*for (const{titulo, detalles:{hora ,fecha}, descripcion} of bitacora){
    console.log(titulo)
    console.log(fecha)
    console.log(hora)
    console.log(descripcion)
}*/

//2
/*function desempacar([{
    titulo,
    descripcion,
    detalles:{
        hora, fecha
    }
}])
{
    return`${titulo}
    ${descripcion}
    ${fecha}
    ${hora}`
}

console.log(desempacar(bitacora))*/

let [, {detalles: {campos: {anterior, actual}}}] = bitacora
console.log(anterior)
console.log(actual)