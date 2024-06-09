const findTheOldest = function(people) {

    const oldest = people.sort(function(a, b) {
        !a.yearOfDeath ? a.yearOfDeath = new Date().getFullYear() : a.yearOfDeath = a.yearOfDeath
        !b.yearOfDeath ? b.yearOfDeath = new Date().getFullYear() : b.yearOfDeath = b.yearOfDeath
        

        const last = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;
      })
    
      return oldest[0]

};

// Do not edit below this line
module.exports = findTheOldest;
