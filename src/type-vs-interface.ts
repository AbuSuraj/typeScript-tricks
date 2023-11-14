type Add = {
a: number;
b: number;
}

interface Subs {
    a: number;
    b: number;
}

// Declaration Merging: 
interface User3 {
    name: string;
    age: number;
}

interface User3 {
    email: string;
}

// Merged interface
let newUser: User3 = { name: "John", age: 30, email: "john@example.com" };