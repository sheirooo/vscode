let obj = {x: 1, y: 2, z: 3};
delete obj.x;

console.log('x' in obj);
// Выведет false, потому как мы удалили свойство x из объекта