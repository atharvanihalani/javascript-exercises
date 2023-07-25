const findTheOldest = function() {
    const getAge = function(person) {
        if (!Object.keys(person).includes('yearOfDeath')) {
            let date = new Date();
            return date.getFullYear() - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth;
    }

    let oldest = arguments[0][0];
    [...arguments[0]].forEach(person => {
        if (getAge(person) > getAge(oldest)) {
            oldest = person;
        }
    })

    return oldest;
};


const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

findTheOldest(people);


// Do not edit below this line
module.exports = findTheOldest;
