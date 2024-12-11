const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();
  people.forEach(person => {
    if(!person.hasOwnProperty("yearOfDeath")) {
      person.yearOfDeath = currentYear;
    }
  })
  let sorted = people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - 
               (a.yearOfDeath - a.yearOfBirth));
  return sorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;
