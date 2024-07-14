function checkProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}
// пример
const person = {
    name: 'John',
    age: 30,
    job: 'Developer'
};
//вызов
console.log(checkProperty(person, 'name'));
console.log(checkProperty(person, 'salary'));
