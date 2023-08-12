"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const personList = [
    {
        firstName: "sara",
        lastName: "rezae",
        age: 20,
        job: "teacher",
        maritalStatus: true,
        gender: "female",
        height: 170,
        weight: 55,
        id: 123,
        phoneNumber: 9145642234
    }
];
const createPerson = (person) => {
    personList.push(person);
};
const updatePerson = (id, person) => {
    const personIndex = personList.findIndex((item) => item.id === id);
    personList[personIndex] = Object.assign(Object.assign({}, personList[personIndex]), person);
};
const removePerson = (id, person) => {
    const personIndex = personList.findIndex((item) => item.id === id);
    if (personIndex !== -1) {
        personList.splice(personIndex, 1);
    }
};
const sortPeopleByName = () => {
    personList.splice(0, personList.length, ...lodash_1.default.sortBy(personList, ['firstName']));
};
createPerson({
    firstName: "ali",
    lastName: "jafari",
    age: 30,
    job: "engineer",
    maritalStatus: false,
    gender: "male",
    height: 180,
    weight: 75,
    id: 456,
    phoneNumber: 9123456789,
});
sortPeopleByName();
console.log(personList);
