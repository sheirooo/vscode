let obj = {x: 1, y: 2, z: 3};

console.log('x' in obj);
console.log('w' in obj);
// Выведет true на первую строку и false на вторую. Вывело так, потому что x - существующее свойство в объекте, а w - нет.