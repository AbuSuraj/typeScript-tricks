// we are declaring genereic type here, 
//  same like decraling a function 
// then when we need to add type we pass exact type 
type GenericArray<T> = Array<T>

const id: GenericArray<number> = [1, 2, 3, 4, 5];
const stdName: GenericArray<string> = ['karim', 'rahim'];

// we can send more than one type into genereic type declaration 

type GenericTuple<X,Y> = [X,Y];

const relation: GenericTuple<number, string> = [1, 's']

console.log(relation);
