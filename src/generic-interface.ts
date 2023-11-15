interface Manush <T, U=null> {
    name: string;
    husband: T;
    wife?: U;
} 

const townermanush: Manush<string> = {
    name: 'Abil',
    husband: 'kabil' 
}