export const people = [
    {
        id: "1",
        name: "pine",
        age: 23,
        gender: "male"
    },
    {
        id: "2",
        name: "meko",
        age: 43,
        gender: "male"
    },
    {
        id: "3",
        name: "ark",
        age: 45,
        gender: "male"
    },
    {
        id: "4",
        name: "anamo",
        age: 25,
        gender: "male"
    },
    {
        id: "5",
        name: "libero",
        age: 5,
        gender: "male"
    },
    {
        id: "6",
        name: "mano",
        age: 12,
        gender: "male"
    },
];

export const getByID = id => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0]
}