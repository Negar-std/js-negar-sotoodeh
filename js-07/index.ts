import _ from "lodash";

type personType = {
    firstName?: string;
    lastName?: string;
    age?: number | string;
    job?: string;
    maritalStatus?: boolean;
    gender?: "female" | "male";
    height?: number | string;
    weight?: number | string;
    id?: number | string;
    phoneNumber?: number;
};

const personList: Array<personType> = [
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

const createPerson = (person: personType): void => {
    personList.push(person);
};

const updatePerson = (id: personType["id"], person: personType) => {
    const personIndex: number = personList.findIndex((item) => item.id === id);
    personList[personIndex] = { ...personList[personIndex], ...person };
};

const removePerson = (id: personType["id"], person: personType) => {
    const personIndex: number = personList.findIndex((item) => item.id === id);
    if (personIndex !== -1) {
        personList.splice(personIndex, 1);
    }
};


const sortPeopleByName = () => {
    personList.splice(0, personList.length, ..._.sortBy(personList, ['firstName']));
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