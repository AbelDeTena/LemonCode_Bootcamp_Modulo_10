console.log(`Ejercicio 1: Función "hasId"`);
//Implementa una función llamada que admita como parámetro un objeto y compruebe si dicho objeto tiene una propiedad llamada (debe devolver booleano /).hasIdidtruefalse
const user = {
  id: 4451234,
  name: "Javi",
  surname: "Calzado",
  age: 36,
  location: {
    country: "Spain",
    city: "Málaga",
    postalCode: 29017,
  },
};
//CONSEJO: No accedas a 'id' con punto (.) o con corchetes ([]).
const hasId = ({ id }) => (id ? true : false);
console.log(hasId(user));

console.log(`Ejercicio 2: Función "head"`);
//Implementa una función llamada tal que, dado un array como entrada, devuelva el primer elemento.head
const teachers = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
//CONSEJO: No utilices el corchete ([]) para acceder a la posición 0.
let head = ([first] = Array) => console.log(first);
head(([head] = teachers));

console.log(`Ejercicio 3: Función "tail"`);
//Implementa una función llamada tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.tail
const teachers3 = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
const tail = ([first, ...others]) => {
  console.log([...others]);
};
tail(teachers3);

console.log(`Ejercicio 4: Función "swapFirstToLast"`);
//Implementa una función llamada tal que, dado un array como entrada, devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.swapFirstToLast
const teachers4 = ["Javi", "Lissette", "Jaime", "Victor", "Dani"];
//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.
const swapFirstToLast = ([first, ...others] = Array) =>
  console.log([...others, first]);
swapFirstToLast(teachers4);

console.log(`Ejercicio 5: Función "xcludeIde"`);
//Implementa una función llamada tal que, dado un objeto como entrada, devuelva dicho objeto clonado excepto la propiedad si la hubiera.excludeIdid
const user2 = {
  id: 4451234,
  name: "Javi",
  surname: "Calzado",
  age: 36,
  location: {
    country: "Spain",
    city: "Málaga",
    postalCode: 29017,
  },
};
//CONSEJO: No modifiques el objeto de entrada. Piensa en destructuring y rest.
const xcludeIde = ({ id, ...others } = Object) => console.log({ ...others });
xcludeIde(user2);

console.log(`Ejercicio 6: Función "wordsStartingWithA"`);
//Implementa una función llamada tal que, dado un array de palabras como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.wordsStartingWithA
const palabras = [
  "Abel",
  "Trapo",
  "Horizonte",
  "Caravana",
  "Ordenador",
  "Almendra",
];
//CONSEJO: No utilices bucles.
const wordsStartingWithA = ([...words] = Array) =>
  console.log([...words].filter((word) => word[0] === "A"));
wordsStartingWithA(palabras);

console.log(`Ejercicio 6: Función "concat"`);
//Implementa una función llamada tal que admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por .concat|
const string1 = "Lorem ipsum dolor";
const string2 = "Aenean ac euismod ante";
const string3 = "Lacus nulla, iaculis eget enim vitae.";
//CONSEJO: No utilices bucles.
const concat = (...string) => console.log([...string].join(" -concat- "));
concat(string1, string2, string3);

console.log(`Ejercicio 6: Función "multArray"`);
//Implementa una función llamada que admita un array de números () y otro parámetro que sea un número () y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.multArrayarrx
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const factor = 5;
//CONSEJO: No utilices bucles.
const multArray = ([...numbers], number) =>
  console.log([...numbers].map((num) => num * number));
multArray(numeros, factor);

console.log(`Ejercicio 6: Función "calcMult"`);
//Implementa una función llamada que admita múltiples números como argumento y devuelva como resultado el producto de todos ellos.calcMult
const numeros2 = [1, 1, 1, 1, 2, 1, 1, 1, 1, 10];
//CONSEJO: No utilices bucles.
const calcMult = ([...numbers]) =>
  [...numbers].reduce((acc, number) => acc * number);
console.log(calcMult(numeros2));

console.log("Ejercicios Extra");
console.log("Extra 1: swapFirstSecond");
//Implementa una función tal que dado un array, devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.swapFirstSecond
const swap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//CONSEJO: No modifiques el array de entrada original.
const swapFirstSecond = ([first, second, ...others]) => [
  second,
  first,
  ...others,
];
console.log(swapFirstSecond(swap));

