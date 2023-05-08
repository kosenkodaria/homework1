const people2 = [
    {
        name: 'Jack',
        age: 15
    },
    {
        name: 'Sarah',
        age: 21
    },
    {
        name: 'Bob',
        age: 54
    },
    {
        name: 'Mary',
        age: 12
    },
    {
        name: 'Simon',
        age: 18
    },
    {
        name: 'Jonhatan',
        age: 17
    }
];

const oldestPerson = [];
let max = 0;

for (let i = 0; i < people2.length; i++) {
    
    if (people2[i].age > max) {
        max = people2[i].age;
    }
    
}
console.log(max);

