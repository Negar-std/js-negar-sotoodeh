const persons = []

const addPerson = (name, age, id, field) => {
    if (!name && !age && !id) return null;
    const Person = {
        name,
        age,
        id,
        field
    }
    persons.push(Person)
}

const editPerson = (id, newName, newAge, newFfield) => {
    const person = persons.find(person => person.id === id);
    if (person) {
      person.name = newName;
      person.age = newAge;
      person.field = newFfield;
    }
}

const removePerson = (id) => {
    const index = persons.findIndex(person => person.id === id);
    if (index !== -1) {
        persons.splice(index, 1);
    }
}



addPerson("sara", 25, 1, "Computer");
addPerson("ana", 20, 2, "Science");
addPerson("ali", 19, 3, "Computer");

editPerson(3, "reza", 22, "Science")

removePerson(2);

console.log(persons);