//PENDIENTE
console.log("Extra 2: firstEqual");
//Implementa una función tal que admita multiples strings como argumento de entrada así como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
const palabras2 = [
  "Abel",
  "ATrapo",
  "AHorizonte",
  "ACaravana",
  "AOrdenador",
  "Almendra",
];
const index = "A";
const firstEqual = (letter, strings) =>
  strings.every((string) => string.startsWith(letter));
//CONSEJO: No utilices bucles. No accedas al primer carácter con corchetes ([]).
console.log(firstEqual(index, palabras2));

console.log("Extra 3: longest");
//Implementa una función que admita múltiples arrays como entrada, y devuelva el array más largo.longest
const corto = [1, 2, 3, 4, 5];
const largo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mediano = [1, 2, 3, 4, 5, 6, 7];
//CONSEJO: No utilices bucles. Hay diversas formas de hacerlo.
const longest = (...array) => {
  nueva = [...array];
  nueva.sort((a, b) => b.length - a.length);
  return nueva[0];
};
console.log(longest(corto, largo, mediano));

console.log("Extra 4: searchInStringV1");
// //Implementa una función llamada tal que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece dicho carácter en el string.searchInStringV1
let letra = "A";
let texto = "Hola me llamo Benito";
//CONSEJO: Convierte el string a un array mediante .Array.from()
const searchInStringV1 = (letter, string) => {
  letter = letter.toLowerCase();
  string = string.toLowerCase();
  return Array.from(string).reduce(
    (acc, item) => (item === letter ? acc + 1 : acc),
    0
  );
};
// //CONSEJO: No utilices bucles.
console.log(searchInStringV1(letra, texto));

console.log("Extra 5: searchInStringV2");
//Implementa el mismo ejercicio de antes, llamando a la función , encontrando otra alternativa sin usar .searchInStringV2reduce
const searchInStringV2 = (letter, string) => {
  letter = letter.toLowerCase();
  string = string.toLowerCase();
  let array = Array.from(string);
  let filtrado = array.filter((str) => str == letter);
  return filtrado.length;
};
//CONSEJO: No utilices bucles.
console.log(searchInStringV2(letra, texto));

console.log("Extra 6: sortCharacters");
//Implementa una función llamada tal que dado un string, lo devuelva con sus letras ordenadas alfabéticamente.sortCharacters
const letrasDesordenadas = "asdflkjghqpowieurytzxcvbnm";
const sortCharacters = (string) =>
  Array.from(string).sort().toString().replaceAll(",", "");
//CONSEJO: No utilices bucles. No modifiques el string original de entrada.
console.log(sortCharacters(letrasDesordenadas));

console.log("Extra 7: shout");
//Implementa una función llamada tal que, dadas múltiples palabras como entrada, devuelva todas las palabras concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.shout
const palabra1 = "hola";
const palabra2 = "me llamo";
const palabra3 = "Abel";
const shout = (...strings) => {
  let concatenar = [strings].toString();
  concatenar = concatenar.replaceAll(",", " ");
  concatenar = concatenar.toUpperCase();
  return "¡¡" + concatenar + "!!";
};
//CONSEJO: No utilices bucles.
console.log(shout(palabra1, palabra2, palabra3));

console.log("Extra: Lista de la compra");
//Dada la siguiente lista de la compra:

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

console.log(
  "A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto."
);
const IVA = 0.21;
const getTax = (impuesto, lista) =>
  lista.map((producto) => ({
    ...producto,
    tax: Number(producto.price * impuesto).toFixed(2),
  }));
console.log(getTax(IVA, shoppingCart));

console.log("B. Ordena la lista de más a menos unidades.");
const sortlist = ([...Array]) =>
  [...Array].sort((a, b) => (a.units < b.units ? 1 : -1));
console.log(sortlist(shoppingCart));

console.log("C. Obtén el subtotal gastado en droguería.");
const subtotal = ([...Array], category) =>
  [...Array]
    .filter((product) => product.category === category)
    .reduce((acc, item) => acc.price * acc.units + item.price * item.units);
console.log(subtotal(shoppingCart, "Droguería"));

console.log(
  `D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.`
);
const rearrange = ([...Array]) =>
  [...Array]
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    .map(({ product, price, units }) =>
      console.log(product, "->", (price * units * 1.21).toFixed(2), "€.")
    );
rearrange(shoppingCart);
//CONSEJO: No utilices bucles.
