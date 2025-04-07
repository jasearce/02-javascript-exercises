function getAge(dateOfBirth, dateOfDeath) {
    let age = 0;
    if ( !dateOfDeath ) {
        age = new Date().getFullYear() - dateOfBirth;
    }
    else {
        age = dateOfDeath - dateOfBirth;
    }
    return age;
}


const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, person) => {
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        if (oldestAge < personAge) {
            oldest = person;
        }
        console.log(`Oldest: ${JSON.stringify(oldest)} | Person ${JSON.stringify(person)}`);
        return oldest;
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
