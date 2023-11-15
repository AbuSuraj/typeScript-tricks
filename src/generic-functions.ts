const createArray = (param:string): string []=>{
    return [param]
}
const createArray2 =<T> (param:T): T []=>{
    return [param]
}
const createArray3 =<X,Y>(param1:X, param2: Y): [X,Y]=>{
    return [param1, param2]
}


console.log(createArray2<string>('India'));
console.log(createArray2<number>(2));
console.log(createArray3<number, string>(2, 'Suraj'));

// console.log(createArray('Bangladesh'));
//   function a (){
// console.log('hierarchifgcal')
// } 
// a()