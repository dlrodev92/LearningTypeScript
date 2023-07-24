let mensaje: string = 'Hola Perro Sanchez';

mensaje = "los muertos de la pesoe son unos hijos de puta";

console.log(mensaje);

mensaje = "cago en diez";

let exticionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = 'Tiranosaurio Rex';
let dinosaurioExtinto: boolean = true;
let dinosaurios: string[] = ['Velociraptor', 'Estegosaurio', 'Triceratops'];
let numeroDeDinosaurios: number[] = [50, 25, 33, 40];
let tupla: [string, number, boolean] = ['Pepito', 25, true]; // Tupla they are immutable, they only let you add the values that you have defined in the declaration.
//enums
enum Talla{
    Chica = 's', // 0
    Mediana = 'm', // 1
    Grande = 'g', // 2
    ExtraGrande = 'xl' // 3
}

function imprimirDinosaurio() {
    return `El dinosaurio favorito es ${dinosaurioFavorito}, se extingio hace ${exticionDinosaurios} años`;
}

const objeto :
    {
    readonly id: number, //readonly lo hace inmutable por lo que no se pue
    nombre: string,
    apellido?:string, //? lo hace opcional
    }
    = 
    {
    id: 1,
    nombre: 'Pepito',
    apellido: 'Perez', //? lo hace opcional no es necesario por que ya lo definimos en la interfaz
    }

//DE ESTA MANERA DEFINIMOS PRIMERO LA INTERFAZ Y LUEGO LA USAMOS EN EL OBJETO PARA QUE SEA REUTIIZABLE
 
type Persona =  {
    readonly id: number, //readonly lo hace inmutable por lo que no se puede cambiar
    nombre: string,
    apellido?:string, //? lo hace opcional
    }

const persona1: Persona = {
    id: 1,
    nombre: 'Pepito',
    apellido: 'Perez', //? lo hace opcional no es necesario por que ya lo definimos en la interfaz
}