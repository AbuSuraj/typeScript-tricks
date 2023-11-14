const getMyCarSpeed = (speed: unknown) =>{
if(typeof speed === 'number'){
    const v = ((speed * 1000)/3600).toFixed(2);
    console.log(v);
}
else if(typeof speed === 'string'){
    const [v, m] = speed.split(' ');
    const newV = ((parseFloat(v) * 1000)/3600).toFixed(2);
    console.log(newV);
    
}

}

getMyCarSpeed(29)
getMyCarSpeed('10 kmh^-1')