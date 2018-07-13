import { people, getByID } from "./db";

const pensivej = {
    name: "pensivej",
    age: 18,
    gender: "male"
}

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getByID(id)
    }
};

export default resolvers;