// function volume([weight, height, depth]: [number, number, number]): number {
//   return weight * height * depth;
// }

// volume([1, 2, 3]);
// volume([1, 2, 3, 4]);
// volume([1, '2', 3]);

/////////////////////////////////

type Person = [ string, number, boolean? ];

const person1: Person = [ 'Alex', 1900, ];
const person2: Person = [ 'Alex', 1900, true ];

person1[0];
person1[1];
person1[2];

