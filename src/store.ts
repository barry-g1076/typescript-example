/* eslint-disable prettier/prettier */
export interface Dog {
  name: string;
  age: number;
  breed?: string;
}

// const dog: Dog={
//     name:"jack",
//     age: 12
// }

export function getGoodDogs(): Array<Dog> {
  return [
    { name: "Sammy", age: 3 },
    { name: "Roscoe", age: 5, breed: "Lab mix" },
  ];
}
