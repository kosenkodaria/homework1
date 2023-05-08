const people = [
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
]
const adults = [];

for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        adults.push(people[i].name);
    }
    
}
console.log(adults);