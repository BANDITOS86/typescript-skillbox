// type List<T> = {
//   [index: number]: T;
// }

// const list: List = [1, 'string', true];

// type Numbers = List<number>;

// const numbers: Numbers = [1, 2, 3, 4, 5, 'string'];

// type Numbers1 = number[];
// type Numbers2 = Array<number>;
// type Numbers3 = ReadonlyArray<number>;

////////////////////////////////////////////////

// function  identity<T>(argument: T): T {
//   return argument;
// }

// const number = identity(42);
// const string = identity('string');

// string.toFixed(2);

////////////////////////////////////////////

// function createList<T>(a: T): T[] {
//   const items: T[] = [ a, a, a ];

//   return items;
// }

// createList(1);
// createList('1');

///////////////////////////////////

// function merge<T, U>(a: T, b: U): T & U {
//   return {...a, ...b}  
// }

// const object = merge({ a: 42 }, { b: 'string' });